export const navigableRoutes = ['Home', 'Gallery', 'Videos', 'Music'];

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

export function getImagesNamesInFolder(path: string) {
  if (!path) return [];
  const imagesContext = require.context('../public/img/omori', false);

  let images = imagesContext.keys().map((imgPath, i) => {
    imgPath = imgPath.replace('./', '');
    return imgPath;
  });

  return images;
}
