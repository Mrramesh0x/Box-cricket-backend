import express from "express"
import { getSlip, Sendname } from "../controller/Controller.js";
export const router = express.Router()
router.post("/sendname", Sendname);
router.post("/sendslip", getSlip);