const DUMMY_DATA = [
  {
    name: "Nitesh Kumar Tudu",
    phoneNumber: "45153465",
    query: "i AM GROOT"
  },
  {
    name: "Nitesh Tudu",
    phoneNumber: "453453465",
    query: "i AM Iron Man"
  },
  {
    name: "Kumar Tudu",
    phoneNumber: "45153564",
    query: "i AM hUlk"
  }
];

const list = document.querySelector("#unordered-list");
DUMMY_DATA.forEach((data) => {
  const newList = document.createElement("ul");
  newList.innerHTML = ` <li>${data.name}</li><li>${data.phoneNumber}</li><li>${data.query}</li>`;
  list.appendChild(newList);
});

const allUl = document.querySelectorAll("ul");
allUl.forEach((ul) => {
  ul.classList.add("py-2");
  ul.classList.add("px-4");
  ul.classList.add("my-2");
  ul.classList.add("bg-gray-200");
});
