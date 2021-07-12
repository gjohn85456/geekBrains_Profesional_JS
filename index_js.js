'use strict'
//Задание 1
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
    constructor(title, price, description, urlImg) {
        this._title = title;
        this._price = price;
        this._description = description;
        this._urlImg = urlImg;
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
    constructor(urlImg, title, price, color, size, quantity = 1) {
        super(urlImg, title, price);
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
                <p>Price: <span class="mainCart_left_card-1_text_price">$${this_.price}</span> </p>
                <p>Color: <span class="mainCart_left_card-1_text_color">${this_.color}</span> </p>
                <p>Size: <span class="mainCart_left_card-1_text_size">${this_.size}</span> </p>
                <p>Quantity:&nbsp;&nbsp; <span class="mainCart_left_card-1_text_quantity">${this._quantity}</span></p>
                <img src="img/imgClose.png" alt="imgClose">
            </div>   
        </div>   
    `;
    }
}

class GoodsList {
    constructor(goods) {
        this._goods = goods;
        this._$goodsListContainer = document.querySelector('.b-catalog');
    }

    renderGoodList() {
        let goodsList = this._goods.map(
            item => item.render()).join(' ');
        this._$goodsListContainer.insertAdjacentHTML('beforeend', goodsList);
    }
}
//Создал массив данных для формирования карточек
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

//url, title, price, color, size, quantity
// const arrayDataCart = [];
// arrayDataCart[0] = ["img/imgItem-1_cart.png",
//     "Men's Fashion Hoodies",
//     125,
//     "Red",
//     "M",
//     2
// ];
// const card1 = new GoodsList([
//     new Good('ProductNew', 100, 'New descripctio', 'img/imgCard-2.png'),
//     new Good('ProductNew123', 100, 'New descripctio123', 'img/imgCard-3.png'),
// ]);

// const a = arrayData[1].toString();
// console.log(a);


/**
 * Функция преобразует данные в массив объектов Goods
 * @param {*} array на вход подается массив данных необходимый для формирования карточки товара
 * @returns 
 */
function createGoods(array) {
    const arrayGoods = [];
    array.forEach(elementArray => {
        const [title, price, description, urlImg] = elementArray;
        arrayGoods.push(new Good(title, price, description, urlImg));
        //Пока не реализовал формирование карточки в cart.html
        // if (elementArray.leght === 4) {
        //     const [title, price, description, urlImg] = elementArray;
        //     arrayGoods.push(new Good(title, price, description, urlImg));
        // } else if (elementArray.leght === 4) {
        //     const [urlImg, title, price, color, size, quantity] = elementArray;
        //     arrayGoods.push(new GoodInCart(urlImg, title, price, color, size, quantity));
        // }
    });
    return arrayGoods;
}

const card1 = new GoodsList(createGoods(arrayData));


card1.renderGoodList();