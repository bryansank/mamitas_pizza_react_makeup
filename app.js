
const LOG = console.log;

window.addEventListener('DOMContentLoaded', (event) => {
    LOG('LOAD.');

    // Esto me lo fusile para transformar Text a HTML
});


//debugger
const searchinput = document.getElementById('searchPizza');
const section_card = document.getElementById('cards_section');
const section_cardsFiltered = document.getElementById('cardsFiltered_section');

// document.addEventListener('keyup',eventInputSearch);
document.addEventListener('input',eventInputSearch);//este es para el clear nativo del input type search

function howHeigthandWidth(view=691){
    let viewportHeight = window.innerHeight;
    let viewportWidth = window.innerWidth;

    if(typeof view != "number"){
        return null;
    }

    //grid en el card > 691px
    return view > viewportWidth ? true : false;

}

function eventInputSearch(){
    const {value} = searchinput;

    value.toLowerCase().toString() == "platano" ? hiddenACard(): undefined;
    value == "" ? showAllCards(): undefined;
}

function hiddenACard(){
    section_card.style.display = 'none';

    const objCard = {
        img: {
            src: `./src/assets/mamita2.jpeg`,
            alt: `Pizza Img`,
            width: `300`,
            height: `300`,
        },
        title: `Mamita's Pizza Individual`,
        ingredients: `Salsa de la casa, jamón ahumado, jamón de pierna, queso mozzarella, cebolla dulce, pimentón y maíz`,
        price: 2,
    }

    buildACard(objCard);
}

function showAllCards(){
    const response = howHeigthandWidth(691);

    const valueDisplay = response == null || false ? 'block' : 'grid';

    section_card.style.display = valueDisplay;
}

function buildACard(objCard={}){
    if(Object.keys(objCard).length > 0){
        let articlePizza = document.createElement('article');
        articlePizza.classList.add("card");
    
            let figurePizza = document.createElement('figure');
                let imgPizza = document.createElement('img');
                imgPizza.setAttribute(`src`, `${objCard.img?.src}`);
                imgPizza.setAttribute(`alt`, `${objCard.img?.alt}`);
                imgPizza.setAttribute(`width`, `${objCard.img?.width}`);
                imgPizza.setAttribute(`height`, `${objCard.img?.height}`);
                imgPizza.classList.add("pizzaImage");
    
            let sectionPizza = document.createElement('section');
            sectionPizza.classList.add("card_text");
                let p1Pizza = document.createElement('p');
                p1Pizza.textContent = `${objCard.title}`;
                p1Pizza.classList.add("title_pizza");
    
                let p2Ingredients = document.createElement('p');
                
                p2Ingredients.classList.add("pizzaIngredients");
                    let spanSubra = document.createElement('span');
                    spanSubra.textContent = `Ingredientes`
                    spanSubra.classList.add("subra");
    
                    p2Ingredients.innerHTML = `${spanSubra.outerHTML}: ${objCard.ingredients}`;
    
                let p3pizzaPrice = document.createElement('p');
                p3pizzaPrice.classList.add("pizzaPrice");
                p3pizzaPrice.textContent = `Precio: ${objCard.price}`;
                    let spanCurrency = document.createElement('span');
                    spanCurrency.classList.add("currency");
                    spanCurrency.textContent = `$`;
    
        p3pizzaPrice.appendChild(spanCurrency);
        //p2Ingredients.appendChild(spanSubra);
    
        sectionPizza.appendChild(p1Pizza);
        sectionPizza.appendChild(p2Ingredients);
        sectionPizza.appendChild(p3pizzaPrice);
    
        figurePizza.appendChild(imgPizza);
    
        articlePizza.appendChild(figurePizza);
        articlePizza.appendChild(sectionPizza);
    
        section_cardsFiltered.appendChild(articlePizza);
    }else{
        alert('Obj Vacio');
    }
}