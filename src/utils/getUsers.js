export async function getUsers(path) {
  const res = await fetch(`https://dummyjson.com${path}`);
  const data = await res.json();

  return data?.users;
}
