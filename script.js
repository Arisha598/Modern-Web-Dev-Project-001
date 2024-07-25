
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
})

// function mousemovefolllow(){
//     window.addEventListener("mousemove", function(dets){
//     document.querySelector(".mini-circle").style.transfrom = `translate(${dets.clientX}px,${dets.clientY}px)`
//     })
// }
// mousemovefolllow();

function mousemovefollow(){
    window.addEventListener("mousemove",function(dets){
    document.querySelector(".mini-circle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
    })
}
mousemovefollow();