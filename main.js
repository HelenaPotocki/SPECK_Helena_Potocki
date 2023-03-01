
const button = document.getElementById("addButton");
button.addEventListener("click", addNewTechnology);
const remove = document.getElementById("removeAll");
remove.addEventListener("click", deleteAll);
document.addEventListener("keydown", (e) => {
    if(e.key === "Enter") addNewTechnology();
});
const inputValue = document.getElementById("input");
const parent = document.getElementById("ispis");

function addNewTechnology(){
    var newTechnology = document.createElement("div");
    newTechnology.classList.add("tehnologija");
    var p = document.createElement("p");
    p.classList.add("nazivTehnologije");
    p.innerText = inputValue.value;
    newTechnology.appendChild(p);
    parent.appendChild(newTechnology);
    inputValue.value = "";
}
function deleteAll() {
    document.getElementById("ispis").innerHTML = "";
}