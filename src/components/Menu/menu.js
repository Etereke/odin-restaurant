import Pizza1 from './pizza1.jpg';
import Pizza2 from './pizza2.jpg';
import Pizza3 from './pizza3.jpg';
import Pizza4 from './pizza4.jpg';
import Pizza5 from './pizza5.jpg';
import Pizza6 from './pizza6.jpg';
import Pizza7 from './pizza7.jpg';
import Pizza8 from './pizza8.jpg';

const lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eligendi repudiandae voluptatibus dolores rerum voluptas cupiditate, alias aperiam nobis? Repudiandae natus, iure expedita, praesentium quam dolores optio nisi minus voluptatum dolorum reiciendis ipsum error fugit. Sapiente non reiciendis quae tenetur nisi delectus quo quas saepe ipsum quaerat molestiae eum illo iusto rerum libero sed, hic quia recusandae sint repellendus totam, dolorem, similique aspernatur! Laborum laudantium ullam nemo. Eaque necessitatibus cum vel harum, modi ipsa minus cupiditate, amet fugit enim architecto vero. Fugit, saepe. Distinctio necessitatibus, aliquid quas unde voluptatibus consectetur sapiente earum ducimus explicabo recusandae nisi quisquam fuga, excepturi tempore reiciendis libero? Quidem nostrum aliquid nulla, accusamus laborum quo voluptate illo vero, ipsam, earum quasi. Tempora alias modi, asperiores nobis unde accusamus voluptatum ad consequatur soluta animi, maiores neque nulla et facere quam vero voluptate odit eveniet ab. Exercitationem, in repellat deserunt voluptas consequatur sunt commodi magni praesentium voluptatum quisquam vitae itaque beatae eveniet impedit dolore, alias quos iste provident quae maiores. Pariatur sunt quo quisquam amet sed, quidem maiores nesciunt aliquam ad quae magnam? Cumque odio fugiat praesentium facere ea deleniti consequatur inventore qui, consectetur sequi dolore necessitatibus dicta similique debitis nisi rem blanditiis adipisci voluptate ullam? Voluptate, maiores.'.replaceAll('.', '').replaceAll(',', '').replaceAll('?', '').replaceAll('!', '').toLowerCase().split(' ');

function getRandomLorem(num) {
    const loremArray = [];
    for (let i = 0; i < num; i++) {
        loremArray.push(lorem[Math.floor(Math.random() * lorem.length)]);
    }
    return loremArray;
}

function CreateMenuPage() {
    const imageSrcList = [
        Pizza1,
        Pizza2,
        Pizza3,
        Pizza4,
        Pizza5,
        Pizza6,
        Pizza7,
        Pizza8
    ];
    const elementsArray = [];
    imageSrcList.forEach((src) => {
        const menuItemDiv = document.createElement('div');
        const pizzaNameHeading = document.createElement('h3');
        const pizzaToppingsParagraph = document.createElement('p');
        const priceParagraph = document.createElement('p');
        const image = document.createElement('img');

        let pizzaNameHeadingStr = getRandomLorem(Math.ceil(Math.random()*2)).reduce((acc, cur) => {
            return acc + " " + cur;
        });
        pizzaNameHeadingStr = pizzaNameHeadingStr.charAt(0).toUpperCase() + pizzaNameHeadingStr.slice(1);
        pizzaNameHeading.textContent = pizzaNameHeadingStr;
        pizzaToppingsParagraph.textContent = getRandomLorem(Math.ceil(Math.random()*5) + 2).reduce((acc, cur) => {
            return acc + ", " + cur;
        });
        priceParagraph.textContent = `$${(Math.floor(Math.random()*2000) / 100 + 20).toFixed(2)}`;
        image.setAttribute('src', src);
        image.setAttribute('alt', 'pizza');

        menuItemDiv.classList.add('menu-item');
        menuItemDiv.appendChild(pizzaNameHeading);
        menuItemDiv.appendChild(pizzaToppingsParagraph);
        menuItemDiv.appendChild(priceParagraph);
        menuItemDiv.appendChild(image);
        elementsArray.push(menuItemDiv);
    });
    return elementsArray;
}

export default CreateMenuPage;
