export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existinsCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if(existinsCartItem) {
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id 
            ? { ...cartItem, quantity: cartItem.quantity+  1 }
            : cartItem);
    }

    return [...cartItems, { ...cartItems, quantity: 1 }]
};