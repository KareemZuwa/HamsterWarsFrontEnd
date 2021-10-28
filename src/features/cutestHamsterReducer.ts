import { /*createAction,*/ createReducer } from '@reduxjs/toolkit'
import { Hamster } from '../models/Hamster'

// Dessa actions finns - detta är vad användaren kan göra
// const ?? = createAction(??)
const actions = {  }


// Värdet på "products" när appen startar
const initialState: Hamster[] = [
    
]


const hamsterReducer = createReducer(initialState, {

})

export { actions, hamsterReducer }