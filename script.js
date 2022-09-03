// const allH2s = document.querySelectorAll('h2');
// for(let elements of allH2s){
//   elements.style.color = 'lightblue';
// }

// const backPacks = document.getElementById('bags').style.backgroundColor = 'tomato';

const allCards = document.getElementsByClassName('card');
for(let element of allCards){
  element.addEventListener('click', function(){
   element.style.borderRadius = '30px';
  })
 
}

function consoleBtn(){
  console.log('You have clicked the button');
}

const cardsBtn = document.getElementsByClassName('remove-btn');
for(let btn of cardsBtn){
  btn.addEventListener('click', function(event){
    const removeTarget = event.target.style.display = 'none';
  })
}


document.getElementById('inputEmail4').addEventListener('keyup', function(){
  const submitBtn = document.getElementById('submit-btn');
  const inputValue = document.getElementById('inputEmail4').value ;
  if(inputValue === 'email'){
    submitBtn.removeAttribute('disabled');
  }
  else{
    submitBtn.setAttribute('disabled', true);
  }
})

document.getElementById('stay').addEventListener('dblclick', function(){
  document.getElementById('stay').style.backgroundColor = 'lightpink';
})

document.getElementById('red-airmax').addEventListener('mouseenter', function(){
  const img = document.getElementById('red-airmax');
  img.removeAttribute('src');
  img.setAttribute('src', 'images/shoes/shoe-2.png');
})
document.getElementById('red-airmax').addEventListener('mouseout', function(){
  const img = document.getElementById('red-airmax');
  img.removeAttribute('src');
  img.setAttribute('src', 'images/shoes/shoe-3.png');
})