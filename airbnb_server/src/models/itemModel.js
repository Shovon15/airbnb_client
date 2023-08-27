const { Schema, model } = require("mongoose");

const itemSchema = new Schema({
	name: {
		type: String,
		required: [true, "item name is required"],
		trim: true,
	},
	category_name: {
		type: String,
		required: [true, "category name is required"],
		trim: true,
	},
	image: {
		type: String,
		required: [true, "image is required"],
	},
	price: {
		type: Number,
		required: [true, "price is required"],
	},
	room: {
		type: Number,
		required: [true, "room number is required"],
	},
	bed: {
		type: Number,
		required: [true, "bed number is required"],
	},
	bathroom: {
		type: Number,
		required: [true, "bthroom number is required"],
	},
	property_type: {
		type: String,
		required: [true, "property type  is required"],
		trim: true,
	},
});

const ItemModel = model("item", itemSchema);

module.exports = ItemModel;
