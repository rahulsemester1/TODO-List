let input=document.querySelector("input");
let add_btn=document.querySelector(".add");
let ul=document.querySelector("ul");
let h1=document.querySelector("h1");

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
     console.dir(event.target.nodeName);
     //   if(event.target.nodeName=="BUTTON"){
     //         let par=event.target.parentElement;
     //              par.remove();
     //              console.log(`${event.target.parentElement.innerText}`);
       }

);


// function changeColor(col,delay,nextCol){
     
//      setTimeout(()=>{
//           h1.style.color=col;
//           console.log(col);
//           if (typeof nextCol==="function") nextCol();         
//      },delay);
     
// }


// changeColor("red",1000,function(){
//         changeColor("yellow",1000,function(){
//           changeColor("pink",1000,function(){
//                changeColor("violet",2000,function(){
//                     changeColor("pink",1000,function(){
//                          changeColor("green",2000,function(){
//                               changeColor("brown",1000,function(){
//                                    changeColor("grey",1000)
//                      }); 
//                   });           
//                 });
//              });
//           });
//         });
//      });


// changeColor("red",1000,()=>{
//      changeColor("yellow",1000,()=>{
//        changeColor("pink",1000,()=>{
//             changeColor("violet",2000,()=>{
//                  changeColor("pink",1000,()=>{
//                       changeColor("green",2000,()=>{
//                            changeColor("brown",1000,()=>{
//                                 changeColor("grey",1000)
//                   }); 
//                });           
//              });
//           });
//        });
//      });
//   });
//   let calCode=()=>2*2;
//   console.log(calCode());

//   let calCode1=()=>2*3;
//   console.log(calCode1());
//     let calCode2=()=>2*4;
//   console.log(calCode2());

let jsonData= { 
     "window": {
        "title": "Sample Konfabulator Widget",
        "name": "main_window",
        "width": 500,
        "height": 500
    },
    "image": { 
        "src": "Images/Sun.png",
        "name": "sun1",
        "hOffset": 250,
        "vOffset": 250,
        "alignment": "center"
    },
    "text": {
        "data": "Click Here",
        "size": 36,
        "style": "bold",
        "name": "text1",
        "hOffset": 250,
        "vOffset": 100,
        "alignment": "center",
        "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
    }  
};

function jsonCal(jsonData){
for(key in jsonData){
     let value=jsonData[key];

     console.log("Key:",key);
     console.log("Value:",value);
    

    if(typeof jsonData[key]==="object"){
          jsonCal(value);
    }
 }
}

jsonCal(jsonData);
  
// changeColor("yellow",2000);
// changeColor("pink",3000);


// const app=require("express");
// const mysql=require("mysql2");
// // import mysql from mysql2;
// function createConn(query){
// const connect=mysql.createConnection({
//      host:"localhost",
//      user:"root",
//      database:"trainee",
//      password:"rahul123"
     
// });
// query(connect);
// }
// function query(connect){
//      createConn();
//      let q=`insert into student1(id,username,email,password)
//      values
//       (421,"parth","parth@getMaxListeners.com","parth123")`;
//      connect.query(q,(err,result)=>{
//      if(err) throw err;
//      console.log(result);
// });
// connect.end();
// }
 
// let cal=()=>2*2;


// createConn(query);
// console.log(calculation());
