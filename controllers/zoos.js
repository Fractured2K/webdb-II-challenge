const router = require("express").Router();

const db = require("knex")({
	client: "sqlite3",
	useNullAsDefault: true,
	connection: {
		filename: "data/lambda.sqlite3"
	}
});

// Get zoo
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

module.exports = router;
