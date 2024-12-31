import React from 'react'
import './CustomTabs.css'
import { useState } from 'react'


function CustomTabs( { tabsContent } ) {

    const [ activeTab, setActiveTab ] = React.useState( 0)

    function handleClick( ind ) {
        setActiveTab( ind )
    }


  return (
    <div className='main'>
        <div className='heading'>

            { 
            tabsContent.map( ( tab, index ) => {
                return <label key={index} onClick={ () => handleClick( index ) } > {tab.label} </label>
            })  }
        </div>

        <div className="content" > 
            { tabsContent[ activeTab ] && tabsContent[ activeTab ].content }
        </div>

    </div>
  )
}

export default CustomTabs