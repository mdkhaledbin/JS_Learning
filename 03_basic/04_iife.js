// Immediately Invoked Function Expression

(function chai(){
    //named iife
    console.log(`DB connected`);
    
})(); // to run the next portion you have to make sure add semicolon

( () => {
    console.log(`DB Connected Two.`);
    
})();

( function aurCode(){
    console.log(`DB Connected`);
    
})();

( (name) => {
    console.log(`DB Connected to ${name}`);
    
})("Khaled");
//(function definition)(execution)
// chai()
