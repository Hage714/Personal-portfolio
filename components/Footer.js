import React from 'react'


const Footer = () => {
    return (
        <footer className='footer z-10 border border-t-blue-950 border-l-transparent border-b-transparent border-r-transparent text-black'>
            <div className='container flex justify-between'>
                <span className=' mt-2'>
                    <a
                        href="mailto:hagewoche99@gmail.com"
                        className="text-black font-bold mt-2 underline"
                    >
                        hagewoche99@gmail.com
                    </a></span>
                <p className='text-gray-950 mt-3 font-bold'>All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer
