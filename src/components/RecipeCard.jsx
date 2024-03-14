import Link from 'next/link'
import RemoveButton from './RemoveButton'
import { HiPencilAlt } from 'react-icons/hi'
import Image from 'next/image'
import { FaHeart } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faClock,
	faPastafarianism,
	faPeopleGroup,
} from '@fortawesome/free-solid-svg-icons'
import RatingDisplay from './RatingDisplay'

const MockrecipeData = [
	{
		id: 1,
		title: 'Recipe 1',
		description:
			'Cat 1 is a playful and energetic feline who loves to explore and chase toys around the house.',
		imgSrc:
			'https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
	},
	{
		id: 2,
		title: 'Recipe 2',
		description:
			'Cat 2 is a calm and affectionate furry friend who enjoys lounging in cozy spots and getting cuddles.',
		imgSrc:
			'https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
	},
	{
		id: 3,
		title: 'Recipe 3',
		description:
			'Cat 3 is an adventurous and curious cat who loves exploring the outdoors and climbing trees.',
		imgSrc:
			'https://images.unsplash.com/photo-1651950537598-373e4358d320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
	},
	// This is for an error image
	// {
	//   id: 4,
	//   title: "Cat 2",
	//   description:
	//     "Cat 3 is an adventurous and curious cat who loves exploring the outdoors and climbing trees.",
	//   imgSrc:
	//     "https://images.unsplash.com/photo-1651950537598-373e4358d3202?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
	// },
]

function RecipeCard() {
	return (
		<div className='relative justify-between border mx-auto mt-4 p-2 flex flex-col rounded-lg bg-stone-200'>
			<div className='w-full relative h-60 col-span-12 md:col-span-6'>
				<Link href='#'>
					<Image
						fill={true}
						loading='lazy'
						sizes='(min-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
						className='object-cover rounded-t-lg'
						src='https://images.unsplash.com/photo-1571116260185-78bf30c0cc95?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						alt='hamburger'
					/>
				</Link>
			</div>

			<div>
				<h5 className='mb-2 mt-2 fredoka text-3xl font-medium leading-tight text-neutral-800 dark:text-neutral-900'>
					Recipe title
				</h5>
				<p className='mb-4 text-base text-neutral-900 dark:text-neutral-900'>
					This is a wider card with supporting text below as a natural lead-in
					to additional content.
				</p>
			</div>
			<div>
				<p className='text-xs my-1'>12/03/24 16:42</p>
			</div>

			<div className='flex justify-between mt-4 mb-4 text-gray-500'>
				<div className='flex items-center'>
					<FontAwesomeIcon icon={faClock} />
					<span className='ml-1 lg:text-xl'>30m</span>
				</div>
				<div className='flex items-center'>
					<FontAwesomeIcon icon={faPastafarianism} />
					<span className='ml-1 lg:text-xl'>10</span>
				</div>
				<div className='flex items-center'>
					<FontAwesomeIcon icon={faPeopleGroup} />
					<span className='ml-1 lg:text-xl'>1-2</span>
				</div>
			</div>
			<div>
				<RatingDisplay />
			</div>

			<div>
				<button className='text-white bg-green-400 p-4 rounded-md w-full uppercase'>
					View Recipe
				</button>
			</div>

			<div className='absolute p-2'>
				<FaHeart className='text-lg cursor-pointer text-amber-600 hover:text-amber-400' />
			</div>

			<div className='absolute top-0 right-0 mt-4 mr-4 bg-green-400 text-white rounded-full pt-1 pb-1 pl-4 pr-5 text-xs uppercase'>
				<span>Vegan</span>
			</div>

			<div className='flex justify-between my-2 gap-2'>
				<RemoveButton />
				<Link href={'/editRecipe/123'}>
					<HiPencilAlt size={28} className=' hover:text-neutral-400' />
				</Link>
			</div>
		</div>
	)
}

export default RecipeCard
