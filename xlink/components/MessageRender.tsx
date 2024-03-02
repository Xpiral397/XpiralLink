'use client'
import {ConversationPallets, Filter, Friends, Messages, generateRandomFriendsSampleData, generateRandomMessagesSampleData} from '@/testing/generate'
import {ScrollShadow, User} from '@nextui-org/react'
import Link from 'next/link'
import React, {ReactNode, useEffect, useState} from 'react'
import {JsxElement} from 'typescript'
import {v4 as uuidv4} from 'uuid'



interface User {
    id: string
    name: string
    online: boolean
    verified: boolean
}
function getBody(input: any, key: string) {
    console.log(input[key].message.message, 'fuck')
    return input[key].message.message
}

function getLastConversation(message: Messages[], userId: string) {
    const Message = message.filter((message) => message.userId == userId)


    const singleMesage: ConversationPallets = Message[0]?.messages;
    let mesage = singleMesage[singleMesage.length - 1]
    console.log([[Object.keys(mesage)[0], Object.values(mesage)[0]]], userId, 'debg::0x1')

    return [[Object.keys(mesage)[0], mesage] as any]

}

export default function MessageRender({sortBy}: {sortBy: Filter}) {
    const [messagePallets, SetMessagePallets] = useState<Messages[]>(generateRandomMessagesSampleData());
    const [user, setUser] = useState<User>()
    const [loading, setLoading] = useState<boolean>(false);
    const [friends, setFreinds] = useState<Friends[]>(generateRandomFriendsSampleData())
    const sortedFriends = () => {
        return friends.filter(friends => friends.relation == sortBy)
    };

    return (
        <ScrollShadow className="max-w-full w-full" hideScrollBar orientation="vertical">
            <ul className="flex flex-col w-full items-center justify-center px-1 space-y-5">
                {sortedFriends().map((user, id) => (

                    <div key={id} className='w-full h-full '>
                        {
                            (() => {

                                const message = getLastConversation(messagePallets, user?.id ?? '')
                                if(message.length == 0) {
                                    return <User
                                        name={user.name}
                                        description={
                                            <Link href={`https://twitter.com/${user.name}`} size="sm" isExternal>
                                                {user.online ? 'Online' : 'Offline'}
                                            </Link>
                                        }
                                        avatarProps={{
                                            src: user.image,
                                            className: 'w-10 h-10 object-[cover]',
                                        }}
                                        classNames={{
                                            'name': 'font-[750] text-red-700 font[Arial] truncate max-w-full '
                                        }}
                                    />
                                }
                                else {
                                    return message.map(
                                        (message: any, index: number) => {
                                            if(message[0] == 'Sender') {
                                                return <li key={index} className='w-full flex items-center justify-between'>
                                                    <User
                                                        name={user.name}
                                                        description={
                                                            <Link href={`https://twitter.com/${user.name}`} size="sm" isExternal>
                                                                {user.online ? 'Online' : 'Offline'}
                                                            </Link>
                                                        }
                                                        avatarProps={{
                                                            src: user.image,
                                                            className: 'w-10 h-10 object-[cover]',
                                                        }}
                                                        classNames={{
                                                            'name': 'font-[750] text-slate-700 font[Arial] truncate max-w-full '
                                                        }}
                                                    />
                                                </li>

                                            }
                                            else if(message[0] == 'Receiver') {
                                                return <li key={index} className='w-full flex items-center justify-between'>
                                                    <User
                                                        name={user.name}
                                                        description={

                                                            <h1 className='truncate max-w-full'>{getBody(message[1], message[0])}</h1>

                                                        }
                                                        avatarProps={{
                                                            src: user.image,
                                                            className: 'w-10 h-10 object-[cover]',
                                                        }}
                                                        classNames={{
                                                            'wrapper': 'w-full',
                                                            'name': 'font-[750] text-slate-700 font[Arial] truncate max-w-full '
                                                        }}
                                                    />
                                                    <div className='flex flex-col justify-end w-full'>
                                                        <h1 className='text-sm text-green-500 text-[10px]'>Yesterday</h1>
                                                        <div className='text-[10px] bg-green-400 rounded-full w-4 font-[700] h-4 flex items-center justify-center text-end mx-5'>2</div>
                                                    </div>
                                                </li>

                                            }
                                            else {
                                                return <h1 key={index}>No Message Found</h1>
                                            }
                                        }
                                    )
                                }
                            })()
                        }
                    </div>

                ))}
            </ul>
        </ScrollShadow >
    );
}
