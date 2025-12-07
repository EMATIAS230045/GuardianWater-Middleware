import { Router } from "express";
import ReportsController from "../controllers/reports.controllers.js";

const router = Router();

router.post("/createReport", ReportsController.createReport);

router.get("/allReports",ReportsController.getReports);

router.get("/getReport/:id_report",ReportsController.getReport);

router.put("/updateReport/:id_report",ReportsController.updateReport);

router.delete("/deleteReport/:id_report",  ReportsController.deleteReport);

export default router;
