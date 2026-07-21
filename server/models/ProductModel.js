import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    // Product Basic Information
    name: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    shortDescription: {
      type: String,
      default: "",
    },

    // Category Information
    category: {
      type: String,
      required: true,
      trim: true,
    },

    subCategory: {
      type: String,
      default: "",
      trim: true,
    },

    brand: {
      type: String,
      required: true,
      trim: true,
    },

    // Pricing
    price: {
      type: Number,
      required: true,
      min: 0,
    },

    oldPrice: {
      type: Number,
      default: 0,
      min: 0,
    },

    discount: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },

    // Product Images
    images: [
      {
        type: String,
      },
    ],

    // Rating
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },

    reviewsCount: {
      type: Number,
      default: 0,
      min: 0,
    },

    // Stock
    stock: {
      type: Number,
      default: 0,
      min: 0,
    },

    inStock: {
      type: Boolean,
      default: true,
    },

    // Product Badge
    badge: {
      type: String,
      default: "",
    },

    // Variants
    colors: [
      {
        type: String,
      },
    ],

    sizes: [
      {
        type: String,
      },
    ],

    // Product Specifications
    specifications: [
      {
        label: {
          type: String,
          required: true,
        },

        value: {
          type: String,
          required: true,
        },
      },
    ],

    // Product Features
    features: [
      {
        type: String,
      },
    ],

    // Homepage / Collection Flags
    featured: {
      type: Boolean,
      default: false,
    },

    trending: {
      type: Boolean,
      default: false,
    },

    flashSale: {
      type: Boolean,
      default: false,
    },

    // Product Status
    isActive: {
      type: Boolean,
      default: true,
    },
  },

  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;