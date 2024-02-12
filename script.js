const inputtextEL = document.getElementById("inputtext")
const list_containerEl = document.getElementById("list-container")

function addText(){
    if(inputtextEL.value ===""){
        alert("You Must write Something")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML=inputtextEL.value;
        list_containerEl.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)
    }
    inputtextEL.value=""
    saveData()
}

list_containerEl.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked")
        saveData()
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData()
    } 
},false)

function saveData(){
    localStorage.setItem("data",list_containerEl.innerHTML);
}

function showData(){
    list_containerEl.innerHTML=localStorage.getItem("data")
}

showData()