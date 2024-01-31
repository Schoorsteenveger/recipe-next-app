import Link from 'next/link'
import RemoveButton from './RemoveButton'
import { HiPencilAlt } from 'react-icons/hi'

const RecipesList = () => {
	return (
		<>
			{/* <div classNameName='container flex justify-between gap-5 p-4 border border-slate-300 my-3 items-start'>
				<div>
					<div>
						<h2 classNameName='font-bold text-2xl'>Recipe Name</h2>
						<div>Recipe Description</div>
					</div>
				</div>
				<div classNameName='flex gap-2'>
					<RemoveButton />
					<Link href={'/editRecipe/123'}>
						<HiPencilAlt size={28} />
					</Link>
				</div>
			</div> */}
			{/* <div className='container mx-auto mt-8 p-8 bg-white rounded-lg shadow-md'>
				<h2 className='text-2xl font-semibold mb-4'>Post Recipe</h2>

				<form action='/api/recipes' method='post' enctype='multipart/form-data'>
					<div className='mb-4'>
						<label for='recipeName' className='block text-gray-700 font-bold mb-2'>
							Recipe Name
						</label>
						<input
							type='text'
							id='recipeName'
							name='name'
							className='w-full p-2 border rounded text-slate-800'
						/>
					</div>
					<div className='mb-4'>
						<label for='recipeImage' className='block text-gray-700 font-bold mb-2'>
							Recipe Image
						</label>
						<input
							type='file'
							id='recipeImage'
							name='image'
							className='w-full p-2 border rounded'
						/>
					</div>
					* Add more input fields for other recipe properties *
					<button type='submit' className='bg-blue-500 text-white p-2 rounded'>
						Submit Recipe
					</button>
				</form>
			</div> */}
			{/* hi post recipe form */}
			<div
				className='height-full  sm:gap-6 mx-auto mt-8 sm:p-8 p-2 bg-secondary
       rounded-lg shadow-md'>
				<h2 className='text-2xl font-semibold mb-4'>Post a Recipe</h2>
				<form action='/api/recipes' method='post'>
					<div className='grid grid-cols-6 gap-4 sm:gap-6'>
						<div className='col-span-6 sm:col-span-4 md:col-span-6 lg:col-span-5 xl:col-span-5  mb-4'>
							<label
								for='recipeName'
								className='block text-gray-700 font-bold mb-2'>
								Recipe Name
							</label>
							<input
								type='text'
								id='recipeName'
								name='name'
								className='w-full p-2 border rounded'
								placeholder='Recipe Name'
							/>
						</div>
						<div className='col-span-6 sm:col-span-4 md:col-span-2 lg:col-span-5 xl:col-span-5  mb-3'>
							<label
								for='recipeImage'
								className='block text-gray-700 font-bold mb-2'>
								Recipe Image
							</label>
							<input
								type='file'
								id='recipeImage'
								name='image'
								className='w-full p-2 border rounded'
							/>
						</div>

						<div className=' col-span-6 sm:col-span-3 md:col-span-5 lg:col-span-3 xl:col-span-4  mb-4'>
							<label
								for='recipeCategory'
								className=' text-gray-700 font-bold mb-2'>
								Recipe Category
							</label>
							<select
								id='recipeCategory'
								name='recipeCategory'
								className='w-full p-2 border rounded outline-none'>
								<option value='' disabled selected>
									Select Recipe Category
								</option>
								<option value='pasta'>Pasta</option>
								<option value='salad'>Salad</option>
							</select>
						</div>
						<div className=' col-span-6 sm:col-span-3 md:col-span-5 lg:col-span-3 xl:col-span-4  mb-4'>
							<label
								for='RecipeCuisine'
								className='block text-gray-700 font-bold mb-2'>
								Cuisine
							</label>
							<select
								id='recipeCuisine'
								name='recipeCuisine'
								className='w-full p-2 border rounded outline-none'>
								<option value='' disabled selected>
									Select Cuisine
								</option>
								<option value='Vegan'>Vegan</option>
								<option value='Nonvegan'>Pescatarian</option>
								<option value='Meatlover'>Meatlover</option>
							</select>
						</div>
						<div className='col-span-6 sm:col-span-3 md:col-span-3 lg:col-span-2 xl:col-span-3  mb-4'>
							<label
								for='prepTime'
								className='block text-gray-700 font-bold mb-2'>
								Prep Time
							</label>
							<input
								type='text'
								id='prepTime'
								name='prepTime'
								className='w-full p-2 border rounded'
								placeholder='Preparation Time'
							/>
						</div>
						<div className='col-span-6 sm:col-span-3 md:col-span-3 lg:col-span-2 xl:col-span-3  mb-4'>
							<label
								for='cookTime'
								className='block text-gray-700 font-bold mb-2'>
								Cook Time
							</label>
							<input
								type='text'
								id='cookTime'
								name='cookTime'
								className='w-full p-2 border rounded'
								placeholder='Cooking Time'
							/>
						</div>
						{/* <div className='col-span-6 sm:col-span-3 md:col-span-3  lg:col-span-2 xl:col-span-3  mb-4'>
							<label for='totalTime' className='block text-gray-700 font-bold mb-2'>
								Total Time
							</label>
							<input
								type='text'
								id='totalTime'
								name='totalTime'
								className='w-full p-2 border rounded'
								placeholder='Total Time'
							/>
						</div> */}
						<div className='col-span-6 sm:col-span-3 md:col-span-3 lg:col-span-2 xl:col-span-3  mb-4'>
							<label
								for='recipeYield'
								className='block text-gray-700 font-bold mb-2'>
								Recipe Yield
							</label>
							<input
								type='text'
								id='recipeYield'
								name='recipeYield'
								className='w-full p-2 border rounded'
								placeholder='recipeYield'
							/>
						</div>
						<div className='col-span-6 sm:col-span-3 md:col-span-3 lg:col-span-2 xl:col-span-3 mb-4'>
							<label
								for='datePublished'
								className='block text-gray-700 font-bold mb-2'>
								Date Published
							</label>
							<input
								type='text'
								id='datePublished'
								name='datePublished'
								className='w-full p-2 border rounded'
								placeholder='Date published'
							/>
						</div>
						<div className='col-span-6 mb-4'>
							<label
								for='description'
								className='block text-gray-700 font-bold mb-2'>
								Description
							</label>
							<textarea
								id='description'
								name='description'
								className='w-full h-full p-2 border rounded'
								placeholder='Description'></textarea>
						</div>
						<div className=' col-span-6 mb-4'>
							<label
								for='recipeIngredients'
								className='block text-gray-700 font-bold mb-2'>
								Recipe Ingredients
							</label>
							<textarea
								id='recipeIngredients'
								name='recipeIngredients'
								className='w-full h-full p-2 border rounded'
								placeholder='Recipe Ingredients'></textarea>
						</div>
						<div className='col-span-6 mb-4'>
							<label
								for='recipeInstructions'
								className='block text-gray-700 font-bold mb-2'>
								Recipe Instructions
							</label>
							<textarea
								id='recipeInstructions'
								name='recipeInstructions'
								className='w-full h-full p-2 border rounded'
								placeholder='Recipe Instructions'></textarea>
						</div>
						<div className='col-span-6 sm:col-span-2 md:col-span-4 lg:col-span-5 xl:col-span-5  mb-4'>
							<label
								for='authorName'
								className='block text-gray-700 font-bold mb-2'>
								Author Name
							</label>
							<input
								type='text'
								id='authorName'
								name='authorName'
								className='w-full p-2 border rounded text-slate-800s'
								placeholder='Author Name'
							/>
						</div>
						<div className='col-span-6 sm:col-span-2 md:col-span-4 lg:col-span-5 xl:col-span-5  mb-4'>
							<label
								for='aggregateRating'
								className='block text-gray-700 font-bold mb-2'>
								Aggregate Rating
							</label>
							<input
								type='text'
								id='aggregateRating'
								name='aggregateRating'
								className='w-full p-2 border rounded'
								placeholder='Rating'
							/>
						</div>
						<div className='flex col-span-6 justify-between gap-2 sm:p-4 border border-slate-300 my-3 items-start'>
							<button
								type='submit'
								className='bg-orange-400 font-bold p-2 rounded-[4px] focus:outline-none focus:shadow-outline hover:bg-orange-500 transition-all 1s ease-in-out text-white'>
								Submit Recipe
							</button>

							<div className='flex gap-2'>
								<RemoveButton />
								<Link href={'/editRecipe/123'}>
									<HiPencilAlt size={28} />
								</Link>
							</div>
						</div>
					</div>
				</form>
			</div>
		</>
	)
}

export default RecipesList
