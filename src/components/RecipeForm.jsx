'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const RecipeForm = () => {
	const handleChangeRecipe = (e) => {
		const value = e.target.value
		const name = e.target.name

		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}))
	}

	const handleSubmit = (e) => {
		console.log('submitted')
	}

	const startingRecipeData = {
		title: '',
		image: '/',
		recipeCategory: '',
		recipeCuisine: '',
		prepTime: '',
		cookTime: '',
		totalTime: '',
		recipeYield: '',
		datePublished: '',
		description: '',
		author: '',
		recipeIngredient: '',
		recipeInstructions: '',
		aggregateRating: 1,
		bookmarked: false,
	}

	const [formData, setFormData] = useState(startingRecipeData)
	return (
		<form action='/form/submit' method='post'>
			<div className='grid grid-cols-6 gap-4 sm:gap-6'>
				<div className='col-span-6 sm:col-span-4 md:col-span-6 lg:col-span-5 xl:col-span-5  mb-4'>
					<label htmlFor='recipeName' className=''>
						Recipe Name
					</label>
					<input
						type='text'
						id='recipeName'
						name='name'
						className='w-full p-2 border rounded'
						placeholder='Recipe Name'
						onChange={handleChangeRecipe}
						required={true}
						value={formData.title}
					/>
				</div>
				<div className='col-span-6 sm:col-span-4 md:col-span-2 lg:col-span-5 xl:col-span-5  mb-3'>
					<label htmlFor='recipeImage' className=''>
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
					<label htmlFor='recipeCategory' className=''>
						Recipe Category
					</label>
					<select
						value={formData.recipeCategory}
						onChange={handleChangeRecipe}
						name='recipeCategory'
						className='w-full p-2 border rounded outline-none'>
						<option value='' disabled>
							Select Recipe Category
						</option>
						<option value='Breakfast'>Breakfast</option>
						<option value='Lunch'>Lunch</option>
						<option value='Dinner'>Dinner</option>
					</select>
				</div>

				<div className=' col-span-6 sm:col-span-3 md:col-span-5 lg:col-span-3 xl:col-span-4  mb-4'>
					<label htmlFor='RecipeCuisine' className=' '>
						Cuisine
					</label>
					<select
						value={formData.recipeCuisine}
						onChange={handleChangeRecipe}
						name='recipeCuisine'
						className='w-full p-2 border rounded outline-none'>
						<option value='' disabled>
							Select Cuisine
						</option>
						<option value='Vegetarian'>Veggie</option>
						<option value='FishLover'>Fishy</option>
						<option value='Meatlover'>Meaty</option>
					</select>
				</div>
				<div className='col-span-6 sm:col-span-3 md:col-span-3 lg:col-span-2 xl:col-span-3  mb-4'>
					<label htmlFor='prepTime' className=' '>
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
					<label htmlFor='cookTime' className=' '>
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

				<div className='col-span-6 sm:col-span-3 md:col-span-3 lg:col-span-2 xl:col-span-3  mb-4'>
					<label htmlFor='recipeYield' className=''>
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
					<label htmlFor='datePublished' className=' '>
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
					<label htmlFor='description' className=' '>
						Description
					</label>
					<textarea
						id='description'
						name='description'
						onChange={handleChangeRecipe}
						required={true}
						rows={6}
						placeholder='Description'></textarea>
				</div>
				<div className=' col-span-6 mb-4'>
					<label htmlFor='recipeIngredients' className=''>
						Recipe Ingredients
					</label>
					<textarea
						id='recipeIngredients'
						name='recipeIngredients'
						onChange={handleChangeRecipe}
						required={true}
						rows={6}
						cols={40}
						placeholder='Recipe Ingredients'></textarea>
				</div>
				<div className='col-span-6 mb-4'>
					<label htmlFor='recipeInstructions' className=''>
						Recipe Instructions
					</label>
					<textarea
						id='recipeInstructions'
						name='recipeInstructions'
						onChange={handleChangeRecipe}
						required={true}
						rows={6}
						placeholder='Recipe Instructions'></textarea>
				</div>
				<div className='col-span-6 sm:col-span-2 md:col-span-4 lg:col-span-5 xl:col-span-5  mb-4'>
					<label htmlFor='authorName' className=''>
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
					<label htmlFor='aggregateRating' className=''>
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
						onSubmit={handleSubmit}
						className='bg-orange-400 font-bold p-2 rounded-[4px] focus:outline-none focus:shadow-outline hover:bg-orange-500 transition-all 1s ease-in-out text-white'>
						Submit Recipe
					</button>
				</div>
			</div>
		</form>
	)
}

export default RecipeForm
