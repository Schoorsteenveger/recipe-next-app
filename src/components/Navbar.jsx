import Link from 'next/link'

const Navbar = () => {
	return (
		<nav className='flex justify-between items-center bg-slate-800 px-8 py-3 shadow-3xl'>
			<Link
				className='bg-orange-400 font-bold p-2 rounded-[4px] focus:outline-none focus:shadow-outline hover:bg-orange-500 transition-all 1s ease-in-out'
				href={'/'}>
				Pasta Recipe
			</Link>
			<Link className='bg-white p-2 rounded-[4px]' href={'/add-recipe'}>
				Add Recipe
			</Link>
		</nav>
	)
}
export default Navbar
