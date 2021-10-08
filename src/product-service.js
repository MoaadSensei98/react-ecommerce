import {SHOPPING_CART_ITEMS} from "./mock-products";

export const create = (product) => {
  return fetch("https://classroom-playground-api.web.app/products/moaad/", {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(product)
  })
    .then(res => res.json())
};

export const list = () => {
  return fetch("https://classroom-playground-api.web.app/products/moaad/", {
    method: 'GET',

  })
    .then(res => res.json())
};

export const listShoppingCart = () => {
  console.log('listing shopping cart')
  return SHOPPING_CART_ITEMS;
};

export const addToShoppingCart = (product) => {
  console.log('add', product.name, 'to shopping cart')
  SHOPPING_CART_ITEMS.push(product);
};

export const removeFromShoppingCart = (product) => {
  console.log('remove', product.name, 'from shopping cart')
  const index = SHOPPING_CART_ITEMS.findIndex(value => value.id === product.id);
  SHOPPING_CART_ITEMS.splice(index, 1);
};
