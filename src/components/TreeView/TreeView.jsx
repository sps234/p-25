import React from 'react'
import "./TreeView.css"
import MenuList from './MenuList'

// 21/09/24, 20:17pm

function TreeView( { menus = [] } ) {

  return (
    <>
        <div className='tree-view-container' >
        <MenuList list={ menus }/>
        </div>
        </>
  )
}

export default TreeView


// 22/09/24, 01:40 pm