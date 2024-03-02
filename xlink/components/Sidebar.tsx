
"use client"
import {EventAvailableOutlined, Home, HomeOutlined, HomeTwoTone, Movie, MovieCreation, PeopleAltOutlined, PhotoLibrary, ShoppingBagOutlined, ShoppingCartOutlined, Verified, YouTube} from '@mui/icons-material'
import {Button, Divider, ScrollShadow, User} from '@nextui-org/react'
import Link from 'next/link'
import React, {ReactNode, useState} from 'react'
import RenderPageList from './RenderPageList'

type Features = 'Feed' | 'Friends' | 'Event' | 'Watch Video' | 'Photo' | 'Marketplace' | 'Files'

export interface ImageAvatar {
    name: string
    color: string
    bg: string
    logo: string | null
    border: boolean
    customColor: boolean
    customebg: boolean

}
export interface PageList {
    image: ImageAvatar
    verified: boolean
    name: string

}
export default function Sidebar() {
    const [selected, select] = useState<Features>('Feed')
    const [Page, setPage] = useState<PageList[]>(
        [
            {
                image: {
                    name: 'UX',
                    color: 'text-white',
                    bg: 'bg-blue-500',
                    border: true,
                    logo: null,
                    customColor: true,
                    customebg: true,
                },

                verified: true,
                name: 'UI/UX Community'
            },
            {
                image: {
                    name: 'Wd',
                    color: 'text-slate-100',
                    bg: 'bg-slate-500',
                    border: true,
                    logo: null,
                    customColor: true,
                    customebg: true,
                },

                verified: false,
                name: 'Web Designer'
            },
            {
                image: {
                    name: 'UX',
                    color: 'bg-white',
                    bg: 'bg-dager-300',
                    border: true,
                    logo: 'https://cdn.freebiesupply.com/logos/large/2x/dribbble-icon-1-logo-svg-vector.svg',
                    customColor: true,
                    customebg: true,
                },

                verified: true,
                name: 'Dribble Community'
            },
            {
                image: {
                    name: 'Be',
                    color: 'text-white',
                    bg: 'bg-blue-500',
                    border: true,
                    logo: null,
                    customColor: true,
                    customebg: true,
                },

                verified: true,
                name: 'Behance'
            }
        ]
    )
    return (
        <div className='px-2 w-[300px] h-full flex flex-col items-center space-y-3  '>
            <div className='dark:bg-slate-900 bg-white  px-2 py-2 rounded-md shadow-2xl rounded-md  w-full h-[200px]'>
                <div className='flex  flex-col py-2 px-3 w-full dark:bg-slate-800 bg-neutral-100 h-full'>
                    <div className='flex items-center space-x-2 dark:text-slate-100'>
                        <User
                            name="Junior Garcia"
                            description={(
                                <Link href="https://twitter.com/jrgarciadev" size="sm" isExternal>
                                    @jrgarciadev
                                </Link>
                            )}
                            avatarProps={{
                                src: "https://avatars.githubusercontent.com/u/30373425?v=4"
                            }}

                        />
                        <Verified className='dark:text-amber-500 text-blue-600 h-5 w-5' />
                    </div>
                    <div className='flex mt-5 justify-between w-full'>
                        <div className='text-[12px]  font-[500] text-center '>
                            <h1 className='text-bold '>2.3k</h1>
                            <h1 className=''>Followed</h1>
                        </div>

                        <div className='text-[12px]  font-[500] text-center '>
                            <h1 className='text-bold '>232</h1>
                            <h1 className='font-[600]'>Following</h1>
                        </div>

                        <div className='text-[12px]  font-[500] text-center '>
                            <h1 className='text-bold'>89</h1>
                            <h1 className=''>Post</h1>
                        </div>


                    </div>
                </div>
            </div>
            <ScrollShadow orientation='vertical' hideScrollBar className='max-h-full overflow-scroll bg-white dark:bg-slate-900 shadow-2xl w-full h-full rounded-md flex flex-col justify-between  '>
                <ul className='px-2 py-2 md:space-y-3'>
                    <li>
                        <Button startContent={<HomeOutlined className='w-5 hover:text-white' />} onClick={() => {select('Feed')}} className={`w-full rounded-md ${selected == 'Feed' ? 'dark:bg-purple-700 bg-blue-500 text-white' : "bg-white dark:bg-slate-900 text-slate-500"} text-start font-[500]`}>
                            <Link href={"/"} className='w-full text-inherit '>Feed</Link>
                        </Button>
                    </li>
                    <li>
                        <Button startContent={<PeopleAltOutlined className='w-5 hover:text-white' />} onClick={() => {select('Friends')}} className={`w-full rounded-md ${selected == 'Friends' ? 'dark:bg-purple-700 bg-blue-500 text-white' : "bg-white dark:bg-slate-900 text-slate-500"} text-start font-[500]`}>
                            <Link href={"/Feed"} className='w-full text-inherit '>Friends</Link>
                        </Button>
                    </li>
                    <li>
                        <Button startContent={<EventAvailableOutlined className='w-5 hover:text-white' />} onClick={() => {select('Event')}} className={`w-full rounded-md ${selected == 'Event' ? 'dark:bg-purple-700 bg-blue-500 text-white' : "bg-white dark:bg-slate-900 text-slate-500"} text-start font-[500]`}>
                            <Link href={"/Feed"} className='w-full text-inherit '>
                                <div className='w-full flex justify-between items-center  '>
                                    <h1>Event</h1>
                                    <div className='bg-red-500 text-[10px] font-bold text-white w-[20px] h-[20px] flex justify-center items-center  rounded-full '>10</div>
                                </div>
                            </Link>
                        </Button>
                    </li>
                    <li>
                        <Button startContent={<YouTube className='w-5 hover:text-white' />} onClick={() => {select('Watch Video')}} className={`w-full rounded-md ${selected == 'Watch Video' ? 'dark:bg-purple-700 bg-blue-500 text-white' : "bg-white dark:bg-slate-900 text-slate-500"} text-start font-[500]`}>
                            <Link href={"/Feed"} className='w-full text-inherit '>Watch Video</Link>
                        </Button>
                    </li>

                    <li>
                        <Button startContent={<PhotoLibrary className='w-5 hover:text-white' />} onClick={() => {select('Photo')}} className={`w-full rounded-md ${selected == 'Photo' ? 'dark:bg-purple-700 bg-blue-500 text-white' : "bg-white dark:bg-slate-900 text-slate-500"} text-start font-[500]`}>
                            <Link href={"/Feed"} className='w-full text-inherit '>Photo</Link>
                        </Button>
                    </li>
                    <li>
                        <Button startContent={<ShoppingCartOutlined className='w-5 hover:text-white' />} onClick={() => {select('Marketplace')}} className={`w-full rounded-md ${selected == 'Marketplace' ? 'dark:bg-purple-700 bg-blue-500 text-white' : "bg-white dark:bg-slate-900 text-slate-500"} text-start font-[500]`}>
                            <Link href={"/Feed"} className='w-full text-inherit '>Marketplace</Link>
                        </Button>
                    </li>

                    <li>
                        <Button startContent={<HomeOutlined className='w-5 hover:text-white' />} onClick={() => {select('Files')}} className={`w-full rounded-md ${selected == 'Files' ? 'dark:bg-purple-700 bg-blue-500 text-white' : "bg-white dark:bg-slate-900 text-slate-500"} text-start font-[500]`}>
                            <Link href={"/Feed"} className='w-full text-inherit '>
                                <div className='w-full flex justify-between items-center  '>
                                    <h1>Files</h1>
                                    <div className='bg-purple-500 text-[10px] font-bold text-white w-[20px] h-[20px] flex justify-center items-center  rounded-full '>10</div>
                                </div>
                            </Link>
                        </Button>
                    </li>
                </ul>

                <div className='lg:-mt-5 py-3'>
                    <div className='px-2'>
                        <Divider className='px-2 border-blue-100 border-[2px] ' />
                    </div>

                    <div className='mt-5 px-2'>
                        <h1 className='font-[500] text-slate-500 px-2 text-[12px] font-[Arial,Heltivica,cursive]' >PAGES YOU LIKE</h1>
                        {/* List Out all the Like Pages  */}
                        <div className='mt-5 px-5'>
                            <RenderPageList pages={Page} />
                        </div>
                        <h1 className='mt-5 font-[700] text-slate-500 px-2 text-[12px] font-[Arial,Heltivica,cursive]' >View All</h1>
                    </div>
                </div>
            </ScrollShadow>
        </div>
    )
}
