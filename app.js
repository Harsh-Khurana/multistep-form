let formElements = document.querySelectorAll('.form-elements'),
    inputs = document.querySelectorAll('.form-elements input'),
    form = document.querySelector('form'),
    tickUpper = document.querySelector('#tick-upper'),
    tickLower = document.querySelector("#tick-lower"),
    submitAnime = document.querySelector("#submitAnime"),
    btnFormTrackers = document.querySelectorAll('.btn-form-tracker'),
    submitButton = document.querySelector('input[type=submit]'),
    btnsContinue = document.querySelectorAll('.btn-continue');

// input event for input animations
// for all inputs we want to handle the focus and un-focus(blur) when user types
for(let input of inputs){
    input.addEventListener('focus', ()=>{
        // this below targets the labels of inputs
        input.previousElementSibling.classList.add('moveUpOnFocus');
    })
    input.addEventListener('blur', ()=>{
        if(!input.value){
            input.previousElementSibling.classList.remove('moveUpOnFocus');
        }
    })
}

// handles clicks on continue btns
// all the btns scaledown and the only btn after current btn scales up
for(let btnContinue of btnsContinue){
    btnContinue.addEventListener('click', ()=>{
        for(let btnFormTracker of btnFormTrackers){
            btnFormTracker.nextElementSibling.classList.remove('scaleUp');
            btnFormTracker.classList.remove('translateDown')
        }
        // this targets the next form-element from the current one
        let temp = btnContinue.parentElement.parentElement.nextElementSibling;
        temp.children[1].classList.add('scaleUp');
        temp.children[0].classList.add('translateDown')
    })
}


// handles clicks on btn-form-trackers
btnFormTrackers[0].nextElementSibling.classList.add('scaleUp');
for(let btnFormTracker of btnFormTrackers){
    btnFormTracker.addEventListener('click', ()=>{
        for(let temp of btnFormTrackers){
            temp.classList.remove('translateDown');
            temp.nextElementSibling.classList.remove('scaleUp');
        }
        btnFormTracker.classList.add('translateDown')
        btnFormTracker.nextElementSibling.classList.add('scaleUp');
    })
}

// form submission with animation
// default behaviour is blocked, background color changed and svg elements resized to create animation
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    submitAnime.classList.add('submitAnimeColor')
    tickUpper.style.transform = 'translate(27px, 69px) rotate(-133deg) scaleY(1)'
    tickLower.style.transform = 'translate(2px, 40px) rotate(-40deg) scaleY(1)'
    // little delay so that animation is visible before final submission
    setTimeout(()=>{
        form.submit();
    }, 1500)
})