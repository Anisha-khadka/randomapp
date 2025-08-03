const magic=(event,text)=>{
    const dict={
    lover:'to love',
    clothes:'something to wear',
    house:'where we live'
}

    event.preventDefault();
    for (x in dict){
        if(text==[x]){
            mydata=dict[x]
        }
    document.getElementById('outputArea').innerHTML=mydata;
}
}


const todos =(event)=>{
    event.preventDefault();
   inputText=document.getElementById("inputtext").value;
    // document.getElementById('todolist').innerHTML=inputText;
    if(inputText!=""){
        saveData(inputText)
        showData()
    }

}
let existingdata=JSON.parse(localStorage.getItem("TODO")) || [];
const saveData=(letstodos)=>{
    
    existingdata.push(letstodos)
    localStorage.setItem("TODO",JSON.stringify(existingdata))
}
const showData=()=>{
    const tasks=JSON.parse(localStorage.getItem("TODO")) || [];

   document.getElementById('todolist').innerHTML= tasks
   .map((task)=>{
    return `<li>
    ${task}
    <i class="fa-solid fa-trash"></i> 
    </li>`
   }).join("");
}

document.getElementById('todolist').addEventListener("click",(e)=>{
    if(e.target.tagName=='I'){
        e.target.parentElement.remove();
        const tt=e.target.parentElement.firstChild.textContent.trim()
        console.log(tt)
    existingdata=existingdata.filter(existingdata=>existingdata!==tt);
    console.log(existingdata)
     localStorage.setItem("TODO",JSON.stringify(existingdata))
    }
})