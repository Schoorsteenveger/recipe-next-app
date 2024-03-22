import RecipeModel from "@/app/models/recipeModel";
import { NextResponse } from "next/server";
import RecipeSchema from '../../../../utils/validation/recipe';
import connectMongoDB from "../../../../libs/mongodb";

export async function POST(request) {
  console.log('POST RAN')
  // connect MongoDB
  await connectMongoDB();
  try {
    const body = await request.json()
    const recipeData = body.formData;

    // Validate the recipe data using Yup
    await RecipeSchema.validate(recipeData, { abortEarly: false });

    // Create Recipe 
    await RecipeModel.create(recipeData)

    return NextResponse.json({ message: "Topic created successfully" }, { statusCode: 201 });
  } catch (error) {
    console.error("Validation or MongoDB error:", error);

    // Handle validation or MongoDB errors
    return NextResponse.json({ message: "Invalid recipe data", error }, { statusCode: 500 });
  }
}
