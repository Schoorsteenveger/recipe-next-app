import * as yup from 'yup';

const recipeSchema = yup.object().shape({
  '@context': yup.string().required(),
  '@type': yup.string().required(),
  title: yup.string().required(),
  image: yup.string().required(),
  recipeCategory: yup.string().required(),
  recipeCuisine: yup.string().required(),
  prepTime: yup.string().required(),
  cookTime: yup.string().required(),
  recipeYield: yup.string().required(),
  datePublished: yup.string().required(),
  description: yup.string().required(),
  authorName: yup.string().required(),
  recipeIngredient: yup.string().required(),
  recipeInstructions: yup.string().required(),
  aggregateRating: yup.object().shape({
    '@type': yup.string().required(),
    ratingValue: yup.string().required(),
    ratingCount: yup.string().required(),
    reviewCount: yup.string().required(),
    worstRating: yup.string().required(),
    bestRating: yup.string().required(),
  }),
  bookmarked: yup.boolean().default(false),
});

export default recipeSchema;
