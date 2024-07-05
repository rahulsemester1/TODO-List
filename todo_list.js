let input=document.querySelector("input");
let add_btn=document.querySelector(".add");
let ul=document.querySelector("ul");

add_btn.addEventListener("click",function(){

     let list=document.createElement("li");
     list.classList.add("list-group-item");
     list.innerText=input.value;

     let delBtn=document.createElement("button");
     delBtn.classList.add("btn","btn-danger");      
     
     delBtn.innerText="Delete";
     delBtn.classList.add("delete");

     list.appendChild(delBtn);
     ul.appendChild(list);
     input.value="";
});

let delbtns=document.querySelectorAll(".delete")[1];
ul.addEventListener("click",function(event){
       if(event.target.nodeName=="BUTTON"){
             let par=event.target.parentElement;
                  par.remove();
                  console.log(`${event.target.parentElement.innerText}`);
       }

});