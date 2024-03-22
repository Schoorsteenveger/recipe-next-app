'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const RecipeForm = () => {
	const router = useRouter()

	const startingRecipeData = {
		title: '',
		image: null, // Handle file input separately
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

	const handleChangeRecipe = (e) => {
		if (e.target.name === 'image') {
			setFormData((prevState) => ({
				...prevState,
				image: e.target.value[0],
			}))
		} else {
			const value = e.target.value
			const name = e.target.name

			setFormData((prevState) => ({
				...prevState,
				[name]: value,
			}))
		}
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		const formDataToSend = new FormData()
		for (const key in formData) {
			formDataToSend.append(key, formData[key])
		}

		const response = await fetch('/api/recipes', {
			method: 'POST',
			body: formDataToSend,
		})

		// const response = await fetch('/api/recipes', {
		// 	method: 'POST',
		// 	body: JSON.stringify({ formData }),
		// 	'content-type': 'application/json',
		// })

		if (!response.ok) {
			throw new Error('Could not create recipe')
		}
		router.refresh()
		router.push('/')
	}

	const [formData, setFormData] = useState(startingRecipeData)
	return (
		<form action='/api/recipes' method='post' onSubmit={handleSubmit}>
			<div className='grid grid-cols-6 gap-4 sm:gap-6'>
				<div className='col-span-6 sm:col-span-4 md:col-span-6 lg:col-span-5 xl:col-span-5  mb-4'>
					<label htmlFor='recipeName'>Recipe Name</label>
					<input
						type='text'
						id='recipeName'
						name='title'
						className='w-full p-2 border rounded'
						placeholder='Recipe Name'
						onChange={handleChangeRecipe}
						required
						value={formData.title}
					/>
				</div>
				<div className='col-span-6 sm:col-span-4 md:col-span-2 lg:col-span-5 xl:col-span-5  mb-3'>
					<label htmlFor='recipeImage'>Recipe Image</label>
					<input
						type='file'
						id='recipeImage'
						name='image'
						className='w-full p-2 border rounded'
					/>
				</div>

				<div className=' col-span-6 sm:col-span-3 md:col-span-5 lg:col-span-3 xl:col-span-4  mb-4'>
					<label htmlFor='recipeCategory'>Recipe Category</label>
					<select
						value={formData.recipeCategory}
						onChange={handleChangeRecipe}
						required
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
					<label htmlFor='RecipeCuisine'>Cuisine</label>
					<select
						value={formData.recipeCuisine}
						onChange={handleChangeRecipe}
						required
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
					<label htmlFor='prepTime'>Prep Time</label>
					<input
						type='text'
						id='prepTime'
						name='prepTime'
						onChange={handleChangeRecipe}
						required
						value={formData.prepTime}
						className='w-full p-2 border rounded'
						placeholder='Preparation Time'
					/>
				</div>
				<div className='col-span-6 sm:col-span-3 md:col-span-3 lg:col-span-2 xl:col-span-3  mb-4'>
					<label htmlFor='cookTime'>Cook Time</label>
					<input
						type='text'
						id='cookTime'
						name='cookTime'
						onChange={handleChangeRecipe}
						required
						value={formData.cookTime}
						className='w-full p-2 border rounded'
						placeholder='Cooking Time'
					/>
				</div>

				<div className='col-span-6 sm:col-span-3 md:col-span-3 lg:col-span-2 xl:col-span-3  mb-4'>
					<label htmlFor='recipeYield'>Recipe Yield</label>
					<input
						type='text'
						id='recipeYield'
						name='recipeYield'
						onChange={handleChangeRecipe}
						required
						value={formData.recipeYield}
						className='w-full p-2 border rounded'
						placeholder='recipeYield'
					/>
				</div>
				<div className='col-span-5 sm:col-span-3 md:col-span-3 lg:col-span-2 xl:col-span-3 mb-4'>
					<label htmlFor='datePublished'>Date Published</label>
					<input
						type='text'
						id='datePublished'
						name='datePublished'
						onChange={handleChangeRecipe}
						required
						value={formData.datePublished}
						className='w-full p-2 border rounded'
						placeholder='Date published'
					/>
				</div>
				<div className='col-span-6 mb-4'>
					<label htmlFor='description'>Description</label>
					<textarea
						id='description'
						name='description'
						onChange={handleChangeRecipe}
						required
						rows={6}
						placeholder='Description'
					/>
				</div>
				<div className='col-span-6 mb-4'>
					<label htmlFor='recipeIngredients'>Recipe Ingredients</label>
					<textarea
						id='recipeIngredient'
						name='recipeIngredient'
						onChange={handleChangeRecipe}
						required
						rows={6}
						cols={40}
						placeholder='Recipe Ingredients'
					/>
				</div>
				<div className='col-span-6 mb-4'>
					<label htmlFor='recipeInstructions'>Recipe Instructions</label>
					<textarea
						id='recipeInstructions'
						name='recipeInstructions'
						onChange={handleChangeRecipe}
						required
						rows={6}
						placeholder='Recipe Instructions'
					/>
				</div>
				<div className='col-span-6 mb-4'>
					<label htmlFor='authorName'>Author Name</label>
					<input
						type='text'
						id='authorName'
						name='authorName'
						onChange={handleChangeRecipe}
						required
						value={formData.authorName}
						className='w-full p-2 border rounded text-slate-800s'
						placeholder='Author Name'
					/>
				</div>
				{/* <div className='col-span-6 sm:col-span-2 md:col-span-4 lg:col-span-5 xl:col-span-5  mb-4'>
					<label htmlFor='aggregateRating'>Aggregate Rating</label>
					<input
						type='text'
						id='aggregateRating'
						name='aggregateRating'
						className='w-full p-2 border rounded'
						placeholder='Rating'
					/>
				</div> */}
				<div className='flex col-span-6 justify-between gap-2 sm:p-4 border border-slate-300 my-3 items-start'>
					<button
						type='submit'
						className='bg-orange-400 font-bold p-2 rounded-[4px] focus:outline-none focus:shadow-outline hover:bg-orange-500 transition-all 1s ease-in-out text-white'>
						Submit Recipe
					</button>
				</div>
			</div>
		</form>
	)
}

export default RecipeForm
