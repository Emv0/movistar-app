import React from 'react'

import '../index.css'

import { useState } from 'react';



export default function Cellphones(props) {

    const cellPhones = ["Xiaomi Redmi Note 12 4+128GB LTE", "LIBRE IPHONE 15 PRO MAX 256GB", "IPHONE 11 128GB", "LIBRE IPHONE 13 128GB"];

    const { descriptions } = props

    //se define una constante con los estados del boton 

    const [stateBtn, setStateBtn] = useState(false)

    //se crea función para cambiar el estado del botón 

    const state = () => {

        // se define que el boton se ponga al contrario de su estado actual 

        setStateBtn(!stateBtn)

        // se seleccionan los distintos botones 

        var button = document.querySelectorAll(".buttonComprar");

        // se itera sobre cada botón 

        button.forEach((btn) => {

            if (stateBtn) {

                btn.style.backgroundColor = "green"

                btn.innerText = "comprado"

            } else {

                btn.style.backgroundColor = "red"

                btn.innerText = "no comprado"

            }

        });

    }

    return (

        <div className="main-content">

            {

                cellPhones.map((phone, i) => (

                    <div className='cell-content' key={i} >

                        <img className='img-cell' src={descriptions[i].img} />

                        <h5>{phone}</h5>

                        <h5>Marca: {descriptions[i].marca}</h5>

                        <h5>Referencia Técnica: {descriptions[i].referencia}</h5>

                        <button id='buttonComprar' className='buttonComprar' onClick={state}>no comprado</button>

                    </div>

                ))

            }

        </div>

    )

} 