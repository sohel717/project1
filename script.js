
 //js for card
 
 let card1 = document.getElementById('card1');
 let card2 = document.getElementById('card2');
 let card3 = document.getElementById('card3');
 let finish = document.getElementById('finish');
 
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
