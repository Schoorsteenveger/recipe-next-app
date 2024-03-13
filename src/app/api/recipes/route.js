import connectMongoDB from "../../../../libs/mongodb";
import RecipeModel from "../../../../models/recipeModel";
import { NextResponse } from "next/server";
import RecipeSchema from '../../../../utils/validation/recipe';

export async function POST(request) {
  try {
    const body = await request.json()
    const recipeData = await body.formData;

    // Validate the recipe data using Yup
    await RecipeSchema.validate(recipeData, { abortEarly: false });

    // Create Recipe 
    await RecipeModel.create(recipeData)

    // Connect to MongoDB
    await connectMongoDB();

    // Destructure recipeData and pass individual properties to Recipe.create
    // const {
    //   name,
    //   image,
    //   recipeCategory,
    //   recipeCuisine,
    //   prepTime,
    //   cookTime,
    //   totalTime,
    //   recipeYield,
    //   datePublished,
    //   description,
    //   author,
    //   recipeIngredient,
    //   recipeInstructions,
    //   aggregateRating,
    //   bookmarked,
    // } = recipeData;

    // // Create the recipe by passing individual properties
    // await RecipeModel.create(
    //   name,
    //   image,
    //   recipeCategory,
    //   recipeCuisine,
    //   prepTime,
    //   cookTime,
    //   totalTime,
    //   recipeYield,
    //   datePublished,
    //   description,
    //   author,
    //   recipeIngredient,
    //   recipeInstructions,
    //   aggregateRating,
    //   bookmarked
    // );

    return NextResponse.json({ message: "Topic created successfully" }, { statusCode: 201 });
  } catch (error) {
    console.error("Validation or MongoDB error:", error);

    // Handle validation or MongoDB errors
    return NextResponse.json({ error: "Invalid recipe data", error }, { statusCode: 400 });
  }
}
