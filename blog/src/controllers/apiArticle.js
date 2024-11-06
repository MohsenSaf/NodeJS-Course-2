import Article from "../models/article"
import { NotFoundError } from "../utils/errors"
import Comment from "../models/comment"

class ArticleController {
  async list(req, res) {
    const data = await Article.findPaginate(req.query.page, { limit: 8 })

    res.json(data)
  }

  async get(req, res) {
    const { id } = req.params

    const article = await Article.find(+id, { include: ["user", "comments"] })

    if (!article) {
      throw new NotFoundError("Article not found")
    }

    res.json({
      title: article.title,
      article,
      user: req.user,
    })
  }
}

export default new ArticleController()
