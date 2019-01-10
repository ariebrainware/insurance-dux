 const { createStore, combineReducers } = require('redux')

 const createClaim = (name, amountOfMoneyToCollect) => {
    return { // action
        type: 'CREATE_CLAIM',
        payload: {
            name,
            amountOfMoneyToCollect
        }
    }
 }

 const createPolicy = (name) => {
    return { //action
        type: 'CREATE_POLICY',
        payload: {
            name,
            amount: 20
        }
    }
 }

 const deletePolicy = (name) => {
     return { //action
        type: 'DELETE_POLICY',
        payload: {
            name
        }
     }
 }

 // Departement (reducers)
 const claimHistory = (oldListOfClaims =[] , action) => {
    if (action.type === 'CREATE_CLAIM') {
        return [...oldListOfClaims, action.payload]
    }
    return oldListOfClaims
 }

 const accounting = (bagOfMoney = 100, action) => {
    if (action.type === 'CREATE_CLAIM') {
        return bagOfMoney - action.payload.amountOfMoneyToCollect
    } else if (action.type === 'CREATE_POLICY') {
        return bagOfMoney + action.payload.amount
    }
    return bagOfMoney
 }

 const policies = (listOfPolicies = [] , action) => {
     if (action.type === 'CREATE_POLICY') {
         return [...listOfPolicies, action.payload.name]
     } else if (action.type === 'DELETE_POLICY') {
         return listOfPolicies.filter(policy => policy != action.payload.name)
     }
     return listOfPolicies
 }

 // Company setup

 const reducers = combineReducers({
     accounting,
     claimHistory,
     policies
 })

 const store = createStore(reducers)

 store.dispatch(createPolicy('Paul'))
 store.dispatch(createClaim('Paul', 100))
 store.dispatch(deletePolicy('Paul'))
 console.log((store.getState()));


 