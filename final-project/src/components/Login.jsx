import React from 'react'
import  "../components/Login.css"

const Login = () => {
    return (
        <div className='formulario'>
            <form>
                <div className='nom'>
                    <label for="username">Nombre de usuario:</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div className='pass'>
                    <label for="password">Contraseña:</label>
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