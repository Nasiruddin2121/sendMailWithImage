import express from "express";
import {sendEmail } from "./sendmail.controllers";
 
import upload from "../../config/multer.congig";
import { send } from "process";
import { verifyUser } from "../../middleware/verifyUsers";

const router = express.Router();



router.post('/send-email', upload.single("image"), sendEmail);
export default router;