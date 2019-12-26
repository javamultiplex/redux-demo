const redux = require('redux');
const createStore = redux.createStore;

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'This is redux action'
    }
}

function buyIcecream() {
    return {
        type: BUY_ICECREAM
    }
}

const initialState = {
    numberOfCakes: 10,
    numberOfIcecreams: 20
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BUY_CAKE':
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - 1
            }
        case 'BUY_ICECREAM':
            return {
                ...state,
                numberOfIcecreams: state.numberOfIcecreams - 1
            }
        default:
            return state;
    }
}

const store = createStore(reducer);
console.log('Initial State', store.getState());
const unsubscribe = store.subscribe(() => console.log('Update State', store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
store.dispatch(buyCake());
unsubscribe();
