import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { ContextProvider } from "./context/Context"

function Index() {
  return (
    <div>
      <ContextProvider>
      <App/>
      </ContextProvider>
    </div>
  )
}


ReactDOM.render(<Index/>, document.getElementById("root"))
