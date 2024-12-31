import { useRef } from "react";
import { useState } from "react";
import useOnClickOutside from "./useOnClickOutside";


function Use_OnClickOutside() {

    const [ showContent, setShowContent ] = useState(false);

    const ref = useRef();
    useOnClickOutside( ref, () => setShowContent( false ) );


  return (
    <>
      {
        showContent ? 
        <div ref={ref}>
            <h1> This is some Random Component </h1>
            <p>Please Click outside of this to close this. If you click inside it won't get close.</p>
        </div> 
        : <button onClick={ ()=> setShowContent( true ) }> Show Content </button>
      }
    </>
  )
}

export default Use_OnClickOutside;