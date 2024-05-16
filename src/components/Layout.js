import React from 'react'

export default function Layout() {
    return (
        <React.StrictMode>
            <div className='black-bar'></div>
            <div className='nav'>
                <img className='nav-item'src='https://tienda.movistar.com.co/static/version1715820632/frontend/Vass/colombia/en_US/images/brand-movistar.svg'/>
                <p className='nav-item'>Equipos</p>
                <p className='nav-item'>Hogar</p>
                <p className='nav-item'>Planes móviles</p>
                <p className='nav-item'>Entretenimiento</p>
                <p className='nav-item'>Ayuda</p>
            </div>
        </React.StrictMode>
    )
}
