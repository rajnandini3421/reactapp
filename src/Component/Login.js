import React from 'react'
import { useHistory } from "react-router-dom";

const Login=()=>{
    const history = useHistory();
    history.push("/");

    return <div>Hello welcome in Login..........</div>
}

export default Login;