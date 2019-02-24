var know = {
   "hello" : "What are you interested in?  <span id = \"Projects\">Projects</span> or <span id = \"personal\">personal info</span>?",
   "hi" : "What are you interested in? <span id = \"Projects\">Projects</span> or <span id = \"personal\">personal info</span>?",
   "Hello" : "What are you interested in? <span id = \"Projects\">Projects</span> or <span id = \"personal\">personal info</span>?",
   "Hi" : "What are you interested in? <span id = \"Projects\">Projects</span> or <span id = \"personal\">personal info</span>?",

   "Projects" : "<span id = \"printed\">Printed works</span>? <span id = \"Posters\">Posters</span>? <span id = \"Zines\">Zines</span>? <span id = \"Drawings\">Drawings</span>?",

   "Printed works" : "<span onmouseover=\"show('myImage1')\" onmouseout=\"hide('myImage1')\"><u>It is all about her</u></span> <span onmouseover=\"show('myImage2')\" onmouseout=\"hide('myImage2')\"><u>Monospase</u></span>  <span onmouseover=\"show('myImage3')\" onmouseout=\"hide('myImage3')\"><u>Gazeta</u></span>?",

   "Posters" : "<span onmouseover=\"show('myImage4')\" onmouseout=\"hide('myImage4')\"><u>Daisies</u></span> / <span onmouseover=\"show('myImage5')\" onmouseout=\"hide('myImage5')\"><u>DIY</u></span>?",

   "Zines" : "<span onmouseover=\"show('myImage6')\" onmouseout=\"hide('myImage6')\"><u>Fear of Microbes</u></span> / <span onmouseover=\"show('myImage7')\" onmouseout=\"hide('myImage7')\"><u>Rewind</u></span> / <span onmouseover=\"show('myImage8')\" onmouseout=\"hide('myImage8')\"><u>OASE</u></span>?",


   "Drawings" : "<span onmouseover=\"show('myImage9')\" onmouseout=\"hide('myImage9')\"><u>Moscow Sketches</u></span>?",

   "personal info" : "<span id = \"Phone\">Phone</span>? <span id = \"Instagram\">Instagram</span>? <span id = \"E-mail\">E-mail</span>? <span id = \"Facebook\">Facebook</span>?",

   "Phone" : "+7 (925) 001 22 66",
   "Instagram" : "https://www.instagram.com/santasophia/",
   "E-mail" : "kravtsovass98@gmail.com",
   "Facebook" : "https://www.facebook.com/profile.php?id=100006708873290",


 };

 function talk() {
   var user = document.getElementById("userBox").value;
   document.getElementById("userBox").value = "";
   document.getElementById("chatLog").innerHTML += user+"<br>";
   if (user in know) {
     document.getElementById ("chatLog").innerHTML += know [user]+"<br>";

   } else {
     document.getElementById("chatLog").innerHTML += "I don't understand...<br>";
   }
   document.getElementById("Projects").onclick = function(){
   document.getElementById("userBox").value = "Projects";
   }
   document.getElementById("personal").onclick = function(){
   document.getElementById("userBox").value = "personal info";
 }
 document.getElementById("printed").onclick = function(){
 document.getElementById("userBox").value = "Printed works";
 }
 document.getElementById("Posters").onclick = function(){
 document.getElementById("userBox").value = "Posters";
 }
 document.getElementById("Zines").onclick = function(){
 document.getElementById("userBox").value = "Zines";
 }
 document.getElementById("Drawings").onclick = function(){
 document.getElementById("userBox").value = "Drawings";
 }
 document.getElementById("Phone").onclick = function(){
 document.getElementById("userBox").value = "Phone";
 }
 document.getElementById("Instagram").onclick = function(){
 document.getElementById("userBox").value = "Instagram";
 }
 document.getElementById("E-mail").onclick = function(){
 document.getElementById("userBox").value = "E-mail";
 }
 document.getElementById("Facebook").onclick = function(){
 document.getElementById("userBox").value = "Facebook";
 }
}






    var pulsers = Array.from(document.querySelectorAll('.pulser'));

    pulsers.forEach(function(p, i) {
      p.animate([
        {transform: 'scale('+Math.random()+') translate3d(0,0,0) rotate(0deg)'},
        {transform: 'scale('+Math.random()+') translate3d(0,0,0) rotate(360deg)'}
      ], {
        duration: Math.random() * 5000 + 5000,
        iterations: Infinity,
        direction: 'alternate',
        easing: 'cubic-bezier(.53,-0.38,.52,1.41)'
      });

      p.style.animationDelay = (-10000 * i / pulsers.length) + 'ms';
    });





    //switched to css keyframes
    function filters(p) {
      p.animate([
        {filter: 'hue-rotate(0deg) blur(3vmin)'},// blur(0px)'},
        {filter: 'hue-rotate(360deg) blur(20vmin)'}// blur('+(Math.random()*5)+'px)'}
      ], {
        //iterationComposite: 'accumulate',
        duration: 10000,
        delay: -10000 * i / pulsers.length,
        iterations: Infinity,
        direction: 'alternate'
      });
    }
