
let arrdown = document.querySelector("#arrow");

const scrollPercentage =0.8;
arrdown.addEventListener("click",()=>{
    const scrollAmount = window.innerHeight * scrollPercentage;
    window.scrollBy({
        top: scrollAmount,
        behavior:'smooth'
    });
});

gsap.to(".navbar",{
    backgroundColor:"black",
    height:"50px",
    marginTop:"10px",
    duration:0.5,
    scrollTrigger:{
        trigger:".navbar",
        scroller:"body",
        // markers:true,
        start:"top -30px",
        end: "top -50px",
        scrub:2
    }
})
gsap.to(".mobilenav",{
    backgroundColor:"black",
    height:"70px",
    marginTop:"-10px",
    duration:0.5,
    scrollTrigger:{
        trigger:".navbar",
        scroller:"body",
        // markers:true,
        start:"top -30px",
        end: "top -50px",
        scrub:2
    }
})
gsap.to("#bgimage-opacity",{
    backgroundColor:"black",
    duration:"0.5",
    scrollTrigger:{
        trigger:"#bgimage-opacity",
        scroller:"body",
        // markers:true,
        start :"top -30%",
        end:"top -25%",
        scrub:2
    }
})
gsap.from("#collections h2",{
    scale:0.8,
    duration:"0.5",
    scrollTrigger:{
        trigger:"#collections h2",
        scroller:"body",
        // markers:true,
        start:"top 45%",
        end:"top 50%",
        scrub:2
    }
})
gsap.from("#Exclusive h2",{
    scale:0.8,
    duration:"0.5",
    scrollTrigger:{
        trigger:"#Exclusive h2",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 60%",
        scrub:2
    }
})
gsap.from("#Gender h2",{
    scale:0.8,
    duration:"0.5",
    scrollTrigger:{
        trigger:"#Gender h2",
        scroller:"body",
        // markers:true,
        start:"top 65%",
        end:"top 70%",
        scrub:2
    }
})
// gsap.from("#Connections h2",{
//     scale:0.8,
//     duration:"0.5",
//     scrollTrigger:{
//         trigger:"#Connections h2",
//         scroller:"body",
//         // markers:true,
//         start:"top 75%",
//         end:"top 80%",
//         scrub:2
//     }
// })
gsap.from("#collection-in .card",{
    y:40,
    duration:"0.5",
    stagger:0.5,
    scrollTrigger:{
        trigger:"#collection-in .card",
        scroller:"body",
        // markers:true,
        start:"top 67%",
        end:"top 72%",
        scrub:2
    }
})
gsap.from("#Exclusive-in .card",{
    y:40,
    duration:"0.5",
    stagger:0.5,
    
    scrollTrigger:{
        trigger:"#Exclusive-in .card",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 80%",
        scrub:2
    }
})
gsap.from("#Gender-in .card",{
    scale:0.8,
    duration:0.2,
    scrollTrigger:{
        trigger:"#Gender-in .card",
        scroller:"body",
        start:"top 85%",
        end:"top 87%",
        scrub:1
    }
})
// gsap.from("#Connections-in .card",{
//     y:40,
//     duration:"0.5",
//     stagger:0.5,
    
//     scrollTrigger:{
//         trigger:"#Connections-in .card",
//         scroller:"body",
//         // markers:true,
//         start:"top 94%",
//         end:"top 98%",
//         scrub:2
//     }
// })
