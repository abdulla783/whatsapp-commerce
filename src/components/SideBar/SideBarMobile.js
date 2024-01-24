import React from 'react';
import Link from 'next/link';
import { Avatar, AvatarImage } from '../ui/avatar';
import { Package2Icon } from '@/utils/utils';
import Verified from '../Badge/Verified';

function SideBarMobile() {
  return (
    <div className="lg:hidden">
      {/* Mobile Sidebar Content */}
      <div className="flex justify-between items-center bg-gray-100/40 border-b p-4">
        <Link href="#" passHref>
          <div className="flex items-center gap-2 font-semibold">
            <Package2Icon className="h-6 w-6" />
            <span className="">Urban Tread Store</span>
            <Verified />
          </div>
        </Link>
      </div>
      <div className="p-4">
        <Avatar className="w-24 h-24 mx-auto">
          <AvatarImage alt="User avatar" src="/images/logo.png" />
        </Avatar>
        <h2 className="text-lg font-bold mt-4">Abdulla Ansari</h2>
        <p className="text-sm text-gray-500">Gonda, Uttar Pradesh, India</p>
        <p className="text-sm text-gray-500 mt-2">urbantread1@gmail.com</p>
        <p className="text-sm text-gray-500">+91 8795056567</p>
      </div>
    </div>
  );
}

export default SideBarMobile;
