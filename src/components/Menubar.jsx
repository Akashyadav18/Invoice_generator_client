import { assets } from '@/assets/assets'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import MobileMenubar from './MobileMenubar'

const Menubar = () => {
    return (
        <div className=' flex justify-around items-center border-b-2 border-b-gray-300 h-20'>
            <div>
                <Link to='/' className=' flex items-center gap-2'>
                    <img src={assets.logo} className=' w-15 h-15' />
                    <span className=' font-bold text-orange-400'>QuickInvoice</span>
                </Link>
            </div>
            <div>
                <div className=' md:flex gap-8 items-center hidden font-semibold text-lg'>
                    <Link to='/'>Home</Link>
                    <Link to='/dashboard'>Dashboard</Link>
                    <Link to='/generate'>Generate</Link>
                    <div className=''>
                        <Button className=' bg-sky-600 text-white cursor-pointer text-sm'>Login/Signup</Button>
                    </div>
                </div>
                <div className=' flex md:hidden'>
                    <MobileMenubar />
                </div>
            </div>
        </div>
    )
}

export default Menubar
