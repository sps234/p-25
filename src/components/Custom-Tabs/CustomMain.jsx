import React from 'react'
import './CustomTabs.css'
import CustomTabs from './CustomTabs';

// 24/09/24, 1:45am

function RandomComponent() {

  return (
    <div>Random Component</div>
  )
}

function CustomMain() {

  const tabs = [
    {
      label: "Tab 1",
      content: <div>This is content for Tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>This is content for Tab 2</div>,
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ];


  return (
    <CustomTabs tabsContent={tabs} />
  )
}

export default CustomMain


// 24/09/24, 2:25am