const container = document.querySelector("#container");
const btn = document.querySelector(".btn");
const newCard = document.querySelector(".new-card");
const fetchData = async () => {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/users/${randomNumber}`
  );
  const res = await data.json();
  //   console.log(res);

  const html = `<p>Name: ${res.name}</p>
  <p>Email: ${res.email}</p>
  <p>Phone: ${res.phone}</p>`;
  btn.style.backgroundColor = "cadetblue";
  newCard.innerHTML = html;
};

btn.addEventListener("click", () => fetchData());
