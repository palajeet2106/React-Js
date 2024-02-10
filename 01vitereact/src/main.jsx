import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function myApp(){
    return(
        <div>
            <h1>custom coding operation !</h1>
        </div>
    )
}

const anotherElement = (
    <a href="https://google.com" target='__blank' title='google'>visit the google</a>
)

// const antherUser = "coding Operation";

const reactElement = React.createElement(
    'a',
    {href: 'https://instagram.com' , target : '_blank'},
    'click me to visit the website ',
    anotherElement
    
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    // myApp()
    // anotherElement
    // antherUser
    reactElement



   
 

)
