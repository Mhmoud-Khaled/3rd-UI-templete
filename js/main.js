let megaLinks= document.querySelector(".mega-menu")
let otherLinks= document.getElementById('other')

addEventListener("click",function(e){
    if(e.target === otherLinks){
        if(megaLinks.style.opacity === '0' || megaLinks.style.opacity === ''){
            // console.log(megaLinks.style.opacity)
            megaLinks.style.cssText = "opacity:1; z-index:2; top: 100%";
    }else{
        megaLinks.style.cssText = "opacity:0; z-index:-1; top: 100%";
    }
    }else if(e.target != otherLinks){
        megaLinks.style.cssText = "opacity:0; z-index:-1; top: 150%";
    }
})
    
//     }else{
//         megaLinks.style.cssText = "opacity:0; z-index:-1; top: 100px";
//         if(e.target != otherLinks){
//             megaLinks.style.cssText = "opacity:0; z-index:-1; top: 100px";
//         }
        
//     }
// })

// addEventListener("click",function(e){
//     console.log(e.target)
// })