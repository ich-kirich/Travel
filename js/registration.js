const registrationLinks = document.querySelectorAll('.registration-link'); // все объекты при нажатии на которые открывается окно
const body = document.querySelector('body'); // в нем храниться body
const lockPadding = document.querySelectorAll(".lock-padding");
const prevBtn1 = document.querySelector('.prev')
const nextBtn1 = document.querySelector('.next')

let unlock = true;

const timeout = 500; // должно быть такое кол-во милисекунд сколько на transition

if(registrationLinks.length > 0) {
    for(let i = 0; i < registrationLinks.length; i++){
        const registrationLink   = registrationLinks[i];
        registrationLink.addEventListener("click", function (e) {
            const registrationName = registrationLink.getAttribute('href').replace('#', ''); // убирает в названии #имя #
            const currentRegistration = document.getElementById(registrationName); // здесь объект с id registration
            registrationOpen(currentRegistration);
            e.preventDefault(); // запрет на загрузку страницы
        }); // действия при клике
    }
} // проверка на наличие объектов с классом "registration-link"

function registrationOpen(currentRegistration){
    prevBtn1.classList.add('close');
    nextBtn1.classList.add('close');
    if(currentRegistration && unlock){
        const registrationActive = document.querySelector('.login-form.open');
        if(registrationActive){
            registrationClose(registrationActive);
        }
        currentRegistration.classList.add('open'); // добавляется класс "open"
        currentRegistration.addEventListener("click", function (e) {
            if(e.target.closest('.registration-shadow')){
                registrationClose(e.target.closest('.registration-form'))
                prevBtn1.classList.remove('close');
                nextBtn1.classList.remove('close');
            }
        });
    }
}

function registrationClose(registrationActive){
    if(unlock) {
        registrationActive.classList.remove('open');
    }
}