const { Post, User, Comment } = require("../models");
const router = require("express").Router();
// const sequelize = require("../config/connection");

// get all posts
router.get("/", (req, res) => {
	console.log(req.session);

	Post.findAll({
		// attributes: ["id", "post_text", "title", "created_at"],
		include: [
			User
			// {
			// 	model: Comment,
			// 	attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
			// 	include: {
			// 		model: User,
			// 		attributes: ["username"],
			// 	},
			// },
			// {
			// 	model: User,
			// 	attributes: ["username"],
			// },
		],
	})
		.then((dbPostData) => {
			// pass a single post into the homepage template
			const posts = dbPostData.map((post) => post.get({ plain: true }));
			res.render("post-info", { posts });
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});



//rendering one post to the single-post page
router.get("/post/:id", (req, res) => {
	Post.findByPk(req.params.id,
		{
			include: [
				User,
				{
					model: Comment,
					include: [User],
				},

			],
		})

		.then((dbPostData) => {
			if (!dbPostData) {
				const post = dbPostData.get({ plain: true });
				res.render("single-post", { post });
			}
			else {
				res.status(404).end();
			}
		})

		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

	// redirecting users to homepage once they log in
	router.get("/login", (req, res) => {
		if (req.session.loggedIn) {
			res.redirect("/");
			return;
		}
		res.render("login");
	});

	// rendering sign up page
	router.get("/signup", (req, res) => {
		if (req.session.loggedIn) {
			res.redirect("/");
			return;
		}
		res.render("signup");
	});

	// });

	module.exports = router;