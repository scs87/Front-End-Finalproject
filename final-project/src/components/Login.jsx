import React from 'react';
import "../components/Login.css";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/Auth-context';




const credentials = {
    username: "Sergio",
    password: "Clemente"

}


const Login = () => {
    const navigate = useNavigate()
    const {setIsAuth} = useAuth()
    const handlesubmit = (e) => {
        e.preventDefault()

        const form = {
            username: e.target.username.value,
            password: e.target.password.value
        }

        if (form.username === credentials.username && form.password === credentials.password) {

            setIsAuth(true)
            navigate("/")



        } else {

            Swal.fire(
                'Error',
                'Bad Credentials',
                'error'
            )


        }
    }


    return (
        <div className='formulario'>
            
            <form onSubmit={handlesubmit}>
                <div className='nom'>
                    <label htmlFor="username">Nombre de usuario:</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div className='pass'>
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <div className='btn-form'>
                    <input type="submit" value="Iniciar sesión"></input>
                </div>
            </form>

        </div>



    )
}

export default Login