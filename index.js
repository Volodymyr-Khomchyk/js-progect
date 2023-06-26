// console.log(this);

// alert();

console.dir(document);

function getAlert(event){
    const btn = event.target;
    // btn.style.backgraundColor = 'red';
    if (btn.style.backgroundColor === 'red'){
        btn.style.backgroundColor = 'unset';
    }else {
        btn.style.backgroundColor = 'red';
    }
}

function consolHello(event){
    console.log('Hello!!!');
}


  
const buttonElement = document.getElementById('btn');
const secondButton = document.getElementById('second-btn');

console.log(buttonElement);
console.dir(buttonElement);

buttonElement.addEventListener('click', getAlert);
secondButton.addEventListener('mouseover', consolHello);