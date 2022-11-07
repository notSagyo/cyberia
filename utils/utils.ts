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
