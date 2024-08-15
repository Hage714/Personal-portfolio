import React from 'react'

const TabButton = ({ active, selectTab, children }) => {
    const buttonClasses = active ? "text-blue-600 border-b border-blue-800" : "text-black "

    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-gray-700 ${buttonClasses}`}>
                {children}

            </p>
        </button>

    )
}

export default TabButton
