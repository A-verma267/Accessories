let crsr= document.querySelector("#cursor");
let blur1= document.querySelector("#cursor-blur");
let lies = document.querySelectorAll(".rounded-cursor");

document.addEventListener("mousemove",(dets)=>{
    console.log(dets);
    crsr.style.left = dets.x + 13 + "px";
    crsr.style.top = dets.y +5+"px";
    blur1.style.left=dets.x-125+"px";
    blur1.style.top=dets.y-125+"px";
    
})
lies.forEach((e) => {
    e.addEventListener("mouseenter",()=>{
        crsr.style.scale=2;
        crsr.style.border="1px solid #fff";
        crsr.style.backgroundColor="transparent";
        
    })
    e.addEventListener("mouseleave",()=>{
        crsr.style.scale=1;
        crsr.style.border="0px solid grey";
        crsr.style.backgroundColor="#f0bd31";
        
    })
});
let close = document.getElementById('cilose');
close.addEventListener("click",()=>{
    let navbar= document.querySelector("#left-icon-content");
    if(navbar.style.display!="none"){
        navbar.style.display="none";
    }
})
let menu = document.getElementById('minu');
menu.addEventListener("click",()=>{
    let navbar= document.querySelector("#left-icon-content");
    let search = document.getElementById('shortsearch');
    search.style.display = 'none';
    if(navbar.style.display!="block"){
        navbar.style.display = "block";
    }
})
function searchhide() {
    
}
document.getElementById("search").addEventListener("focus",()=>{
    let search = document.getElementById('shortsearch');
    let content = document.getElementById('left-icon-content');
    search.style.display = 'flex';
})
document.getElementById("search").addEventListener("blur",()=>{
    let search = document.getElementById('shortsearch');
    let content = document.getElementById('left-icon-content');
    search.style.display = 'none';
})
