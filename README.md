## Intro to Redux Lecture Exercises

## Assessment 1
* Create a reducer which responds to the event 'INCREMENT_COUNTER' by incremeting the `counter` property in state
* Use `createStore` to create a store.
* Use store.dispatch to dispatch the INCREMENT_COUNTER action
* Install Redux Devtools: https://github.com/zalmoxisus/redux-devtools-extension
* Open Redux Devtools and use it to visualize the change in state

## Assessment 2
* In Header.js, use `mapStateToProps` to provide the `Header` with `counter` as a prop
* In Button.js, use `mapDispatchToProps` to provide  `Button` with a function which returns an action to increment the counter
