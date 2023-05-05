import React from "react"
import {Route, Routes} from "react-router-dom"

import SignIn from "./SignUp"

const Router = () => (
        <Routes>
            <Route path="/signIn" element={<SignIn/>}/>
        </Routes>
    )

export default Router