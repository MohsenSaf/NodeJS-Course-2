import express from "express"
import article from "./article"

const router = express.Router()

router.use("/", article)

export default router
