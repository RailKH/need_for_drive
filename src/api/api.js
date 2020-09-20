const URL = "http://api-factory.simbirsoft1.com/api/db/";
const PROXY = "https://cors-anywhere.herokuapp.com/";

function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
async function getData(item) {
  return await fetch(`${PROXY}${URL}${item}`, {
    method: "GET",
    headers: { "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b" },
  }).then((res) => res.json());
}
async function postDataPoint(name, address, cityId) {
  return await fetch(`${PROXY}${URL}point`, {
    method: "POST",
    headers: {
      "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
      "Content-Type": "application/json",
      Authorization: "Bearer " + getCookie("access_token"),
    },
    body: JSON.stringify({
      name: name,
      cityId: cityId,
      address: address,
    }),
  }).then((res) => res.json());
}
async function putDataPoint(name, address, changeId) {
  return await fetch(`${PROXY}${URL}point/${changeId}`, {
    method: "PUT",
    headers: {
      "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
      "Content-Type": "application/json",
      Authorization: "Bearer " + getCookie("access_token"),
    },
    body: JSON.stringify({
      name: name,
      address: address,
    }),
  }).then((res) => res.json());
}
async function putDataCar(state, changeId, method) {
  return await fetch(`${PROXY}${URL}car/${changeId}`, {
    method: method,
    headers: {
      "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
      "Content-Type": "application/json",
      Authorization: "Bearer " + getCookie("access_token"),
    },
    body: JSON.stringify(state),
  }).then((res) => res.json());
}
async function postDataCar(state) {
  console.log(state);
  return await fetch(`${PROXY}${URL}car/`, {
    method: "POST",
    headers: {
      "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
      "Content-Type": "application/json",
      Authorization: "Bearer " + getCookie("access_token"),
    },
    body: JSON.stringify(state),
  }).then((res) => res.json());
}

export default {
  getData,
  postDataPoint,
  putDataPoint,
  putDataCar,
  postDataCar,
};
