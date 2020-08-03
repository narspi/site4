const btn = document.querySelector('.btn');
const form = document.querySelector('form');
const mainForm = document.querySelector('.main__form');




// btn.addEventListener('click', ()=> {
//     form.innerHTML = `<input type="text" placeholder="input somethink">`;
// });


document.addEventListener('click', event => {
    console.log(event.target);
    console.log(event.target.closest('.main__form'));
    if (!(event.target.closest('.main__form'))) 
    mainForm.classList.add('main__form--active');
});