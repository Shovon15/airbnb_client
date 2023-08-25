const createError = require("http-errors");
const ItemModel = require("../models/itemModel");
const { successResponse } = require("./responseController");

const getItemByCategory = async (req, res, next) => {
	try {
		const category = req.params.category;

		const items = await ItemModel.find({
			category_name: { $regex: category, $options: "i" },
		});

		if (!items || items.length === 0) {
			throw createError(404, "No items found");
		}

		return successResponse(res, {
			statusCode: 200,
			message: "Items were returned successfully!!!",
			payload: {
				items,
			},
		});
	} catch (error) {
		next(error);
	}
};

module.exports = { getItemByCategory };
