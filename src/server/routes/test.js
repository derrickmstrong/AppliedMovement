import * as express from "express";
import db from "../db";
const router = express.Router();

router.get("/", (req, res, next) => {
    res.send("testing route");
});

router.delete("/:id", async (req, res, next) => {
    const id = Number(req.params.id);

    let response = db.queries.destroy(id);
    res.send({ msg: "destroyed" });

});

export default router