const loginLinks = document.querySelectorAll('.login-switcher'); // все объекты при нажатии на которые открывается окно

let unlock_login = true;

const timeout_login = 500; // должно быть такое кол-во милисекунд сколько на transition

if(loginLinks.length > 0) {
    for(let i = 0; i < loginLinks.length; i++){
        const LoginLink   = loginLinks[i];
        LoginLink.addEventListener("click", function (e) {
            const LoginName = LoginLink.getAttribute('href').replace('#', ''); // убирает в названии #имя #
            const currentLogin = document.getElementById(LoginName); // здесь объект с id login-form
            loginOpen(currentLogin);
            e.preventDefault(); // запрет на загрузку страницы
        }); // действия при клике
    }
} // проверка на наличие объектов с классом "login-switcher"

function loginOpen(currentLogin){
    if(currentLogin && unlock_login){
        const loginActive = document.querySelector('.registration-form.open');
        if(loginActive){
            loginClose(loginActive);
        }
        currentLogin.classList.add('open'); // добавляется класс "open"
        currentLogin.addEventListener("click", function (e) {
            if(e.target.closest('.login-shadow')){
                loginClose(e.target.closest('.login-form'))
                prevBtn1.classList.remove('close');
                nextBtn1.classList.remove('close');
            }
        });
    }
}

function loginClose(loginActive){
    if(unlock_login) {
        loginActive.classList.remove('open');
    }
}