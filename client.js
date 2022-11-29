const formSubmitBtn = document.querySelector("#form-submit");
const queryList = [];

formSubmitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.querySelector("#name");
  const phoneNumber = document.querySelector("#phone-number");
  const query = document.querySelector("#query");
  const singleQuery = {
    name,
    phoneNumber,
    query
  };
  queryList.push(singleQuery);
  console.log(queryList);
});
