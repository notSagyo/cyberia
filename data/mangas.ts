interface IManga {
  name: string;
  id: string;
}

// Mangadex's IDs
// !TODO: Uncomment before production
const mangas: IManga[] = [
  {
    name: 'Oyasumi Punpun',
    id: '4301d363-ee02-43f4-ae24-4cbf29a74830',
  },
  {
    name: "Dead Dead Demon's Dededede Destruction",
    id: 'fc7f2c19-0a26-4d89-9505-332fcb7d60c6',
  },
  {
    name: 'Solanin',
    id: 'a42db50d-20df-4f33-bddc-fe990df9c231',
  },
  {
    name: 'Heroes',
    id: '3f815f56-051d-4be1-ba64-7ed6dfcbcaee',
  },
  {
    name: 'Homunculus',
    id: '231d5196-1f41-4eba-af8d-841d40bc548d',
  },
  {
    name: 'Monster',
    id: 'd9e30523-9d65-469e-92a2-302995770950',
  },
  // ?TODO: Check availability later
  // {
  //   name: 'Uzumaki',
  //   id: 'f4cfbb1c-766e-49db-ae80-1a5db3cbcc1b',
  // },
  {
    name: 'Tomie',
    id: '9ad2d9a1-8e01-48f6-b979-a03b1050a2bd',
  },
  {
    name: 'Hellstar Remina',
    id: '74753c8f-70de-4f52-b7f0-67eccdbd0a2f',
  },
  {
    name: 'Ibitsu',
    id: '93d90076-5d63-494e-bb1a-12a289f7ae30',
  },
  {
    name: 'Berserk',
    id: '801513ba-a712-498c-8f57-cae55b38cc92',
  },
  // ?TODO: Check availability later
  // {
  //   name: 'Neon Genesis Evangelion',
  // },
  {
    name: 'Akira',
    id: '175cf215-2122-4656-9fac-37ac092438af',
  },
  // ?TODO: Check pages availability later
  // {
  //   name: 'Battle Angel Alita',
  //   id: 'f64f7752-f0b5-4a21-913c-e8b077e0b8b2',
  // },
  {
    name: 'Pretty Guardian Sailor Moon',
    id: 'e39944f5-15bf-4464-9556-a4e9b3945571',
  },
];

export default mangas;
