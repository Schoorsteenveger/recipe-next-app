import mongoose from 'mongoose';

const RecipeSchema = new mongoose.Schema({
  "@context": { type: String, required: true },
  "@type": { type: String, required: true },
  title: { type: String, required: true },
  image: [
    {
      data: { type: Buffer, required: false },
      contentType: { type: String, required: false }
    }
  ],
  recipeCategory: { type: String, required: true },
  recipeCuisine: { type: String, required: true },
  prepTime: { type: String, required: true },
  cookTime: { type: String, required: true },
  totalTime: { type: String, required: true },
  recipeYield: { type: String, required: true },
  datePublished: { type: String, required: true },
  description: { type: String, required: true },
  author: {
    "@type": { type: String, required: true },
    name: { type: String, required: true }
  },
  recipeIngredient: { type: [String], required: true }, // Array of ingredients, required
  recipeInstructions: [
    {
      "@type": { type: String, required: true },
      name: { type: String, required: true },
      text: { type: String, required: true } // Instruction text, required
    }
  ],
  aggregateRating: {
    "@type": { type: String, required: true },
    ratingValue: { type: String, required: true },
    ratingCount: { type: String, required: true },
    reviewCount: { type: String, required: true },
    worstRating: { type: String, required: true },
    bestRating: { type: String, required: true }
  },
  bookmarked: { type: Boolean, default: false }
}, { timestamps: true });

const RecipeModel = mongoose.models.Recipe || mongoose.model('Recipe', RecipeSchema);
export default RecipeModel;
