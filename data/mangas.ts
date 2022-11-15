import { mangaProvider, MangaProvidersNames } from "/services/consumet-service";

interface IManga {
  id: string;
  title?: string;
}

const mangasMap =
  new Map<string, Partial<Record<MangaProvidersNames, string>>>([
    ['Oyasumi Punpun', {
      mangadex: '4301d363-ee02-43f4-ae24-4cbf29a74830',
      mangasee123: 'Oyasumi-Punpun',
    }],
    ["Dead Dead Demon's Dededede Destruction", {
      mangadex: 'fc7f2c19-0a26-4d89-9505-332fcb7d60c6',
      mangasee123: 'Dead-Dead-Demons-Dededededestruction',
    }],
    ['Solanin', {
      mangadex: 'a42db50d-20df-4f33-bddc-fe990df9c231',
      mangasee123: 'Solanin',
    }],
    ['Heroes', {
      mangadex: '3f815f56-051d-4be1-ba64-7ed6dfcbcaee',
      // ?TODO: Check mangasee123 availability later
    }],
    ['Homunculus', {
      mangadex: '231d5196-1f41-4eba-af8d-841d40bc548d',
      mangasee123: 'Homunculus',
    }],
    ['Monster', {
      mangadex: 'd9e30523-9d65-469e-92a2-302995770950',
      mangasee123: 'Monster',
    }],
    ['Uzumaki', {
      // ?TODO: Check mangadex availability later
      mangasee123: 'Uzumaki',
    }],
    ['Tomie', {
      mangadex: '9ad2d9a1-8e01-48f6-b979-a03b1050a2bd',
      mangasee123: 'Tomie',
    }],
    ['Hellstar Remina', {
      mangadex: '74753c8f-70de-4f52-b7f0-67eccdbd0a2f',
      mangasee123: 'Remina',
    }],
    ['Ibitsu', {
      mangadex: '93d90076-5d63-494e-bb1a-12a289f7ae30',
      mangasee123: 'Ibitsu',
    }],
    ['Berserk', {
      mangadex: '801513ba-a712-498c-8f57-cae55b38cc92',
      mangasee123: 'Berserk',
    }],
    ['Neon Genesis Evangelion', {
      mangasee123: 'Neon-Genesis-Evangelion',
    }],
    ['Akira', {
      mangadex: '175cf215-2122-4656-9fac-37ac092438af',
      mangasee123: 'Akira',
    }],
    // ?TODO: Check mangadex pages availability later
    ['Battle Angel Alita', {
      mangasee123: 'Battle-Angel-Alita',
    }],
    ['Pretty Guardian Sailor Moon', {
      mangadex: 'e39944f5-15bf-4464-9556-a4e9b3945571',
      mangasee123: 'Sailor-Moon',
    }],
]);

const getMangas = (provider: MangaProvidersNames) => {
  const mangas: IManga[] = [];
  mangasMap.forEach((v, k) => {
    v[provider] && mangas.push({ title: k, id: v[provider] as string})
  })
  return mangas;
}

// ?TODO: this broke dev mode, add again in the future:
//? satisfies Partial<Record<MangaProvidersNames, IManga[]>>
export const mangas = {
  mangadex: getMangas('mangadex'),
  mangasee123: getMangas('mangasee123'),
  get default() { return this[mangaProvider] || [] }
};

export default mangas;
