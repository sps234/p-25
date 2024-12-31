import React from 'react'
import useFetch from '../Use-Fetch/useFetch';
import { useRef } from 'react';

function Scroll() {

    const {data, error, pending} = useFetch( `https://dummyjson.com/quotes?limit=100` , {} );

    console.log( error, pending, data);

    // function handleBottom() {
    //     window.scrollTo(0, document.body.scrollHeight);        
    // }

    function handleTop() {
        // window.scrollTo(0, 0);
        window.scrollTo( {
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }

    const bottomRef = useRef( null );

    function handleScrollToBottom() {
        bottomRef.current.scrollIntoView( { behavior: 'instant' } );        
    }
    

  return (
    <>
    
    <div>
        <h1>
        Scroll To Top And Bottom
        </h1>
        <br />
        
        <div>
        <button onClick={ ()=> handleScrollToBottom() }> Scroll To Bottom </button>

        {
            data && data.quotes && data.quotes.length ? 
            data.quotes.map( quote => 
                <div>
                <br />
                <p key={ quote.id } > { quote.quote }</p>
                </div>
            )
            : null
        }

        <br />
        <button onClick = { handleTop } ref={ bottomRef }> Scroll To Top </button>
        </div>
    </div>
    </>
  )
}

export default Scroll