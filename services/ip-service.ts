import { Geoiplookup, Ipapi, IpRes } from '/types/ip';
import { fetchUrl, ipUrl } from '/utils/urls';

class IpService {
  /** didn't work in production */
  ipapiUrl = 'https://ipapi.co/json/';
  geoiplookupUrl = 'https://json.geoiplookup.io/';
  ipInfoUrl = this.geoiplookupUrl;
  storageKey = 'ipInfo';

  async fecthClientIp(): Promise<string> {
    const res = await fetch(ipUrl);
    const resJson = (await res.json()) as IpRes | null;
    return resJson?.ip || '';
  }

  async getInfoGeoiplookup(ip: string) {
    const res = await this.getInfo<Geoiplookup>(ip, this.geoiplookupUrl, true);
    if (res && 'ip' in res) {
      return res;
    } else console.error(res);
  }

  async getInfoIpapi(ip: string) {
    const res = await this.getInfo<Ipapi>(ip, this.ipapiUrl, true);
    if (res && 'ip' in res) {
      return res;
    } else console.error(res);
  }

  /** @param proxy should do the request from this app backend? */
  async fetchInfo<T>(
    ip: string,
    url = this.ipInfoUrl,
    proxy = false
  ): Promise<T | null> {
    try {
      const data = await fetch(`${proxy ? fetchUrl + '/' : ''}${url}/${ip}`);
      const dataJson = data.json();
      return dataJson;
    } catch (error) {
      console.error(url, error);
      return null;
    }
  }

  /**
   * Tries to retrieve info from localStorage first
   * @param proxy should do the request from this app backend?
   */
  async getInfo<T>(
    ip: string,
    url = this.ipInfoUrl,
    proxy = false
  ): Promise<T | null> {
    const localData = this.loadInfoFromStorage();
    if (localData) return localData as T;
    console.warn(`${this.storageKey} not found on Local Storage, fetching...`);
    const data = await this.fetchInfo<T>(ip, url, proxy);
    return data;
  }

  loadInfoFromStorage<T>(): T | null {
    try {
      const data = localStorage.getItem(this.storageKey);
      const dataJson = (data && (JSON.parse(data) as T)) || null;
      return dataJson;
    } catch (error) {
      console.error(this.storageKey, error);
      return null;
    }
  }

  saveInfoToStorage(data: string): string | null {
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
