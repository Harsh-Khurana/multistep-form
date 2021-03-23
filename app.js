let formElements = document.querySelectorAll('.form-elements'),
    inputs = document.querySelectorAll('.form-elements input');

for(let input of inputs){
    input.addEventListener('focus', ()=>{
        input.previousElementSibling.classList.add('moveUpOnFocus');
    })
    input.addEventListener('blur', ()=>{
        if(!input.value){
            input.previousElementSibling.classList.remove('moveUpOnFocus');
        }
    })
}