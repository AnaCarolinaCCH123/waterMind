import { Router } from "express";
import { createPh, deletePh, getPh, updatePh } from "../controllers/ph";
import validate from "../middlewares/validate";
import { phSchema } from "../schemas/ph";

const router = Router();

router.get("/", getPh);

router.post("/", validate(phSchema), createPh);
router.put("/:id", validate(phSchema), updatePh);
router.delete("/:id", deletePh);

export default router;
