import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Random_Color_Generator from "./components/Random-Color-Generator/Random_Color_Generator";
import Accordian from "./components/Accordian/Accordian";
import StarRating from "./components/StarRating/StarRating";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import LoadMore from "./components/LoadMore/LoadMore";
import TreeView from './components/TreeView/TreeView';
import data from './components/TreeView/data';
import Scroll_Indicator from './components/Scroll-Indicator/Scroll_Indicator';
import CustomMain from './components/Custom-Tabs/CustomMain';
import Home from './components/Home/Home';
import Modal_Main from './components/Modal-Popup/Modal_Main';
import Profile from './components/Github-Profile-Finder/Profile';
import Feature_Flag from './components/Feature-Flag/Feature_Flag';

import './App.css';
import './index.css';
import Search_Autocomplete from './components/Search-Autocomplete-With-Api/Search_Autocomplete';
import FeatureFlagGlobalState from './components/Feature-Flag/context/context';
import Custom_UseFetch from './components/Use-Fetch/Custom_UseFetch';
import Use_OnclickOutside from './components/UseOnclickOutside/Use_OnclickOutside';
import Use_Responsive from './components/Use-Responsive/Use_Responsive';
import Scroll from './components/Scroll-To-Top-And-Bottom/Scroll';
import Scroll_Section from './components/Scroll-To-Section/Scroll_Section';


function App() {
  return (
    <>

      <div className="App">
        
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path="/rcg" element={<Random_Color_Generator />} />
          <Route path="/accordian" element={<Accordian />} />
          <Route path="/star-rating" element={<StarRating noOfStars={10} />} />
          <Route path="/image-slider" element={<ImageSlider url={"https://picsum.photos/v2/list"} page={"2"} limit={"10"} />} />
          <Route path="/load-more" element={<LoadMore />} />
          <Route path="/tree-view" element={ <TreeView menus={ data }/> } />
          <Route path= "/scroll-indicator" element={ <Scroll_Indicator/> } />
          <Route path="/custom-tabs" element={ <CustomMain /> } />
          <Route path="/modal-popup" element={ <Modal_Main /> } />
          <Route path="/github-profile" element={ <Profile/>} />
          <Route path="/search" element={ <Search_Autocomplete /> } />
          <Route path="/feature-flag" element= { 
          <FeatureFlagGlobalState>
            <Feature_Flag/>
          </FeatureFlagGlobalState>
          } />
          
          <Route path="/use-fetch" element= {  <Custom_UseFetch/> } />

          <Route path="/use-OnclickOutside" element= { <Use_OnclickOutside/> } />

          <Route path="/use-windowResize" element= { <Use_Responsive/>} />

          <Route path="/scroll" element= { <Scroll/>  } />

          <Route path="/scroll-section" element= { <Scroll_Section/>  } />

          {/* <Route path="" element= {  {}} /> */}
        </Routes>

        {/* <FeatureFlagGlobalState>
            <Feature_Flag/>
        </FeatureFlagGlobalState> */}
      </div>
    
    </>
  );
}

export default App;