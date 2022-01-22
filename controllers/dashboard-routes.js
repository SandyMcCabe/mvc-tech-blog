const router = require("express").Router();
const { Post } = require("../Models");
const withAuth = require("../utils/auth");
// const sequelize = require('../config/connection');

// Display posts created by logged in users
router.get("/", withAuth, (req, res) => {
	Post.findAll({
		where: {
			user_id: req.session.user_id
		}
	})
		.then(dbPostData => {
			const posts = dbPostData.map((post) => post.get({ plain: true }));
			res.header('Access-Control-Allow-Origin', '*').render("homepage", { layout: 'dashboard', posts});
		})
		.catch(err => {
			console.log(err);
			res.redirect('login');
		});
});

// rendering edit page
router.get("/edit/:id", withAuth, (req, res) => {
	Post.findOne({
		where: {
			id: req.params.id,
		},
		attributes: ["id", "post_text", "title", "created_at"],
		include: [
			{
				model: User,
				attributes: ["username"],
			},
			{
				model: Comment,
				attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
				include: {
					model: User,
					attributes: ["username"],
				},
			},
		],
	})
		.then((dbPostData) => {
			const post = dbPostData.get({ plain: true });
			res.render("edit-posts", { post, loggedIn: true });
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// rendering newpost page
router.get("/newpost", (req, res) => {
	res.render("new-posts");
});

module.exports = router;