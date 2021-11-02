import express from "express";
import { validationResult } from "express-validator";
import {reviewsValidation} from "./validation.js";
import createHttpError from "http-errors";
import multer from "multer";

const reviewsRouter = express.Router();

export default reviewsRouter;