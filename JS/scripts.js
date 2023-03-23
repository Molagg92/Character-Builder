function nameSubmit(event) {
  event.preventDefault();
  const nameInput = document.getElementById("nameInput").value;
  document.querySelector("span#nameCharacter").innerText = nameInput
  let paladinFacts = document.getElementById("paladin");
  paladinFacts.setAttribute("class","hidden");
  let rogueFacts = document.getElementById("rogue");
  rogueFacts.setAttribute("class","hidden");
  let wizardFacts = document.getElementById("wizard");
  wizardFacts.setAttribute("class","hidden");
  let druidFacts = document.getElementById("druid");
  druidFacts.setAttribute("class","hidden");
  const operator = document.querySelector("input[name = 'operator']:checked").value;
  let result;
    if (operator === "Strong") {
    result = paladinFacts.removeAttribute("class");
  } else if (operator === "Nimble") {
    result = rogueFacts.removeAttribute("class");
  } else if (operator === "Brilliant") {
    result = wizardFacts.removeAttribute("class");
  } else if (operator === "Wise") {
    result = druidFacts.removeAttribute("class");
  } 
  }

function bodySelect(event){
  event.preventDefault();
  const archeType = document.querySelector("input[name = 'operator']:checked").value;
  document.querySelector("span#profession").innerText = archeType
  
}
//loader
window.addEventListener("load", function() {
  const form = document.getElementById("nameHere");
  form.addEventListener("submit", nameSubmit);

  const span = document.getElementById("attributeForm");
  span.addEventListener("submit", bodySelect);
});

document.addEventListener("load", function(){
  document.querySelector("span#nameCharacter").innerText = nameInput;
  nameInput.removeAttribute("class");
});