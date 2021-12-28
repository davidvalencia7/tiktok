import { React } from "react";
import { useDispatch, useSelector } from 'react-redux'

import {
    logOut,
    signIn
} from '../store'

let SignIn = (props) => {

    let dispatch = useDispatch();

    const user = useSelector(state => state.user.user)
    console.log(user);

    let doSignIn = () => {
        dispatch(
            signIn({
                email : 'david@gmail.com',
                jwtToken : 'klflfjj321784671467'
            })
        )
    }

    let doLogOut = () => {
        dispatch(
            logOut()
        )
    }

    return(
        <div>
            {
            user ?
                <button onClick={doLogOut}>Cerrar sesion</button>
                :
                <button onClick={doSignIn}>Ingresar</button>
            }
        </div>
    )
}

export default SignIn