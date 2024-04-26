const guy = document.querySelector('.boy');
const lady = document.querySelector('.girl');
const username = document.querySelector('.user');
const email = document.querySelector('.mail');
const inputType = document.querySelector('.selected');
const signUpEL = document.querySelector('.signUp');
const signInEL = document.querySelector('.signIn');
const modalEl1 = document.querySelector('.modal-signUp');
const modalEl2 = document.querySelector('.modal-login');
const exitModalEl = document.querySelectorAll('.exitModal');
const overlay =  document.querySelector('.overlay');
const create = document.querySelector('.submit-signUP');
const overlays = document.querySelectorAll('.overlay');

document.querySelector('.selected').addEventListener('change', function(e){
    e.preventDefault();
    guy.classList.toggle('hidden')    
    lady.classList.toggle('hidden')    
});


// datas

const loruloruDB = [];
let info;

signUpEL.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector('.modal-signUp').style.zIndex = 999;
    modalEl1.classList.remove('hidden');
    overlay.classList.remove('hidden');

});

create.addEventListener('click', function(e){
    e.preventDefault();

    let anything, activity;
    if (inputType.value === 'male'){
        anything = 'male';
        activity = document.querySelector('.guy').textContent
    };

    if (inputType.value === 'female'){
        anything = 'female';
        activity = document.querySelector('.lady').textContent
    };

    console.log(username.value, email.value)

    info = {
        id: 'a',
        username: username.value,
        email: email.value,
        gender: anything,
        activity
    };


    loruloruDB.push(info)

    console.log(info, loruloruDB)

    localStorage.setItem('loruBlog', JSON.stringify(loruloruDB));

    modalEl1.classList.add('hidden');
    overlay.classList.add('hidden');

    username.value = email.value = anything = '';

})

signInEL.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector('.modal-login').style.zIndex = 999;
    modalEl2.classList.remove('hidden');
    overlay.classList.remove('hidden');
});


exitModalEl.forEach(exit=> {
    exit.addEventListener('click', function(e){
        modalEl1.classList.add('hidden');
        modalEl2.classList.add('hidden');
        overlay.classList.add('hidden');
    })
})


overlays.forEach(overlay=> {
    overlay.addEventListener('click', function(e){
        modalEl1.classList.add('hidden');
        modalEl2.classList.add('hidden');
        overlay.classList.add('hidden')
    })
})

 window.addEventListener('keydown', function(e){
    e.preventDefault();
    console.log(e.key);
    if(e.key === 'Escape'){
        modalEl1.classList.add('hidden');
        modalEl2.classList.add('hidden');
        overlay.classList.add('hidden');
    }
 })




 const getPosition = function(){
    return new Promise(function(resolve, reject){
         navigator.geolocation.getCurrentPosition(resolve, reject)
        
     })
 }
 
 getPosition().then(pos => {
    const {latitude, longitude} =pos.coords
    console.log(latitude, longitude);
    fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=api`)
    .then(res => res.json()).then(data => {
         console.log(`you are in ${data.city}, ${data.country}`);
        //  renderCountry(data.country)
     })
 })



