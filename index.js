function receivesAFunction(callback){
    callback();
}

/*function hello(){
    console.log("Hello World!")
}*/

//receivesAFunction(hello);

function returnsANamedFunction(){
    return function name(){
        console.log("a named function")
    }
}

function returnsAnAnonymousFunction(){
    return () => console.log("an anonymous function")
}
