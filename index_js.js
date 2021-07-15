'use strict'
//Задание 2
// const goods = [
//     { title: 'Down jacket', price: 100, description: 'insulated jacket' }
// ];

// const $goodsList = document.querySelector('.b-card__container');


// const renderGoodsItem = ({ title, price, description }) => {
//     return `
//         <h3 class="b-card__heading ">${title}</h3>
//         <p class="b-card__text ">${description}</p>
//         <p class="b-card__price ">$${price}</p>
//     `;
// }

// const renderGoodsList = (List = goods) => {
//     let goodsList = List.map(
//         item => renderGoodsItem(item)
//     );
//     $goodsList.insertAdjacentHTML('beforeend', goodsList);
// }
// renderGoodsList();

class Good {
    constructor(title, price, urlImg, description) {
        this._title = title;
        this._price = price;
        this._urlImg = urlImg;
        this._description = description;

    }
    render() {
        return `
        <div class="b-card ">
           <img src="${this._urlImg} " alt="imgCard">
            <div class="b-card__container ">
                <h3 class="b-card__heading ">${this._title}</h3>
                <p class="b-card__text ">${this._description}</p>
                <p class="b-card__price ">$${this._price}</p>
             </div>        
        </div>
    `;
    }
}

class GoodInCart extends Good {

    constructor(title, price, urlImg, color, size, quantity = 1) {
        super(title, price, urlImg);
        this._color = color;
        this._size = size;
        this._quantity = quantity;

    }
    render() {
        return `
        <div class="mainCart_left_card-1">
            <img src="${this._urlImg}" alt="imgItem-2_cart">
            <div class="mainCart_left_card-1_text">
                <h2>${this._title}</h2>
                <p>Price: <span class="mainCart_left_card-1_text_price">$${this._price}</span> </p>
                <p>Color: <span class="mainCart_left_card-1_text_color">${this._color}</span> </p>
                <p>Size: <span class="mainCart_left_card-1_text_size">${this._size}</span> </p>
                <p>Quantity:&nbsp;&nbsp; <span class="mainCart_left_card-1_text_quantity">${this._quantity}</span></p>
                <img src="img/imgClose.png" alt="imgClose">
            </div>   
        </div>   
    `;
    }
}

class GoodsList {
    constructor(goods, container) {
        this._goods = goods;
        this._$goodsListContainer = container;
    }

    renderGoodList() {
        let goodsList = this._goods.map(
            item => item.render()).join(' ');
        this._$goodsListContainer.insertAdjacentHTML('afterbegin', goodsList);
    }
    totalAmount() {
        let total = 0;
        this._goods.forEach(item => {
            total = total + item._price * item._quantity;
            console.log(item);
        });
        console.log(total);
        const $totalAmount = document.querySelector('.totalAmount');
        $totalAmount.textContent = total;
    }
}
//Создал массив данных для формирования карточек index.html
//title, price, description, url
const arrayData = [];
arrayData[0] = ["Men's Packable Down Puffer Jacket",
    100,
    "WARM FEATURES: 100% down feather padding giving the ability to lock in warmth Featuring a quilted pattern to add style and functionality.",
    "img/imgCard-1.png"
];
arrayData[1] = ['Party Suit',
    150,
    'You will look gorgeous in this elegant woman tuxedo with peak lapels. he fully lined, flat-front pants with straight side pockets and front zipper creates a classic tuxedo suit for all occasions',
    'img/imgCard-2.png'
];
arrayData[2] = ["Men's Fashion Hoodies",
    125,
    'This Mens Hoodie is perfect for both machine washing and hand washing. Feature:High Quality,Short Sleeves,Soft,Breathable,Avoid Shrinkage,Printing,Solid Color',
    'img/imgCard-3.png'
];
arrayData[3] = ["Men's Slim-Fit Slub Crew T-Shirt",
    60,
    "This classic slim-fit T-shirt features raglan sleeves and is perfect for sports or casual everydaywear. ",
    "img/imgCard-4.png"
];
arrayData[4] = ["Blue jacket",
    95,
    "You will look gorgeous in this beautiful ladies blue suit with peak lapels. Wear it from office to party and pair it with different accessories for each occasion",
    "img/imgCard-5.png"
];
arrayData[5] = ["Green Filafil Shirt",
    88,
    "Refined womens' business dress shirt. Relaxed Fit: Our most generous fit sits farthest from the body Crafted with a very special fabric that lends a fun, preppy vibe to any look.",
    "img/imgCard-6.png",
];
//массив данных для Cart.html
//url, title, price, color, size, quantity
const arrayDataCart = [];
arrayDataCart[0] = ["img/imgItem-1_cart.png",
    "Men's Fashion Hoodies",
    125,
    "Blue",
    "M",
    2
];
arrayDataCart[1] = ["img/imgItem-2_cart.png",
    "Men's Magenta Jacket ",
    150,
    "Red",
    "M",
    1
];
// const card1 = new GoodsList([
//     new Good('ProductNew', 100, 'New descripctio', 'img/imgCard-2.png'),
//     new Good('ProductNew123', 100, 'New descripctio123', 'img/imgCard-3.png'),
// ]);

// const a = arrayData[1].toString();
// console.log(a);

//Начал третье задание 
// fetch('https://raw.githubusercontent.com/gjohn85456/newRepository/main/thing2.json')
//     .then((response) => {
//         return response.json();
//     })
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
/**
 * Функция преобразует данные в массив объектов Goods
 * @param {*} array на вход подается массив данных необходимый для формирования карточки товара
 * @returns 
 */
function createGoods(array) {
    const arrayGoods = [];
    // array.forEach(elementArray => {
    //     const [title, price, description, urlImg] = elementArray;
    //     arrayGoods.push(new Good(title, price, description, urlImg));      

    // });

    //Реализовано формирование каточек в index.html
    //и фомирование каточки на странице Cart.html(корзина)
    array.forEach(elementArray => {
        if (elementArray.length === 4) {
            const [title, price, description, urlImg] = elementArray;
            arrayGoods.push(new Good(title, price, urlImg, description));
        } else if (elementArray.length != 4) {
            const [urlImg, title, price, color, size, quantity] = elementArray;
            arrayGoods.push(new GoodInCart(title, price, urlImg, color, size, quantity));
        }
    });
    return arrayGoods;
}
//Так как скрипт подключен к двум страницам тут выполняется проверка
//и происходит выполнение нужной части кода на соответствующей странице
//проверка основана на наличие класса на странице
let containerGoods = document.querySelector('.b-catalog');
let containerInCart = document.querySelector('.mainCart_left');

if (containerGoods !== null) {
    const card1 = new GoodsList(createGoods(arrayData), containerGoods);
    card1.renderGoodList();
}


if (containerInCart !== null) {
    const card2 = new GoodsList(createGoods(arrayDataCart), containerInCart);
    card2.renderGoodList();
    card2.totalAmount();
}