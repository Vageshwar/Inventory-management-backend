import { Router } from "express";
import { getDasbboardMetrics } from "../controllers/dashboardController";

const router = Router();


router.get('/', getDasbboardMetrics);

export default router;