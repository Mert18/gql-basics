const users = [
  {
    id: "1",
    name: "Merd",
    email: "mertuygur02@gmail.com",
    age: 22,
  },
  {
    id: "2",
    name: "Goz",
    email: "mertuygur44@outlook.com",
    age: 22,
  },
];

const posts = [
  {
    id: "a",
    title: "Title One",
    body: "Body of the first paragraph.",
    published: true,
    author: "1",
  },
  {
    id: "b",
    title: "Title Two",
    body: "Body of the second paragraph.",
    published: true,
    author: "2",
  },
  {
    id: "c",
    title: "Title Three",
    body: "Body of the third paragraph.",
    published: true,
    author: "2",
  },
];

const comments = [
  {
    id: "f3232h423-2341243",
    text: "Hello its a comment",
    post: "c",
    author: "1",
  },
  {
    id: "1234kk21jl5-2341243",
    text: "Hello its a secondary comment",
    post: "a",
    author: "2",
  },
  {
    id: "gfdmk32k43-2341243",
    text: "Hello its a tertiary comment",
    post: "b",
    author: "1",
  },
  {
    id: "vfdmnk234-2341243",
    text: "Hello its a forth comment",
    post: "a",
    author: "1",
  },
];

const db = {
  users,
  posts,
  comments,
};

export { db as default };
