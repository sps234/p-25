import React from 'react'
import './Modal_Popup.css'

function Modal( { id, header, body, footer, onClose }) {

  return (
    <>

    <div id={ id || 'Modal' } className='modal' >
      <div className="modal-content">
        <div className='header'> 
          <span className="close-Modal-icon" onClick={onClose}> &times; </span>
          <h2 className='text-2xl '> { header ? header : 'Header' } </h2>          
        </div>
        <div className='body'>
        { body ? ( body ) : ( <div>  <p> this is our modal body </p></div> )}
        </div>
        <div className='footer'>
          {footer?footer: <h2> Footer </h2>}
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Modal