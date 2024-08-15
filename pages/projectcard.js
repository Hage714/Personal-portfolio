import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
    return (
        <div>
            <div style={{ background: `url(${imgUrl})` }} className="bg-cover bg-center h-52 md:h-72 rounded-t-xl relative group">
                <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-slate-400 bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-70 transition-all duration-500'>
                    <Link href={gitUrl} target="_blank" rel="noopener noreferrer" className='h-14 w-14 mr-2 border-2 relative rounded-full border-white hover:border-slate-700 flex items-center justify-center group/link'>
                        <CodeBracketIcon className='h-10 w-10 text-white group-hover/link:text-black cursor-pointer' />
                    </Link>
                    <Link href={previewUrl} className='h-14 w-14 border-2 relative rounded-full border-white hover:border-slate-700 flex items-center justify-center group/link'>
                        <EyeIcon className='h-10 w-10 text-white group-hover/link:text-black cursor-pointer' />
                    </Link>
                </div>

            </div>
            <div className='text-black rounded-b-xl mt-3 bg-slate-200 px-4 pb-3'>
                <h5 className="text-xl font-semibold mb-2">{title}</h5>
                <p className='text-black'>{description}</p>
            </div>
        </div>
    )
}

export default ProjectCard
