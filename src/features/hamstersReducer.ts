import { createAction, createReducer } from '@reduxjs/toolkit'
import { Hamster } from '../models/Hamster'

// Dessa actions finns - detta är vad användaren kan göra
const getHamsters = createAction<Hamster>('get Hamster Array')
// const addHamster = createAction<Hamster>('add one hamster')
const removeHamster = createAction<string>('remove one hamster')
// const ?? = createAction(??)
const actions = { getHamsters, removeHamster }

// Visar array på "hamsters" när appen startar
const initialState: Hamster[] = []

const hamsterReducer = createReducer(initialState, {
    //Lägg till hamsters i initialState
    [getHamsters.toString()]: (state, action) => action.payload || null,

    //Ta bort hamster med ett visst id
    [removeHamster.toString()]: (state, action) => state.filter(hamster => hamster.id !== action.payload)

})

export { actions, initialState, hamsterReducer }