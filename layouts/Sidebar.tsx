import React from 'react';
import Link from "next/link";

function Sidebar() {
    return (
        <div className='grid__sidebar sidebar'>
            <div className="sidebar__content">
                <div className="sidebar__logo">
                    <Link href={'/'} > Muriel </Link>
                </div>

                <ul className="sidebar__items">
                    <li className="sidebar__item"><Link href={'/'}>Home</Link></li>
                    <li className="sidebar__item"><Link href={'/about'}>About</Link></li>
                    <li className="sidebar__item"><Link href={'#'}>Portfolio</Link></li>
                    <li className="sidebar__item"><Link href={'#'}>Shop</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;