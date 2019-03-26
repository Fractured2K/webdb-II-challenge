const router = require("express").Router();

const db = require("knex")({
	client: "sqlite3",
	useNullAsDefault: true,
	connection: {
		filename: "data/lambda.sqlite3"
	}
});

// Get zoos
router.get("/", async (req, res) => {
	try {
		const zoos = await db("zoos");

		res.status(200).json(zoos);
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: "Sorry, something went wrong trying to get all zoos"
		});
	}
});

// Get zoo by id
router.get("/:id", async (req, res) => {
	try {
		const { id } = req.params;

		const zoo = await db("zoos")
			.first()
			.where({ id });

		res.status(200).json(zoo);
	} catch (err) {
		res.status(500).json({
			message: "Sorry, there was a problem while retrieving that zoo"
		});
	}
});

module.exports = router;
