import React from "react"
import ReactDOM from "react-dom/client"

const Container =() =>(
    
    <React.Fragment>
        <div  className="container">
          <div className="logo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5XfjpFD3q51KhUQwUhWoUXvQbLcXyRXa1Vcd_mrVh&s"></img>
          </div>
          <div className="user-icon">
            <img src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"></img>
          </div> 
        </div>
         <input type="text"></input>
        
    </React.Fragment>
)

const parent=ReactDOM.createRoot(document.querySelector(".Title"))
parent.render(<Container />)