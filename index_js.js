'use strict'
let itemsSelected = +(document.getElementById('cartItems').textContent);
let containerGoods = document.querySelector('.b-catalog');
//let containerInCart = document.querySelector('.mainCart_left');
let sumPrice = 0;
let cardPikedEl = null;
let shadowEl = null;
let productEL = null;
let shoppingBasketEl = null;
let menuCartEl = null;
let priceEl = null;
let cartEl = null;
let imgEl = null;
const arrayDataCart = [];

let itemsInCart = {
    product: [],
    amount: [],
    priceForOne: [],
    sum: [],
    total: 0,
};

const arrayData = [];


class Good {
    constructor(title, price, urlImg, description) {
        this._title = title;
        this._price = price;
        this._urlImg = urlImg;
        this._description = description;

    }
    render() {
        return `
        <div class="card-picked ">
            <div class="b-card ">
                <img src="${this._urlImg}" alt="imgCatalog_Item" class="b-card__img">
                <article class="b-card__container">
                    <header>
                         <h2 class="b-card__heading">${this._title}</h2>
                    </header>
                    <p class="b-card__text"> ${this._description}</p>
                    <p class="b-card__price">$${this._price}</p>
                </article>
            </div>
                  <div class="card-selected card-hidden">
                  <img src="img/Add_to_cart.png" alt="Add_to_cart" class="img_add_to_cart">
           </div>
        </div>
        `;
    }

}

class GoodInCart extends Good {

    // constructor(title, price, urlImg, color, size, quantity = 1) {
    //     super(title, price, urlImg);
    //     this._color = color;
    //     this._size = size;
    //     this._quantity = quantity;
    // }


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
    addInCart(title, price, urlImg, color, size, quantity = 1) {
        this._title = title;
        this._price = price;
        this._urlImg = urlImg;
        this._color = color;
        this._size = size;
        this.quantity = quantity;
    }
    removeGood(title, price, urlImg, color, size, quantity = -1) {
        this._title = title;
        this._price = price;
        this._urlImg = urlImg;
        this._color = color;
        this._size = size;
        this.quantity = quantity;
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

// arrayData[0] = ["Men's Packable Down Puffer Jacket",
//     100,
//     "WARM FEATURES: 100% down feather padding giving the ability to lock in warmth Featuring a quilted pattern to add style and functionality.",
//     "img/imgCard-1.png"
// ];
// arrayData[1] = ['Party Suit',
//     150,
//     'You will look gorgeous in this elegant woman tuxedo with peak lapels. he fully lined, flat-front pants with straight side pockets and front zipper creates a classic tuxedo suit for all occasions',
//     'img/imgCard-2.png'
// ];
// arrayData[2] = ["Men's Fashion Hoodies",
//     125,
//     'This Mens Hoodie is perfect for both machine washing and hand washing. Feature:High Quality,Short Sleeves,Soft,Breathable,Avoid Shrinkage,Printing,Solid Color',
//     'img/imgCard-3.png'
// ];
// arrayData[3] = ["Men's Slim-Fit Slub Crew T-Shirt",
//     60,
//     "This classic slim-fit T-shirt features raglan sleeves and is perfect for sports or casual everydaywear. ",
//     "img/imgCard-4.png"
// ];
// arrayData[4] = ["Blue jacket",
//     95,
//     "You will look gorgeous in this beautiful ladies blue suit with peak lapels. Wear it from office to party and pair it with different accessories for each occasion",
//     "img/imgCard-5.png"
// ];
// arrayData[5] = ["Green Filafil Shirt",
//     88,
//     "Refined womens' business dress shirt. Relaxed Fit: Our most generous fit sits farthest from the body Crafted with a very special fabric that lends a fun, preppy vibe to any look.",
//     "img/imgCard-6.png",
// ];
//массив данных для Cart.html
//url, title, price, color, size, quantity

// arrayDataCart[0] = ["img/imgItem-1_cart.png",
//     "Men's Fashion Hoodies",
//     125,
//     "Blue",
//     "M",
//     2
// ];
//img/imgItem-2_cart.png
// arrayDataCart[1] = ["img/imgCard-2.png",
//     "Men's Magenta Jacket ",
//     150,
//     "Red",
//     "M",
//     1
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
    //Реализовано формирование каточек в index.html
    //и фомирование каточки на странице Cart.html(корзина)
    array.forEach(elementArray => {
        if (elementArray.length === 4) {
            const [title, price, description, urlImg] = elementArray;
            arrayGoods.push(new Good(title, price, urlImg, description));
        }
        // else if (elementArray.length != 4) {
        //     const [urlImg, title, price, color, size, quantity] = elementArray;
        //     arrayGoods.push(new GoodInCart(title, price, urlImg, color, size, quantity));
        // }
    });
    return arrayGoods;
}
//Так как скрипт подключен к двум страницам тут выполняется проверка
//и происходит выполнение нужной части кода на соответствующей странице
//проверка основана на наличие класса на странице

fetch('https://raw.githubusercontent.com/gjohn85456/newRepository/main/thing2.json')
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        Array.prototype.push.apply(arrayData, response)
            // console.log(arrayData);

