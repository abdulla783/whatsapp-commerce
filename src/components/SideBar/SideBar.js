import React from 'react'
import Link from 'next/link'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Package2Icon } from '@/utils/utils'
import Verified from '../Badge/Verified'

function SideBar() {
    return (
        <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-white-800/40">
            <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-[60px] items-center border-b px-6">
                    <Link className="flex items-center gap-2 font-semibold" href="#">
                        <Package2Icon className="h-6 w-6" />
                        <span className="">Urban Tread Store</span>
                        <Verified />
                    </Link>
                </div>
                <div className="flex-1 overflow-auto py-2">
                    <div className="px-4">
                        <Avatar className="w-24 h-24 mx-auto">
                            <AvatarImage alt="User avatar" src="/images/logo.png" />
                        </Avatar>
                        <p>Total Views: <span className='text-blue'>3.5k</span></p>
                        <b>About Us:</b>
                        <br />
                        <small>lorem ipsum</small>
                        <h2 className="text-lg font-bold mt-4">Abdulla Ansari</h2>
                        <p className="text-sm text-gray-500">Gonda, Uttar Pradesh, India</p>
                        <p className="text-sm text-gray-500 mt-2">urbantread1@gmail.com</p>
                        <p className="text-sm text-gray-500">+91 8795056567</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar