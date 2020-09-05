const URL = "http://api-factory.simbirsoft1.com/api/db/";
const PROXY = "https://cors-anywhere.herokuapp.com/";

export default async function getData(item) {
  return await fetch(`${PROXY}${URL}${item}`, {
    method: "GET",
    headers: { "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b" },
  }).then((res) => res.json());
}
