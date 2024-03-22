import mongoose, { Schema } from 'mongoose';

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const RecipeSchema = new Schema({
  "@context": { type: String, required: false },
  "@type": { type: String, required: false },
  title: { type: String, required: true },
  image: { type: String, required: true },
  recipeCategory: {
    type: String, enum: ['Breakfast', 'Lunch', 'Dinner'],
    required: true
  },
  recipeCuisine: { type: String, enum: ['Veggie', 'Fishy', 'Meaty'], required: true },
  prepTime: { type: String, required: true },
  cookTime: { type: String, required: true },
  recipeYield: { type: String, required: true },
  datePublished: { type: String, required: true },
  description: { type: String, required: true },
  authorName: {
    "@type": { type: String, required: true },
    name: { type: String, required: true }
  },
  recipeIngredient: { type: String, required: true },
  recipeInstructions: { type: String, required: true },
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
