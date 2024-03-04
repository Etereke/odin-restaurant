import Location from './Untitled.png';

function CreateContactPage() {
    const phoneParagraph = document.createElement('p');
    const emailParagraph = document.createElement('p');
    const addressParagraph = document.createElement('p');
    const img = document.createElement('img');

    phoneParagraph.textContent = 'Phone: 99 9999 99999';
    emailParagraph.textContent = 'E-mail: lorem@ipsum.dolor';
    addressParagraph.textContent = 'Address: 9999 Lorem, Ipsum Dolor str., Sit Amet 99.';
    img.setAttribute('src', Location);
    img.setAttribute('alt', 'The exact location');
    img.setAttribute('id', 'location');
    
    return [phoneParagraph, emailParagraph, addressParagraph, img];
}

export default CreateContactPage;
