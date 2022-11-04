// ?TODO: Make request to anilist instead?
import Gogoanime from '@consumet/extensions/dist/providers/anime/gogoanime';
import Zoro from '@consumet/extensions/dist/providers/anime/zoro';

export const gogoanime = new Gogoanime();
export const zoro = new Zoro();

export const provider = zoro;
