import React from "react"
import Login from "./Login"

const AuthLayout = ( {children} ) => {
  return (
    <div>
    <h1 className="text-center bg-black font-5xl font-serif">ERP</h1>
     <Login/>
      {children}
    </div>
  )
}

export default AuthLayout
