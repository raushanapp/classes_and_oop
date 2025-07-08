//  funcrion 
//  Amazon shopping 
const user = {
    name: "Ajay",
    active: true,
    cart: [],
    purchases: [],
};
let history = [];
const compose = (f, g) => (...args) => f(g(...args));
purchasesItems(emptyCart, buyItem, applyTaxToItems, addItemToCart)(user, { name: "laptop", price: 455 });

function purchasesItems(...fns) {
    return fns.reduce(compose);
};
 
function addItemToCart(user,item) { 
    const updateCart = user.cart.concat(item);
    return Object.assign({}, user, { cart: updateCart });
};
function applyTaxToItems(user) {
    const { cart } = user;
    const taxRate = 1.3;
    const updateCart = cart.map((item) => {
        return {
            name: item.name,
            price: item.price * taxRate,
        };
    });
    return Object.assign({}, user, { cart: updateCart });
};
 
function buyItem(user) {
    history.push(user);
    return Object.assign({}, user, { purchases: user.cart });
};
 
function emptyCart(user) {
    return Object.assign({}, user, { cart: [] });
};
 

//  Implement the cart features
//  1. Add item to carts
// 2. Add 3% tax to item in cart
// 3. Buy item : cart ===>  purchases
//  4. Empty cart