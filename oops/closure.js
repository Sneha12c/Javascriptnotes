
// Lexical scoping

function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();

// init() creates a local variable called name and a function called displayName(). The displayName() function is an inner function
//  that is defined inside init() and is available only within the body of the init() function. Note that the displayName() function 
// has no local variables of its own. However, since inner functions have access to the variables of outer scopes, displayName() can 
// access the variable name declared in the parent function, init().

// Run the code using this JSFiddle link and notice that the console.log() statement within the displayName() function successfully 
// displays the value of the name variable, which is declared in its parent function. This is an example of lexical scoping, which 
// describes how a parser resolves variable names when functions are nested. The word lexical refers to the fact that lexical scoping 
// uses the location where a variable is declared within the source code to determine where that variable is available. 
// Nested functions have access to variables declared in their outer scope.


// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state
//  (the lexical environment). In other words, a closure gives a function access to its outer scope. In JavaScript, 
//  closures are created every time a function is created, at function creation time.

function makeFunc() {
    const name = "Mozilla";
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
  myFunc();
  

// Once makeFunc() finishes executing, you might expect that the name variable would no longer be accessible.
//  However, because the code still works as expected, this is obviously not the case in JavaScript.

// The reason is that functions in JavaScript form closures. A closure is the combination of a function and the lexical environment
//  within which that function was declared. This environment consists of any variables that were in-scope at the time the closure
//  was created. In this case, myFunc is a reference to the instance of the function displayName that is created when makeFunc is run. 
// The instance of displayName maintains a reference to its lexical environment, within which the variable name exists. 
// For this reason, when myFunc is invoked, the variable name remains available for use, and "Mozilla" is passed to console.log.

  // document.getElementById("orange").onclick = function(){
        //     document.body.style.backgroundColor = `orange`
        // }
        // document.getElementById("green").onclick = function(){
        //     document.body.style.backgroundColor = `green`
        // }
    //    real world scenerio for usecase of closure
        function clickHandler(color){
            // document.body.style.backgroundColor = `${color}`

            return function(){
                document.body.style.backgroundColor = `${color}`
            }
        }

        document.getElementById('orange').onclick = clickHandler("orange")
        document.getElementById('green').onclick = clickHandler("green")
