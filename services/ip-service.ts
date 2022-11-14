import { ipapi } from '/types/ipapi';
import { fetchUrl } from '/utils/urls';

class IpService {
  ipapiUrl = 'https://ipapi.co/json/';
  ipInfoUrl = this.ipapiUrl;
  storageKey = 'ipInfo';

  async fetchIpInfoIpapi() {
    return await this.fetchIpInfo<ipapi>(this.ipapiUrl);
  }

  async getIpInfoIpapi() {
    const res = await this.getIpInfo<ipapi>(this.ipapiUrl);
    if (res && 'ip' in res) {
      return res;
    } else console.error(res);
  }

  async fetchIpInfo<T>(url = this.ipInfoUrl): Promise<T | null> {
    try {
      const data = await fetch(`${fetchUrl}/${url}`);
      const dataJson = data.json();
      return dataJson;
    } catch (error) {
      console.error(url, error);
      return null;
    }
  }

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
