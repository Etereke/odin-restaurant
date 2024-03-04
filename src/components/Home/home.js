import PizzaCola from './pizza-cola.jpg';

function CreateHomePage() {
    const introDiv = document.createElement('div');
    const titleHeading = document.createElement('h1');
    const introParagraph = document.createElement('p');
    titleHeading.textContent = 'Lorem Pizza';
    introParagraph.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cum ad at quam quia ex suscipit obcaecati sit, dicta earum. Rem laborum quae quas repellat doloribus obcaecati, error maxime eius repudiandae repellendus nostrum quos fugiat aliquam iure magni illo animi magnam? Dolores iure eius ad, itaque vel autem! Ipsum, numquam!';
    introDiv.classList.add('content-block');
    introDiv.appendChild(titleHeading);
    introDiv.appendChild(introParagraph);

    const hoursDiv = document.createElement('div');
    const hoursHeading = document.createElement('h2');
    const hoursList = document.createElement('ul');
    const openHours = ['Monday: 12-24', 'Tuesday: 13-23', 'Wednesday: 14-22', 'Thursday: 15-21', 'Friday: 16-20', 'Saturday: 17-19', 'Sunday: CLOSED'];
    hoursHeading.textContent = 'Hours';
    openHours.forEach((day) => {
        const li = document.createElement('li');
        li.textContent = day;
        hoursList.appendChild(li);
    });
    hoursDiv.classList.add('content-block');
    hoursDiv.appendChild(hoursHeading);
    hoursDiv.appendChild(hoursList);

    const locationDiv = document.createElement('div');
    const locationHeading = document.createElement('h2');
    const locationParagraph = document.createElement('p');
    locationHeading.textContent = 'Location';
    locationParagraph.textContent = '9999 Lorem, Ipsum Dolor str., Sit Amet 99.';
    locationDiv.classList.add('content-block');
    locationDiv.appendChild(locationHeading);
    locationDiv.appendChild(locationParagraph);

    const image = document.createElement('img');
    image.setAttribute('src', PizzaCola);
    image.setAttribute('alt', 'Pizza cola');
    image.setAttribute('id', 'pizzacola');
    
    return [introDiv, hoursDiv, locationDiv, image];
}

export default CreateHomePage;

{/* <div class="content-block">
            <h1>Lorem Pizza</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cum ad at quam quia ex suscipit obcaecati sit, dicta earum. Rem laborum quae quas repellat doloribus obcaecati, error maxime eius repudiandae repellendus nostrum quos fugiat aliquam iure magni illo animi magnam? Dolores iure eius ad, itaque vel autem! Ipsum, numquam!</p>
        </div>
        <div class="content-block">
            <h2>Hours</h2>
            <ul>
                <li>Monday: 12-24</li>
                <li>Tuesday: 13-23</li>
                <li>Wednesday: 14-22</li>
                <li>Thursday: 15-21</li>
                <li>Friday: 16-20</li>
                <li>Saturday: 17-19</li>
                <li>Sunday: CLOSED</li>
            </ul>
        </div>
        <div class="content-block">
            <h2>Location</h2>
            <p>9999 Lorem, Ipsum Dolor str., Sit Amet 99.</p>
        </div>
        <img src="./images/pizza-cola.jpg" alt="Pizza cola" id="pizzacola"></img> */}