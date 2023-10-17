import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-8 px-8 text-sm font-normal'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink to='/'>
                        Cocteles
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/prueba1' >
                        prueba1
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/prueba2' >
                        prueba2
                    </NavLink>
                </li>
            </ul>

            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                    sotto_j@hotmail.com
                </li>
            </ul>
        </nav>
    )
}

export default Navbar