// const cards = [ {
//     title: 'Ніжна свіжість:',
//     type: 'троянди та лілії',
//     cost: '445 грн',
//     image: './images/bouquet_cart1.png',
// }, {
//     title: 'Сорбет: ',
//     type: 'хризантеми та троянди',
//     cost: '450 грн',
//     image: './images/bouquet_cart2.png',
// }, {
//     title: 'Yellow Song: ',
//     type: 'соняшники та солідаго',
//     cost: '455 грн',
//     image: './images/bouquet_cart3.png',
// }, {
//     title: 'Персиковий нектар: ',
//     type: 'лілії та троянди',
//     cost: '455 грн',
//     image: './images/bouquet_cart4.png',
// }, {
//     title: 'Аврора: ',
//     type: 'лілії та троянди',
//     cost: '460 грн',
//     image: './images/bouquet_cart5.png',
// }, {
//     title: 'Класика кохання: ',
//     type: 'червоних троянд',
//     cost: '465 грн',
//     image: './images/bouquet_cart6.png',
// }] 

/* <figure class="section4-card">
               <img src="./images/bouquet_cart1.png" alt="букет">
               <figcaption>Ніжна свіжість:
                  <br>
                  троянди та лілії
                  <br>
                  <br>
                  445 грн
               </figcaption>
               <br>
               <button>В кошик</button>
    </figure> */

// OOP

// class Card {
//     constructor(card) {
//         this.title = card.title;
//         this.type = card.type;
//         this.cost = card.cost;
//         this.image = card.image;
//     }

//     createContent() {
//         const figure = document.createElement('figure');
//         figure.classList.add('section4-card');

//         const img = document.createElement('img');
//         img.src = this.image;
        
//         const br = document.createElement('br');
        
//         const figcaption = document.createElement('figcaption');
//         figcaption.innerHTML = `${this.title} <br> ${this.type} <br> <br> ${this.cost}`;
        
        
//         const button = document.createElement('button');
//         const btnClass = 'section4-card button';
//         button.innerHTML = "В кошик";
//         button.classList.add('btnClass');

//         figure.append(img);
//         figure.append(figcaption);
//         figure.append(br);
//         figure.append(button);

//         return figure;
//     }
// }

// class App {
//     static renderAll(cards) {
//         const section4 = document.querySelector('#section4-info');
//         const fragment = document.createDocumentFragment();

//         cards.forEach((card) => {
//             fragment.append(new Card(card).createContent())
//         });

//         section4.append(fragment);
//     }
// }

// App.renderAll(cards);


// // 2 method

function createTemplateContent(card) {
    const figure = `<figure class="section4-card">
        <img src = ${card.image}>
        <figcaption>${card.title}:
        <br>
        ${card.type}
        <br>
        <br>
        ${card.cost}
        </figcaption>
        <br>
        <button>В кошик</button>
    </figure>`

    return createFragmentTemplate(figure);  
}

function createFragmentTemplate(str) {
    const template = document.createElement('template');
    template.innerHTML = str;

    return template.content;
}

function appendContent(id, content) {
    const el = document.getElementById(id);

    el.append(content);
}

function init () {
    fetch('https://run.mocky.io/v3/8483d4de-35d7-489d-8946-b8590a30c15d')
        .then((res) => res.json())
        .then((data) => {
            const fragment = document.createDocumentFragment();
        
            data.forEach((card) => {
               fragment.append(createTemplateContent(card));
            });
        
            appendContent('section4-info', fragment);

        } )

}

init();




