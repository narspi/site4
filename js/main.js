const   mainForm = document.querySelector('.main__form'),
        closeBtn = document.querySelector('.close-btn'),
        mainVideoBtn = document.querySelector('.main__video-btn'),
        modal = document.querySelector('.modal'),
        header = document.querySelector('.header'),
        main = document.querySelector('.main');




// btn.addEventListener('click', ()=> {
//     form.innerHTML = `<input type="text" placeholder="input somethink">`;
// });


document.addEventListener('click', event => {
    console.log(event.target);
    console.log(event.target.closest('.main__form'));
    if (!(event.target.closest('.main__form'))) 
    mainForm.classList.add('main__form--active');
});

mainVideoBtn.addEventListener('click', ()=> {
    modal.classList.add('modal--active');
    header.classList.add('blur');
    main.classList.add('blur');
});

closeBtn.addEventListener('click', ()=> {
    modal.classList.remove('modal--active');
    header.classList.remove('blur');
    main.classList.remove('blur');
});