const btn=document.getElementById("btn");
const randomColor =() => {
    let val="0123456789ABCDEF"
    let cons="#";

    for(let i=0;i<6;i++){
cons=cons +val[Math.floor(Math.random()*16)];
    }
    return cons;
};
console.log(randomColor());



// Math.random will gives val   0 - 0.99
// we will multiply it with 16   0 - 0.99 * 16
//floor of 10.4=10

function changeRandomColor(){
    document.body.style.backgroundColor=randomColor();

}
btn.addEventListener("click",changeRandomColor);











