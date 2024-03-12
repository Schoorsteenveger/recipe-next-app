import RecipeCard from './RecipeCard'

const RecipesList = () => {
	return (
		<>
			{/* recipe card grid */}

			<div className='grid lg:grid-cols-3 md:grid-cols-2 gap-3 '>
				<RecipeCard />
				<RecipeCard />
				<RecipeCard />
				<RecipeCard />
				<RecipeCard />
				<RecipeCard />
			</div>
		</>
	)
}

export default RecipesList
