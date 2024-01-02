import React, { useState } from 'react';
import './tabs.css'


export function Tab({ children }) {
    return <>{children}</>;
}

function Tabs({ children }) {
    const [activeTab, setActiveTab] = useState(children[0].props.label);

    const handleClick = (e, newActiveTab) => {
        e.preventDefault();
        setActiveTab(newActiveTab);
    };

    return (
        <div>
            <ul className="tab-list">
                {children.map((tab) => (
                    <li
                        key={tab.props.label}
                        className={tab.props.label === activeTab ? "active" : ""}
                    >
                        <a href="#" onClick={(e) => handleClick(e, tab.props.label)}>
                            {tab.props.icon}
                            <p className='tab-label'>{tab.props.label}</p>
                        </a>
                    </li>
                ))}
            </ul>
            <div className="tab-content">
                {children.map((one) => {
                    if (one.props.label !== activeTab) return undefined;
                    return one.props.children;
                })}
            </div>
        </div>
    );
}

export default Tabs;