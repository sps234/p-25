import React from 'react'
import { useContext } from 'react'
import { FeatureFlagContext } from './context/context'
import Random_Color_Generator from '../Random-Color-Generator/Random_Color_Generator'
import Accordian from '../Accordian/Accordian'
import ImageSlider from '../ImageSlider/ImageSlider'
import LoadMore from '../LoadMore/LoadMore'


function Feature_Flag() {

  const { loading, enabledFlags } = useContext( FeatureFlagContext );

  const componentsToRender = [
    {
      key : 'showRandomColor',
      component : <Random_Color_Generator />
    },
    {
      key : 'showAccordian',
      component : <Accordian />
    },
    {
      key : 'showImageSlider',
      component : <ImageSlider url={"https://picsum.photos/v2/list"} page={"2"} limit={"10"} />
    },
    {
      key : 'showLoadMore',
      component : <LoadMore />
    }
  ]

  if ( loading ) {
    return <div>Loading...</div>
  }

  function checkEnabled( key ) {
    return enabledFlags[key];
  }

  return (
    <div>
      <h1>Feature_Flag</h1>
      {
        componentsToRender.map( (componentItem) => checkEnabled( componentItem.key ) ? componentItem.component : null   )
      }
    </div>
  )
}

export default Feature_Flag;
