import React, { useState, useCallback } from "react";
import "./Tabs.css";
function Tabs({ children }) {
  const initialTab = children[0].props.label
  const [activeTab, setActiveTab] = useState(initialTab)
  const handleActiveTab = useCallback(label => setActiveTab(label), [])
  const tabsliststyle = {
        display: "flex",
        listStyle: 'none',
        padding: 0,
        "overflowX": "scroll",
        MsOverflowStyle:"none",
        scrollbarWidth:'none',
        '&::WebkitScrollbar': {display: 'none'},
        justifyContent: "left"}
    
  const tabs = children.map(child => (
    <li>
      <button
      onClick={e => {
        e.preventDefault();
        handleActiveTab(child.props.label);
      }}
      className={
        child.props.label === activeTab
          ? ["tabs__tab", "tabs__tab-active"].join(" ")
          : "tabs__tab"
      }
      key={child.props.label}
    >
      {child.props.tabName}
    </button></li>
  ))
  
  const tabContent = children.filter(child => child.props.label === activeTab)

  return (
    <div>
      <div className="tabs__box"><ul style={tabsliststyle}>{tabs}</ul></div>
      <div>{tabContent}</div>
    </div>
  )
}

function Tab(props) {
	return <>{props.children}</>
}

export { Tabs, Tab }