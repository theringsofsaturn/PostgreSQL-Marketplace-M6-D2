import express from "express";
import { validationResult } from "express-validator";
import { productsValidation } from "./validation.js";
import createHttpError from "http-errors";
import multer from "multer";

const productsRouter = express.Router();

//************************ GET ALL THE PRODUCTS ********************************
productsRouter.get("/", async (req, res, next) => {
  try {
    if (req.query && req.query.category) {
      const { category } = req.query;

      const filteredProducts = await db.query(
        `SELECT * FROM products WHERE category LIKE '%${category}%'`
      );

      res.send(filteredProducts.rows);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

//************************ GET ALL THE PRODUCTS ********************************
productsRouter.post("/", productsValidation, async (req, res, next) => {
  try {
    const errorList = validationResult(req);

    if (errorList.isEmpty) {
      const { name, description, brand, price, category } = req.body;

      const newProduct = await db.query(
        `INSERT INTO products(name,description,brand,image_url,price,category) VALUES('${name}','${description}','${brand}','https://miro.medium.com/max/2000/1*sZh9GCJXpoZ0Vog-OIvYhg.jpeg','${price}','${category}') RETURNING *; `
      );

      res.status(201).send(newProduct.rows[0]);
    } else {
      next(createHttpError(400, { errorList }));
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export default productsRouter;
