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
});

const ItemModel = model("item", itemSchema);

module.exports = ItemModel;
