function nameSubmit(e) {
  window.e.preventDefault();
  const nameInput = document.getElementById("nameInput").value;
  
}

function bodySelect(){
  const bodyType = document.getElementById("bodyType").value;

}



window.addEventListener("load", function(){
  const nameHere = document.getElementById("nameHere");
  nameHere.addEventListener("submit", nameSubmit);
  const selectForm = document.getElementById("selectForm");
  selectForm.addEventListener("submit", bodySelect);
  const operator = document.querySelector("input[name='operator']:checked").value;
  let result;
  if (operator === "stength") {
    result = ;
  } else if (operator === "dexterity") {
    result = ;
  } else if (operator === "intelligence") {
    result = ;
  } else if (operator === "wisdom") {
    result = ;
  }
});