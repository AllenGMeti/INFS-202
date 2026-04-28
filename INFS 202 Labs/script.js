const titleElement = document.getElementById("title");
console.log(titleElement.textContent);

const buttonElement = document.querySelector("#myBtn");
console.log("querySelector:", buttonElement.textContent);

const buttonElementa = document.querySelector("#myBtna");
console.log("querySelector:", buttonElementa.textContent);

buttonElement.addEventListener("click", () => {
    alert("Button was clicked!");
});

buttonElementa.addEventListener("click", () => {
    alert("You clicked a button!");
});

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        console.log("API response:", data);
    })
    .catch(error => {
        console.log("Fetch error:", error);
    });

async function loadData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        console.log("Async/Await response:", data);
    } catch (error) {
        console.log("Async error:", error);
    }
}

loadData();

localStorage.setItem("category", "");
console.log("Saved to LocalStorage:", localStorage.getItem("category"));
