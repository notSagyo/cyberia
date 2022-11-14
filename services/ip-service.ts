import { ipapi } from '/types/ipapi';
import { fetchUrl } from '/utils/urls';

class IpService {
  ipapiUrl = 'https://ipapi.co/json/';
  ipInfoUrl = this.ipapiUrl;
  storageKey = 'ipInfo';

  fetchIpInfoIpapi() {
    return this.fetchIpInfo<ipapi>(this.ipapiUrl);
  }
  getIpInfoIpapi() {
    return this.getIpInfo<ipapi>(this.ipapiUrl);
  }

  async fetchIpInfo<T>(url = this.ipInfoUrl): Promise<T | null> {
    try {
      const data = await fetch(`${fetchUrl}/${url}`);
      const dataJson = data.json();
      return dataJson;
    } catch (error) {
      console.warn(url, error);
      return null;
    }
  }

  async getIpInfo<T>(url = this.ipInfoUrl): Promise<T | null> {
    const localData = this.loadIpInfoLocalstorage();
    if (localData) return localData as T;
    console.warn(`${this.storageKey} not found on Local Storage, fetching...`);
    const data = await this.fetchIpInfo<T>(url);
    this.saveIpInfoLocalstorage(JSON.stringify(data));
    return data;
  }

  loadIpInfoLocalstorage<T>(): T | null {
    try {
      const data = localStorage.getItem(this.storageKey);
      const dataJson = (data && (JSON.parse(data) as T)) || null;
      return dataJson;
    } catch (error) {
      console.warn(this.storageKey, error);
      return null;
    }
  }

  saveIpInfoLocalstorage(data: string): boolean {
    try {
      localStorage.setItem(this.storageKey, data);
      return true;
    } catch (error) {
      console.warn(this.storageKey, error);
      return false;
    }
  }
}

const ipService = new IpService();
export default ipService;
