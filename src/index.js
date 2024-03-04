import './style.css';
import CreateHomePage from './components/Home/home';
import CreateMenuPage from './components/Menu/menu';
import CreateContactPage from './components/Contact/contact';

const components = [CreateHomePage, CreateMenuPage, CreateContactPage];
const content = document.querySelector('#content');
const buttons = document.querySelectorAll('header button');
buttons.forEach((button, idx) => {
    button.addEventListener('click', (e) => {
        if (!button.classList.contains('active')){
            buttons.forEach((button) => {
                button.classList.remove('active');
            });
            button.classList.add('active');
            content.replaceChildren();
            components[idx]().forEach((element) => {
                content.appendChild(element);
            });
        }
    });
});
CreateHomePage().forEach((element) => {
    content.appendChild(element);
});
// CreateMenuPage().forEach((element) => {
//     content.appendChild(element);
// });


