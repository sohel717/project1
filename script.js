 //js for profile

 var btn = document.getElementById('btn1').disabled = true;
          
 function uploadProfilePicture() {

   const fileInput = document.getElementById('profilePicture');
   
   const file = fileInput.files[0];
   if (file) {
     const reader = new FileReader();
     reader.onload = function(e) {
       const preview = document.getElementById('preview');
       preview.innerHTML = '<img src="' + e.target.result + '" class="img-fluid" alt="Profile Picture">';
     }
     reader.readAsDataURL(file);
     btn = document.getElementById('btn1').disabled = false;
   }
 };


 //js for card
 
 let card1 = document.getElementById('card1');
 let card2 = document.getElementById('card2');
 let card3 = document.getElementById('card3');
 var finish = document.getElementById('finish');
 
 finish.disabled = true;



card1.addEventListener('click', () => {
    card1.style.border = "2px solid black";
    finish.disabled = false;

});

card2.addEventListener('click', () => {
    card2.style.border = "2px solid black";
    finish.disabled = false;
});

card3.addEventListener('click', () => {
    card3.style.border = "2px solid black";
    finish.disabled = false;
});