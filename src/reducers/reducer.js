import { combineReducers} from 'redux';

const initalState={
    value: null,
}

const applyPromoCodeReducer=(state= initalState, action )=>{
    switch(action.type){
        case 'PROMO_CODE':
            return {
                ...state,
                value: action.payload,
            }
        default:
            return state;
    }
}

const reducer= combineReducers({
    promoCode: applyPromoCodeReducer
});

export default reducer;