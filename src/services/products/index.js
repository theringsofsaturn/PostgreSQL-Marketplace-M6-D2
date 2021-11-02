import express from "express";
import { validationResult } from "express-validator";
import createHttpError from "http-errors";
import multer from "multer";

const productsRouter = express.Router();

export default productsRouter;
