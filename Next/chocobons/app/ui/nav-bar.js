'use client'

import NavLink from '@/app/ui/nav-link'
import { ArrowRightStartOnRectangleIcon, ArrowsRightLeftIcon, HomeIcon, MagnifyingGlassIcon, PlusCircleIcon, UserIcon } 
from '@heroicons/react/24/solid'


export default () => {
    
    return (
        <nav className="flex flex-col gap-4 h-dvh border-e p-4 pr-8 fixed bg-gradient-to-tr from-orange-200 via-orange-200 to-amber-200 dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-700" >
            <p className='hidden sm:block text-xl italic'>Chocobons</p>
            
            <NavLink ruta="/" texto="Home" icon={ HomeIcon }></NavLink>
            <NavLink ruta="/search" texto="Search" icon={MagnifyingGlassIcon}></NavLink>
            <NavLink ruta="/create" texto="Create" icon={PlusCircleIcon}></NavLink>
            <NavLink ruta="/profile" texto="Profile" icon={UserIcon}></NavLink>

            <a href="/auth/logout" className='flex gap-2 mt-8'><ArrowRightStartOnRectangleIcon className='w-4'/>Sign out</a>
        </nav>
    )

}