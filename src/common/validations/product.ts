import Joi from "joi";

// export const ProductJoiSchema = Joi.object({
//     name: Joi.string().required(),
//     regular_price: Joi.number().required(),
//     categoryId: Joi.string(),
//     gallery: Joi.array().items(Joi.string()),
//     featured_image: Joi.string(),
//     description: Joi.string(),
//     discount: Joi.number(),
//     featured: Joi.boolean(),
//     countInStock: Joi.number(),

// });

export const ProductJoiSchema = Joi.object({
    name: Joi.string().required(),
    regular_price: Joi.number().required(),
    category: Joi.array().items(Joi.string()).default([]), // Allow string, array, or required
    gallery: Joi.array().items(Joi.string()), // Allow empty array
    image: Joi.string().allow(""), // Allow empty string
    description: Joi.string().required(),
    discount: Joi.number().min(0).max(100).default(0), // Ensure discount is between 0 and 100
    countInStock: Joi.number().min(0), // Ensure countInStock is non-negative
    featured: Joi.boolean(), // Added based on default value
    attributes: Joi.array().items(Joi.string()).default([]), // Assuming attributes is an array of objects
});
