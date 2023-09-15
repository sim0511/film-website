console.log("hii")
  
 document.getElementById("link1-li").style.backgroundColor="black";
 document.getElementById("link1").style.color="white";

 document.getElementById("link2-li").style.backgroundColor="";
 document.getElementById("link2").style.color="black";

 document.getElementById("link3-li").style.backgroundColor="";
 document.getElementById("link3").style.color="black";


  const section1 = document.querySelector('.movie-description-section');
  const section2 = document.querySelector('.showtime-section2');
  const section3 = document.querySelector('.cast-info-section3');


    document.getElementById("link1").addEventListener("click", ()=>{
    
        document.getElementById("link1").style.color="white";
        document.getElementById("link1-li").style.backgroundColor="black";

        document.getElementById("link2").style.color = "black";
        document.getElementById("link2-li").style.background = "";

        document.getElementById("link3").style.color = "black";
        document.getElementById("link3-li").style.background = "";


        section1.style.display = "block";
        section2.style.display = 'none';
        section3.style.display = 'none';
    })
    document.getElementById("link2").addEventListener("click", ()=>{
      
        document.getElementById("link2-li").style.backgroundColor="black";
        document.getElementById("link2").style.color="white";
       
        document.getElementById("link1-li").style.backgroundColor="";
        document.getElementById("link1").style.color="black";
       
        document.getElementById("link3-li").style.backgroundColor="";
        document.getElementById("link3").style.color="black";

        section1.style.display = "none";
        section2.style.display = 'block';
        section3.style.display = 'none';
    })
    document.getElementById("link3").addEventListener("click", ()=>{

        document.getElementById("link3-li").style.backgroundColor="black";
        document.getElementById("link3").style.color="white";
       
        document.getElementById("link2-li").style.backgroundColor="";
        document.getElementById("link2").style.color="black";
       
        document.getElementById("link1-li").style.backgroundColor="";
        document.getElementById("link1").style.color="black";

        section1.style.display = "none";
        section2.style.display = 'none';
        section3.style.display = 'block';
    })
