import express from "express"
import ArticleController from "../../../controllers/apiArticle"

const router = express.Router()

router.get("/", ArticleController.list)
router.get("/:id(\\d+)", ArticleController.get)

export default router
