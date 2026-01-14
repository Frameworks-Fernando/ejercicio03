import React from 'react'

const Saludo = (props) => {
  return (
    <div>Hola {props.nombre} tienes {props.edad} años</div>
  )
}

export default Saludo
