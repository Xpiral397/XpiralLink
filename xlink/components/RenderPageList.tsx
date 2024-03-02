import React from 'react'
import {ImageAvatar, PageList} from './Sidebar'
import {Verified} from '@mui/icons-material'

function RenderPageLogo({avatar}: {avatar: ImageAvatar}) {
    return (
        <div className={
            `font-[600] text-[10px] w-8 h-7 flex items-center justify-center text-center  ${avatar.customebg ? avatar.bg : `bg-[${avatar.bg}]`}  ${avatar.border ? "rounded-sm" : ""} ${avatar.customColor ? avatar.color : `text-[${avatar.color}]`}`}>
            {
                avatar.logo == null ? <h1 className=' w-full'>{avatar.name}</h1> : <img alt={avatar.name} src={avatar.logo} className='w-5 h-5' />
            }
        </div>

    )
}
export default function RenderPageList({pages}: {pages: PageList[]}) {
    return (
        <ul className="flex flex-col items-center space-y-3 md:space-y-5">
            {
                pages.map(
                    (page, index) => {
                        return (
                            <li key={index} className='w-full space-x-3 flex justify-center items-center' >
                                {
                                    <RenderPageLogo avatar={page.image} />
                                }

                                < div className='flex w-full spaxe-x-5 items-center ' >
                                    <h1 className='font-[Arial] dark:text-slate-300 text-slate-900 text-[12px] font-[700] truncate'>{page.name}</h1>
                                    {page.verified && <Verified className='text-blue-600 h-3 w-3 mx-1' />}
                                </div>
                            </li >
                        )
                    }
                )
            }
        </ul>


    )
}
