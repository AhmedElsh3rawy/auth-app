async function fetchData() {
  let res = await fetch("http://localhost:8080");
  let data = await res.text();
  console.log(data);
}

fetchData();
//---------------------------------------

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("login-btn");
const body = document.body;

loginButton.addEventListener("click", async function (event) {
  event.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  };
  try {
    const response = async () => {
      const r = await fetch(
        "http://localhost:8080/api/auth/login",
        requestOptions
      );
      const status = await r.text();
      return status;
    };
    let status = await response();

    if (status === "OK") {
      body.innerHTML = "";

      let h1Element = document.createElement("h1");

      h1Element.textContent = "Welcome";

      body.appendChild(h1Element);
    } else {
      alert("Invalid email or password");
    }
  } catch (e) {
    console.error(`Error: ${e}`);
    alert("An error occurred.");
  }
});
