document.querySelector(".nav .ham-btn").addEventListener("click",function(){
  document.querySelector(".nav").classList.toggle("active");

});
let el = document.getElementById('rank');
el.onclick=show;
    function show(){
                        document.getElementById("choose").style.visibility="visible";
                        document.getElementById("choose").style.transition="0.3s ease";
                        document.getElementById("rank").style.visibility="hidden";
                    }