import React from 'react'

const ProjectTag = ({ name, onClick, isSelected }) => {
    // Apply border and text color based on isSelected
    const buttonStyles = isSelected ? "border-blue-500 text-black font-bold" : "border-slate-600 text-black hover:border-white";

    return (
        <button
            className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
            onClick={() => onClick(name)}
        >
            {name}
        </button>
    )
}

export default ProjectTag;

