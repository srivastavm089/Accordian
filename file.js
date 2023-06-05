let title = document.getElementById("title");
let close = document.getElementById("close");
let top_line = document.getElementById("top-line");
let detail_parnt = document.getElementById("detail_parent");


title.addEventListener("click", () => {
  document.getElementById("detail_parent").style.display = "block";
  title.style.display = "none";

  let count = 55;
  let intial = 0;
  setInterval(()=>{
    if(count>intial){
        top_line.style.width = `${intial}vh`;
        intial++
    }
  })


});
close.addEventListener("click", () => {
  detail_parnt.style.display = "none";
  title.style.display = "flex";
});



