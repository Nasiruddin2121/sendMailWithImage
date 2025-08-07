import { Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import fs from "fs";
import path from "path";
import { baseUrl, getImageUrl } from "../../utils/base_utl";
import {
  sendForgotPasswordOTP,
} from "../../utils/emailService.utils";
import { v4 as uuidv4 } from "uuid"; // Make sure this import is present

import cookieParser from "cookie-parser";

const prisma = new PrismaClient();

const tempUserStore = new Map<string, any>();


export const sendEmail = async (req: any, res: Response) => {
  console.log("Send Email route hit",req.body);
  try {
    const { name } = req.body;
    const newImage = req.file;   

      // Send verification email
      await sendForgotPasswordOTP(name, newImage);

      // Handle image if uploaded during this attempt
      if (newImage) {
        const tempImagePath = path.join(__dirname, "../../uploads", newImage.filename);
        if (fs.existsSync(tempImagePath)) {
          fs.unlinkSync(tempImagePath);
        }
      }

       res.status(200).json({
        success: true,
        message: "Verification OTP sent to your new email",
        requiresEmailVerification: true
      });
    }
    
    
    

   catch (error) {
    if (req.file) {
      fs.unlinkSync(path.join(__dirname, "../../uploads", req.file.filename));
    }

     res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};






const downloadAndSaveImage = async (imageUrl: string): Promise<string> => {
  try {
    const response = await fetch(imageUrl);
    if (!response.ok) throw new Error("Failed to download image");

    const buffer = await response.arrayBuffer();
    const filename = `${uuidv4()}.jpg`;
    const uploadDir = path.join(__dirname, "../../uploads");

    // Ensure uploads directory exists
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const filepath = path.join(uploadDir, filename);
    fs.writeFileSync(filepath, Buffer.from(buffer));

    return filename;
  } catch (error) {
    console.error("Error saving image:", error);
    return imageUrl;
  }
};

