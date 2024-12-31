import React, { useState } from 'react'
import MenuList from './MenuList'
import {FaMinus, FaPlus} from 'react-icons/fa'
import "./TreeView.css"

function MenuItem( { item }) {

    const [ disCurChild, setDisCurChild  ] = useState( {} )

    function handleClick ( getCur ) {
        setDisCurChild( { ...disCurChild, [getCur] : !disCurChild[getCur] } )
    }

    console.log( disCurChild );

  return (
    <li>
        <div className="menu-item" >
        <p> {item.label}</p>
        {
            item && item.children && item.children.length ? 
            <span onClick={ ()=> handleClick(item.label)}>

                {
                    disCurChild[item.label] ? <FaMinus color="#fff" size={20} /> : <FaPlus color="#fff" size={20} />
                }
            
            </span> 
            : null 
        }
        
        </div>
        { item && item.children && item.children.length > 0 && disCurChild[item.label] ? 
         <MenuList list= { item.children }/>
        :null
        }
    </li>
  )
}

export default MenuItem