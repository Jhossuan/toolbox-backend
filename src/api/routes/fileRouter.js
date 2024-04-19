import express from "express";
import FileController from "../controllers/fileController.js";

const router = express.Router()

router.get('/data', FileController.getFormatedFiles);
router.get('/list', FileController.getFiles);

export default router;