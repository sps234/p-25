import React, { useState } from 'react'
import Modal from './Modal'

function Modal_Main() {
    
  
  const [ show, setShow ] = useState( false );

  function handleClick() {
    setShow( ! show );
  }
  
  function onClose() {
    setShow( false );
  }

  return (
    <>
    <div className='text-center'>
    <button className='bg-yellow-400 p-3 rounded mt-5' onClick={ handleClick }> Open Modal Popup </button>       
    { show &&  <Modal onClose={ onClose } 
    body={ <div> Customized body </div> } 
    header={ <h1> Customized header </h1>}
    footer={ <h1> Customized footer</h1>}
    /> }
    </div>
    </>
  )
}

export default Modal_Main