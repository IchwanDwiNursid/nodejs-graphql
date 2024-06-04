let games = [
  {
    id: 1,
    title: "The Last of Us",
    platform: ["PS4", "PS5"],
  },
  {
    id: 2,
    title: "Mobile Legand",
    platform: ["Ios", "Android"],
  },
  {
    id: 3,
    title: "Horizon Zero Dawn",
    platform: ["PS4", "PS5"],
  },
  {
    id: 4,
    title: "The Last of Us",
    platform: ["PS4", "PS5"],
  },
  {
    id: 5,
    title: "God of War",
    platform: ["PS4", "PS5"],
  },
  {
    id: 6,
    title: "Gta V",
    platform: ["PS4", "PS5", "Xbox", "PC"],
  },
];

let authors = [
  {
    id: 1,
    name: "Ichwan",
    verified: true,
  },
  {
    id: 2,
    name: "Dwi",
    verified: false,
  },
  {
    id: 3,
    name: "Nursid",
    verified: true,
  },
];

let reviews = [
  {
    id: 1,
    rating: 4,
    content: "Best game ever",
    author_id: 1,
    game_id: 1,
  },
  {
    id: 2,
    rating: 5,
    content: "Best game ever",
    author_id: 2,
    game_id: 2,
  },
  {
    id: 9,
    rating: 5,
    content: "Very Realistic Game",
    author_id: 1,
    game_id: 2,
  },
  {
    id: 3,
    rating: 5,
    content: "Best game ever",
    author_id: 3,
    game_id: 3,
  },
  {
    id: 12,
    rating: 5,
    content: "Very Easy Game",
    author_id: 2,
    game_id: 3,
  },
];

export const _db = { games, authors, reviews };
