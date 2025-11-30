let numbars = document.querySelectorAll('.nums span')
let counter = document.querySelector('.counter')
let finalMessage = document.querySelector('.final')
let replay = document.querySelector('#replay')


runAnimation();
function runAnimation (){
  numbars.forEach((element, index) => {

    element.addEventListener('animationend', (e)=>{

        if (e.animationName === 'goIn') {
          console.log(e.animationName);
          element.classList.remove('in');
          element.classList.add('out');

        } else if (e.animationName === 'goOut' && element.nextElementSibling) {
          console.log(e.animationName);
          console.log(element.nextElementSibling);     
          element.nextElementSibling.classList.add('in');    

        } else {
          counter.classList.add('hide')
          finalMessage.classList.add('show')
        } 
    })    
  });
}

replay.addEventListener('click', () => {
  resetDOM();
  runAnimation();
})


function resetDOM() {
  counter.classList.remove('hide');
  finalMessage.classList.remove('show');
  numbars.forEach((element) => {
    element.classList.value = ''; 
  })
  numbars[0].classList.add('in');
}