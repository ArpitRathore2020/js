// Immediately Invoked Function Expressions (IIFE)

// IIFE have their own scope
// used to avoid global scope pollution

// this means they 
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); 

// semicolon is necessary otherwise the function wouldn't know where the context ends
// the last() are for execution of the function written inside

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

