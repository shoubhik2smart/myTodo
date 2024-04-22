const input = document.querySelector("#getinput");
const btn = document.querySelector("#add-btn");
const list = document.querySelector(".lists");

function getAdded() {
    if (input.value === ''){
        alert("Enter atleast something to Add ");
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = input.value;
        list.appendChild(li);
        let span = document.createElement("span");
        let img = document.createElement("img");
        img.src = "./images/delete.webp";
        span.appendChild(img);
        li.appendChild(span);
        }
    input.value = '';
    saveAll();
    
}

list.addEventListener("click" , function(elem) {
    //console.log(elem.target.tagName);
    if(elem.target.tagName === "LI"){
        elem.target.classList.toggle("checked");
        saveAll();
    }
    else if (elem.target.tagName === "IMG"){
        //console.log(elem.target.parentElement.parentNode);
        elem.target.parentElement.parentNode.remove();
        saveAll();
    }
    
});


 const saveAll = () => {
    localStorage.setItem("data", list.innerHTML);
 } 

 ( function () {
    list.innerHTML = localStorage.getItem("data");
 })();

