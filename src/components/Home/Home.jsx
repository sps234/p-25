import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>

        <ul className='text-center text-xl font-medium mt-5'>
        <li> <Link to='/' > Home </Link> </li>
        <li> <Link to='/rcg' > Random Color Generator </Link> </li>
        <li> <Link to='/accordian' > Accordian </Link> </li>
        <li> <Link to='/star-rating' > Star Rating </Link> </li>
        <li> <Link to='/image-slider' > Image Slider </Link> </li>
        <li> <Link to='/tree-view' >Tree View </Link> </li>
        <li> <Link to='/load-more' > Load More </Link> </li>
        <li> <Link to='/scroll-indicator' > Scroll Indicator </Link> </li>
        <li> <Link to='/custom-tabs' > Custom tabs </Link>  </li>
        <li> <Link to='/modal-popup' >Custom Model Popup </Link> </li>
        <li> <Link to='/github-profile' >Github Profile</Link> </li>
        <li> <Link to='/search' >Search Autocomplete</Link> </li>


        {/* 02:11am - 06/12/24  */}
        <li> <Link to='/feature-flag' >Feature Flag</Link> </li>
        {/* 17:35 - 18:19pm, 13/12/2024 */}


        {/* 18:55pm , 13/12/2024 */}
        <li> <Link to='/use-fetch' >Use Fetch </Link> </li>
        {/* 18:55pm , 13/12/2024 */}


        {/* 19:05pm, 13/12/24 */}
        <li> <Link to='/use-OnclickOutside' >  Use OnclickOutside</Link> </li>
        {/* 19:30pm, 13/12/24 */}


        {/* 19:35pm, 13/12/24 */}
        <li> <Link to='/use-windowResize' > Use Responsive </Link> </li>
        {/* 19:46pm, 13/12/24 */}


        {/* 20:05pm, 13/12/24 */}
        <li> <Link to='/scroll' > Scroll To Top And Bottom </Link> </li>
        {/* 20:25pm, 13/12/24 */}


        {/* 20:33pm, 13/12/24 */}
        <li> <Link to='/scroll-section' > Scroll To Section </Link> </li>
        {/* 20:45pm, 13/12/24 */}



        {/* <li> <Link to='' ></Link> </li> */}
        </ul>
    </div>
  )
}

export default Home