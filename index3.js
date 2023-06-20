import React from "react" ;
import ReactDOM from "react-dom/client" ;

// with the help of JSX
let JSXheading= <h1 id="heading" className="head">namaste react</h1>
console.log(JSXheading)

//React element
const heading=(
    <h1 className="heading">namaste react using JSX</h1>
)

// React functional component
const HeaderComponent=()=> {
    return (
    <h1 className="head">namaste react functional component </h1>)
            
}
//component composition

let greet="hello"
const HeaderComponent2=()=> (
    <div id="container">
        {<HeaderComponent/>}
        {/* or */}
        <HeaderComponent></HeaderComponent>

    {/* write react element inside component */}
         {heading}
        <h1>{greet }</h1>
        <h1 className="head">namaste react functional component2</h1> 
    </div>
)

//how to render functional component
const parent = ReactDOM.createRoot(document.querySelector(".Title"))

parent.render(<HeaderComponent2/>)
