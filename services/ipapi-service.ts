import { ipapi } from '/types/ipapi';

const storageKey = 'ipapi';

export const fetchIpapi = async (): Promise<ipapi | null> => {
  try {
    const data = await fetch('https://ipapi.co/json/');
    const dataJson = data.json();
    return dataJson;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const loadIpapiLocalstorage = (): ipapi | null => {
  try {
    const data = localStorage.getItem(storageKey);
    const dataJson = (data && (JSON.parse(data) as ipapi)) || null;
    return dataJson;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const saveIpapiLocalstorage = (data: string): boolean => {
  try {
    localStorage.setItem(storageKey, data);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const geIpapi = async () => {
  const localData = loadIpapiLocalstorage();
  if (localData) return localData;
  console.warn(`${storageKey} not found on Local Storage, fetching...`);
  const data = await fetchIpapi();
  saveIpapiLocalstorage(JSON.stringify(data));
  return data;
};
