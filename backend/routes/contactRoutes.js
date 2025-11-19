import express from 'express';
import { contactMeController } from '../controller/ContactController.js';
const router=express.Router();
router.route('/contact').post(contactMeController);
export default router;
