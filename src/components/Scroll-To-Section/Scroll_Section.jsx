import React from 'react'
import { useRef } from 'react';

function Scroll_Section() {

    const data = [
        {
          label: "First Card",
          style: {
            width: "100%",
            height: "600px",
            background: "red",
          },
        },
        {
          label: "Second Card",
          style: {
            width: "100%",
            height: "600px",
            background: "grey",
          },
        },
        {
          label: "Third Card",
          style: {
            width: "100%",
            height: "600px",
            background: "blue",
          },
        },
        {
          label: "Fourth Card",
          style: {
            width: "100%",
            height: "600px",
            background: "green",
          },
        },
        {
          label: "Fifth Card",
          style: {
            width: "100%",
            height: "600px",
            background: "orange",
          },
        },
      ];


    const curRef = useRef( null );

    function handleScrollToSection() {

        let pos = curRef.current.getBoundingClientRect().top;

        window.scrollTo(
            {top : pos,
            left: 0,
            behavior: 'instant'}
        )

    }




  return (
    <>
    <h1>
    Scroll To Section
    </h1>

    <button onClick={ () => handleScrollToSection() }>  Scroll To Particular Section</button>

    <div>
    {
        data && data.length ? 
        data.map( ( card, index ) => {
            return (
                <div key={ index } style={ card.style } ref={ index == 4 ? curRef : null  } >
                <h1> { card.label } </h1>
                </div>
            )
        })
        : null
    }

    </div>
    
    </>
  )
}

export default Scroll_Section