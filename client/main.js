async function fetchData() {
  let res = await fetch("http://localhost:8080");
  let data = await res.text();
  console.log(data);
}

fetchData();
