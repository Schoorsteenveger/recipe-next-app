import { faAdd, faArrowDown, faSearch } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
	return (
		<nav className='container sm:max-w-7xl flex justify-between max-md:flex-col gap-2 items-center bg-slate-800 px-4 py-3 shadow-3xl'>
			<div className='flex flex-center items-center gap-2'>
				<Link
					className='bg-orange-400 p-2 rounded-[4px] focus:outline-none focus:shadow-outline hover:bg-orange-500 transition-all 1s ease-in-out'
					href={'/'}>
					<FontAwesomeIcon className='icon' icon={faArrowDown} />
					Pasta Recipe
				</Link>

				<Link className='bg-white p-2 rounded-[4px]' href={'/RecipePage/new'}>
					<FontAwesomeIcon className='icon' icon={faAdd} />
					Add Recipe
				</Link>
			</div>

			<div className='flex gap-2'>
				<div className='relative flex items-center'>
					<FontAwesomeIcon className='icon absolute left-0' icon={faSearch} />
					<input
						type='search'
						name='search'
						id='search'
						className='h-full w-full'
					/>
				</div>

				<Link className='bg-green-200 p-2 rounded-[4px]' href={'/'}>
					Login
				</Link>
				<Link className='bg-white p-2 rounded-[4px]' href={'/'}>
					Create account
				</Link>
			</div>
		</nav>
	)
}
export default Navbar
