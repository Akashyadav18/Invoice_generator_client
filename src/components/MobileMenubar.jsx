import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const links = [
    {id:1, title: "Home", url:'/'},
    {id:2, title: "Dashboard", url:'/dashboard'},
    {id:3, title: "Preview", url:'/preview'},
    {id:4, title: "Login/Signup", url:'/'},
]

const MobileMenubar = () => {

    const [open, setOpen] = useState(false);

    return (
         <div>
            <img
                src={open ? "/close.png" : "/open.png"}
                alt=""
                width={20}
                height={20}
                onClick={() => setOpen(!open)}
                className="cursor-pointer"
            />
            {open && (
                <div className="bg-white/30 backdrop-blur-md text-black absolute left-0 top-20 w-full h-[calc(100vh-5rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
                    {links.map((item) => (
                        <Link key={item.id} to={item.url} onClick={() => setOpen(false)}>
                            {item.title}
                        </Link>
                        
                    ))}
                </div>
            )}
        </div>
    )
}

export default MobileMenubar
