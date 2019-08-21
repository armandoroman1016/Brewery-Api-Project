import React from 'react'
import { NavLink } from 'react-router-dom'


const NavBar = (props) => {

    const isOnLandingPage = () => {
        const landingPageUrls = [
            '/',
        ];
        return (landingPageUrls.some(url => url === props.location.pathname));
    };

    return (
        <div className = 'nav-bar'>
            <h1>
                <NavLink to='/' style = {{color:'#fcc25a'}}>Open Breweries</NavLink>
            </h1>
            {!isOnLandingPage() &&
                <ul>
                <li>{props.location.pathname !== '/' &&
                    <NavLink 
                        to ='/breweries' 
                        style = {{color:'#fcc25a'}} 
                        activeStyle = {{color: '#e0e4ee', fontSize: '2.1rem', textDecorationLine: 'underline'}}
                    >Breweries</NavLink>}
                </li>
                <li>
                    {props.location.pathname !== '/' && 
                    <NavLink 
                            to = '/favorites' 
                            style = {{color:'#fcc25a'}} 
                            activeStyle = {{color: '#e0e4ee', fontSize: '2.1rem', textDecorationLine: 'underline', fontWeight: '700'}}
                    >My Favorites</NavLink>}
                </li>          
            </ul> 
            }      
        </div>
    )
}
export default NavBar