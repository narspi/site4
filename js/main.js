const   mainForm = document.querySelector('.main__form'),
        closeBtn = document.querySelector('.close-btn'),
        mainVideoBtn = document.querySelector('.main__video-btn'),
        modal = document.querySelector('.modal'),
        header = document.querySelector('.header'),
        main = document.querySelector('.main');




// btn.addEventListener('click', ()=> {
//     form.innerHTML = `<input type="text" placeholder="input somethink">`;
// });

const  formAnima = function (event) {
    mainForm.classList.remove('main__form--accent');
    setTimeout(()=> {
        if (!(event.target.closest('.main__form'))) 
        mainForm.classList.add('main__form--accent');
    }, 100);
}


document.addEventListener('click', formAnima);

mainVideoBtn.addEventListener('click', ()=> {
    modal.classList.add('modal--active');
    header.classList.add('blur');
    main.classList.add('blur');
    document.removeEventListener('click', formAnima);
});

closeBtn.addEventListener('click', ()=> {
    modal.classList.remove('modal--active');
    header.classList.remove('blur');
    main.classList.remove('blur');
    setTimeout(function () {
        document.addEventListener('click', formAnima);
    },50);
});