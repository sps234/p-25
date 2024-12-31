import React, { useEffect } from 'react'
import data from './data'
import './Scroll_Indicator.css'

// 24/09/24 , 23:35pm

function Scroll_Indicator() {

    const [scroll, setScroll] = React.useState(0)

    const ht1 = document.body.scrollHeight
    const ht2 = window.innerHeight
    const totalHeight = ht1 - ht2

    useEffect(() => {
        const progressBar = document.getElementById('progressBar')
        
        window.onscroll = () => {
            const yht = window.scrollY
            const progress = ( yht / totalHeight ) * 100
            console.log( yht );
            progressBar.value = progress
            setScroll(progress)            
        }
    }
    , [scroll])


  return (
    <>

            <progress value="40" max="100" id="progressBar"> </progress>


            <div className='movie'> 
                
                { data && data.length > 0 ?
                    data.map( (item, index) => {
                        return <p key={index}> {item} </p>
                    })
                    : null
                }


            </div>
    </>
  )
}

export default Scroll_Indicator

// 24/09/24, 00:25am