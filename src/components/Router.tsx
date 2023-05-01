import React from "react"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Route, Routes} from "react-router-dom"

import SignIn from "./SignUp"

// eslint-disable-next-line func-style
const Router = () => (
        <Routes>
            <Route path="/signIn" element={<SignIn/>}/>
        </Routes>
    )

export default Router