const router = require("express").Router();

const db = require("knex")({
	client: "sqlite3",
	useNullAsDefault: true,
	connection: {
		filename: "data/roles.db"
	}
});

module.exports = router;
