import React from 'react';
import "./Header.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { KeyboardArrowDown, Login } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { useAuth } from '../../Context/Auth-context';


const Header = () => {

    const { isAuth } = useAuth()

    return (
        <div className='header'>
            <img src='/images/giphyLogo.png' alt='logo' />
            <div className='menu'>
                <div className='button-wrapper reactions'>
                    <div className='menu-button hover-reactions'>
                        <h2>Reactions</h2>
                    </div>
                </div>
                <div className='button-wrapper entertaiment'>
                    <div className='menu-button hover-entertaiment'>
                        <h2>Entertaiment</h2>
                    </div>
                </div>
                <div className='button-wrapper sports'>
                    <div className='menu-button hover-sports'>
                        <h2>Sports</h2>
                    </div>
                </div>
            </div>
         
            <div className='profile'>
                <Link to="/login"> <img src="/images/avatar1.png" alt='avatar' /></Link>
                <h2>{isAuth ? "Sergio" : "Login"}</h2>
                <KeyboardArrowDown />
            </div>
        </div>
    )
}

export default Header