        if (containerGoods !== null) {
            const card1 = new GoodsList(createGoods(arrayData), containerGoods);
            card1.renderGoodList();
            Initialization();
            addMiniMenuCart();

        }

        // if (containerInCart !== null) {
        //     const card2 = new GoodsList(createGoods(arrayDataCart), containerInCart);
        //     card2.renderGoodList();
        //     card2.totalAmount();
        // }
    })
    .catch((err) => {
        console.log(err);
    })

function Initialization() {
    cardPikedEl = document.querySelectorAll('.card-picked');
    imgEl = document.querySelectorAll('.b-card__img');
    shadowEl = document.querySelectorAll('.card-selected');
    productEL = document.querySelectorAll('h2');
    shoppingBasketEl = document.querySelector('.shoppingBasket');
    menuCartEl = document.querySelector('.menuCart');
    priceEl = document.querySelectorAll('.b-card__price');
    cartEl = document.querySelectorAll('.img_add_to_cart');


    shoppingBasketEl.addEventListener('mouseover', () => {
        menuCartEl.classList.toggle('menuCartHidden');
    });
    shoppingBasketEl.addEventListener('mouseout', () => {
        menuCartEl.classList.toggle('menuCartHidden');
    });

    for (let i = 0; i < cardPikedEl.length; i++) {
        cardPikedEl[i].addEventListener('mouseover', () => {
            shadowEl[i].classList.remove('card-hidden');
        });
        cardPikedEl[i].addEventListener('mouseout', () => {
            shadowEl[i].classList.add('card-hidden');
        });
    }
}

function buidMenuCart(obj) {
    if (obj.total != 0) {
        menuCartEl.innerHTML = `
            <div class = "menuCart_header menuCart_header_bolder">
                <div> Название товара </div> 
                <div> Количество </div> 
                <div> Цена за шт. </div> 
                <div> Итого </div> 
            </div>
        `;

        for (let i = 0; i < obj.product.length; i++) {
            menuCartEl.insertAdjacentHTML('beforeend',
                `
            <br>
            <hr>
            <br>
            <div class="menuCart_header">
                <div>${itemsInCart.product[i]}</div>
                <div>${itemsInCart.amount[i]} шт.</div>
                <div>$${itemsInCart.priceForOne[i]}</div>
                <div>$${itemsInCart.sum[i]}</div>
            </div>
            `);
        }
        menuCartEl.insertAdjacentHTML('beforeend',
            `
            <br>
            <hr>
            <br>
            <div class="menuCartTotal">Товаров в корзине на сумму: $${itemsInCart.total}</div>
        `);
    }

}

function addMiniMenuCart() {
    for (let index = 0; index < cartEl.length; index++) {
        let product1, price1, url1, color1, size1, quantity1;
        cartEl[index].addEventListener('click', () => {
            sumPrice = sumPrice + parseFloat(priceEl[index].textContent.substr(1));
            //определяем название продукта который выбрали
            let productName = (productEL[index].textContent);
            //создаем корзину с покупок
            itemsInCart.total = sumPrice;
            //console.log(sumPrice);
            //общее количество элементов к корзине
            itemsSelected++;
            //console.log(itemsSelected);
            document.getElementById('cartItems').textContent = itemsSelected;
            //console.log(productEL[index].innerHTML);            
            product1 = productEL[index].textContent;
            price1 = priceEl[index].textContent;
            url1 = imgEl[index].attributes.src.value;
            color1 = "green";
            size1 = "M";
            let goodInCart = new GoodInCart;
            goodInCart.addInCart(product1, price1, url1, color1, size1, quantity1);
            // console.log(goodInCart);
            if (!itemsInCart.product.includes(productName)) {
                arrayDataCart.push(goodInCart);
                console.log(arrayDataCart);
                let a = (itemsInCart.product.length);
                itemsInCart.product[a] = productEL[index].textContent;
                itemsInCart.amount[a] = 1;
                itemsInCart.sum[a] = parseFloat(priceEl[index].textContent.substr(1));
                itemsInCart.priceForOne[a] = itemsInCart.sum[a];
            } else {
                for (var j = 0; j < itemsInCart.product.length; j++) {
                    if (itemsInCart.product[j] === productName) {
                        itemsInCart.amount[j] = itemsInCart.amount[j] + 1;
                        itemsInCart.sum[j] = itemsInCart.sum[j] + parseFloat(priceEl[index].textContent.substr(1));
                        continue;
                    }
                }
                for (var k = 0; k < arrayDataCart.length; k++) {
                    if (arrayDataCart[k]._title === productName) {
                        arrayDataCart[k].quantity = arrayDataCart[k].quantity + 1;
                    }
                }
            }
            //console.log(itemsInCart);
            buidMenuCart(itemsInCart);
        });
        // cartEL[index].addEventListener('contextmenu', () => {
        //     product1 = productEL[index].textContent;
        //     if (arrayDataCart.includes(product1)) {
        //         console.log(arrayDataCart);
        //         arrayDataCart[index].quantity - 1;
        //         if (arrayDataCart[index].quantity - 1 === 0) {
        //             arrayDataCart.slice(index, 1);
        //             console.log(arrayDataCart);
        //         }
        //     }

        // });
    }
}