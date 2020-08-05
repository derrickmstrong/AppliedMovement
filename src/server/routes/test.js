import * as express from "express";
const router = express.Router();

router.use("/", (req, res, next) => {
    res.send("testing route");
});

export default router