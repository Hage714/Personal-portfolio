import React from 'react'
import NavLink from './NavLink'

const MenuOverlay = ({ links }) => {
    return (
        <ul className='flex flex-col py-4 items-center'>
            {links.map((link, index) => (
                <li key={index} className='mb-2'>
                    <a href={link.path} className='text-black hover:text-blue-900'>
                        {link.title}
                    </a>
                </li>
            ))}

        </ul>
    )
}

export default MenuOverlay
