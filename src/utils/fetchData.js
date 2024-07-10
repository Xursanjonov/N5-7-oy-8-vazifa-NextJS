export async function getData(path) {
  const res = await fetch(`https://dummyjson.com${path}`);
  const data = await res.json();

  return data?.products;
}
