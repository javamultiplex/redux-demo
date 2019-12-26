const redux = require('redux');
const reduxLogegr = require('redux-logger');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

const createLogger = reduxLogegr.createLogger;

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

const initialCakeState = {
    numberOfCakes: 10
}

const initialIceCreamState = {
    numberOfIcecreams: 20
}


const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case 'BUY_ICECREAM':
            return {
                ...state,
                numberOfIcecreams: state.numberOfIcecreams - 1
            }
        default:
            return state;
    }
}

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case 'BUY_CAKE':
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - 1
            }
        default:
            return state;
    }
}
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
});

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(logger));
console.log('Initial State', store.getState());
const unsubscribe = store.subscribe(() => { });
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
store.dispatch(buyCake());
unsubscribe();
