import React, { useState } from 'react';
import '../styles/Tabs.css';

const Tabs = ({ filterCategory, tabsData }) => {
  const [selectedTab, setSelectedTab] = useState(tabsData[0]); // Initialize the selected tab

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    filterCategory(tab);
  };

  return (
    <div className="tabs-container">
      {tabsData.map((tab, index) => (
        <div
          key={index}
          className={`tab ${selectedTab === tab ? 'selected' : ''}`} // Apply 'selected' class conditionally
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
