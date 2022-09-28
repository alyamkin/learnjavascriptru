// console.log("hello");
// // localStorage.setItem("test", 1);
// const test = localStorage.getItem("test");

// const keys = Object.keys(localStorage);
// console.log(keys);

// for (let key of keys) {
//   console.log(`${key}: ${localStorage.getItem(key)}`);
// }

// localStorage.user = JSON.stringify({ name: "John" });
// const user = JSON.parse(localStorage.user);
// console.log(user);
// console.log(localStorage);

// sessionStorage.setItem("test", 1);

// window.addEventListener("storage", (event) => {
//   console.log(event);
// });
const buttonElement = document.querySelector("button");
const textAreaElement = document.querySelector("textarea");

buttonElement.addEventListener("click", (event) => {
  event.preventDefault();
  textAreaElement.value = "";
});

textAreaElement.addEventListener("change", (event) => {
  const message = event.currentTarget.value;
  localStorage.setItem("message", message);
});

textAreaElement.value = localStorage.getItem("message");
