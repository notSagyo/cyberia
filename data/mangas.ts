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
    name: 'Homunculus',
    id: '231d5196-1f41-4eba-af8d-841d40bc548d',
  },
];

export default mangas;
