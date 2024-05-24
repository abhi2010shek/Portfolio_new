// Get a reference to the button element
var touchButton = document.getElementById("touch");

// Add a click event listener to the button
touchButton.addEventListener("click", function() {
    // Redirect to the contact page
    window.location.href = "contact.html";
});

var typed = new Typed('#element', {
    strings: ['Software Developer', 'Coder', 'Final Year Student', 'Web Developer.'],
    typeSpeed: 70,
  });

const prevEle=document.querySelector(".prev")
const nextEle=document.querySelector(".next")
const imgContainerEle=document.querySelector(".img-container")
const imgEle=document.querySelectorAll(".pr-img")
let currImg =1;
let timeout;
nextEle.addEventListener("click", ()=>{
  currImg++
  clearTimeout(timeout)
  updateImg()
})
prevEle.addEventListener("click", ()=>{
   currImg--
   clearTimeout(timeout)
   updateImg()
})
updateImg()
function updateImg(){
  if(currImg>imgEle.length){
    currImg=1
  }else if(currImg<1){
    currImg=imgEle.length
  }
  imgContainerEle.style.transform=`translateX(${-(currImg-1) * 100}%)`

  timeout = setTimeout(()=>{
    currImg++;
    updateImg()
  }, 2000)
}