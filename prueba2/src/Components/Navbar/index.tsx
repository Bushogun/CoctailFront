import { NavLink } from 'react-router-dom'
import { SearchBarForm } from './search-bar-form'

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-normal bg-slate-600'>
            <ul className='flex items-center gap-3'>
                <li className='font-bold text-lg'>
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
                    <NavLink to='/'>
                        {/* <SearchBarForm /> */}
                    </NavLink>
                </li>
            </ul>

            <ul className='flex items-center gap-3'>
                <li>
                    sotto_j@hotmail.com
                </li>
            </ul>
        </nav>
    )
}

export default Navbar