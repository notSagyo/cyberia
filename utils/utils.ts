import _ from 'lodash';

export const navbarRoutes = ['Home', 'Gallery', 'Videos', 'Music'];
export const linkListRoutes = [...navbarRoutes, 'Read', 'Stuff'];

export const getDateString = () => {
  return new Date().toLocaleDateString();
};

export const getTimeString = () => {
  return new Date().toLocaleTimeString(undefined, {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const toUrlikeString = (str: string) => {
  return str.toLowerCase().replaceAll(/-| /g, '_');
};

export const getWeightedRandomPicker = <T extends string>(
  record: Record<T, number>,
  floating = false
): (() => T) => {
  const weightedRecord: Record<T, number> = {} as Record<T, number>;
  let highest = 0;

  for (const elem in record) {
    highest += record[elem];
    weightedRecord[elem] = highest;
  }

  return () => {
    const rand = floating ? Math.random() * highest : _.random(highest);
    const elem =
      (_.keys(weightedRecord) as T[]).find((k) => weightedRecord[k] >= rand) ||
      (Object.keys(weightedRecord)[0] as T);
    return elem;
  };
};

//* KEEPING THIS FOR REFERENCE
export function getImagesNamesInFolder(path: string) {
  if (!path) return [];
  const imagesContext = require.context('../public/img', false); // CHANGE THIS

  let images = imagesContext.keys().map((imgPath) => {
    imgPath = imgPath.replace('./', '');
    return imgPath;
  });

  return images;
}
