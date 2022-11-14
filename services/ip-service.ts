import { Geoiplookup } from '/types/geoiplookup';
import { Ipapi } from '/types/ipapi';
import { fetchUrl } from '/utils/urls';

class IpService {
  /** didn't work in production */
  ipapiUrl = 'https://ipapi.co/json/';
  geoiplookupUrl = 'https://json.geoiplookup.io/';
  ipInfoUrl = this.geoiplookupUrl;
  storageKey = 'ipInfo';

  async getIpInfoGeoiplookup() {
    return await this.getIpInfo<Geoiplookup>(this.geoiplookupUrl);
  }

  async getIpInfoIpapi() {
    const res = await this.getIpInfo<Ipapi>(this.ipapiUrl);
    if (res && 'ip' in res) {
      return res;
    } else console.error(res);
  }

  /** @param proxy should do the request from this app API? */
  async fetchIpInfo<T>(url = this.ipInfoUrl, proxy = false): Promise<T | null> {
    try {
      const data = await fetch(proxy ? `${fetchUrl}/${url}` : url);
      const dataJson = data.json();
      return dataJson;
    } catch (error) {
      console.error(url, error);
      return null;
    }
  }

  /** Tries to retrieve info from localStorage first */
  async getIpInfo<T>(url = this.ipInfoUrl): Promise<T | null> {
    const localData = this.loadIpInfoFromStorage();
    if (localData) return localData as T;
    console.warn(`${this.storageKey} not found on Local Storage, fetching...`);
    const data = await this.fetchIpInfo<T>(url);
    return data;
  }

  loadIpInfoFromStorage<T>(): T | null {
    try {
      const data = localStorage.getItem(this.storageKey);
      const dataJson = (data && (JSON.parse(data) as T)) || null;
      return dataJson;
    } catch (error) {
      console.error(this.storageKey, error);
      return null;
    }
  }

  saveIpInfoToStorage(data: string): string | null {
    try {
      localStorage.setItem(this.storageKey, data);
      return data;
    } catch (error) {
      console.error(this.storageKey, error);
      return null;
    }
  }
}

const ipService = new IpService();
export default ipService;
