import { createStore, applyMiddleware, compose } from 'redux'
import { rootReducer } from "./rootReducer";
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
    rootReducer, 
    compose(composeWithDevTools(applyMiddleware(thunk)))
)
export default store


