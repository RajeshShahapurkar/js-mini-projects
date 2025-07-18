// let btn=document.querySelector(".add");
// let counter=document.querySelector("input");
// counter=0;
// btn.addEventListener("click", ()=>{
//     counter+=1;
// } )

// let btn2=document.querySelector(".sub");
// // let counter2=document.querySelector("input");
// // counter=0;
// btn.addEventListener("click", ()=>{
//     counter.innerText=counter-=1;
// } )

let count=0;

function increase(){
    count++;

    document.getElementById("counter").innerText=count;
}

function decrease(){
    count--;

    document.getElementById("counter").innerText=count;
}

function reset(){
    count=0;

    document.getElementById("counter").innerText=count;
}

