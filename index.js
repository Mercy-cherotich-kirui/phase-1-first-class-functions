function receivesAFunction(callback){
    callback()
}

function returnsANamedFunction() {
    return function namedFunction(){
    console.log("this is a named function")
    }
}

function returnsAnAnonymousFunction() {
    return () =>console("this is an anonymous function")
        
    }
