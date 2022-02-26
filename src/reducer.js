export const initialState = {
    basket: [],
    user: null,
}
export const TotalCartValue = (cart) => {
    return cart?.reduce((total, item) => item.price + total, 0);
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'REMOVE_FROM_CART':
            const index = state.basket.findIndex(
                item => item.id === action.id
            );
            let newBasket = [...state.basket];
            if(index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(`Cant remove product (id: ${action.id}) as it is not in basket !`);
            }
            return {
                ...state,
                basket: newBasket,
            };
            case 'EMPTY_CART':
                return {
                    ...state,
                    basket: [],
                };
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        default:
            return state;
    }
}

export default reducer;