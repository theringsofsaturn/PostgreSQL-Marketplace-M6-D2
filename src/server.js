import express from "express";
import cors from "cors"
import listEndpoints from "express-list-endpoints";
import productsRouter from "./services/products/index.js";
import reviewsRouter from "./services/reviews/index.js";
import createDefaultTables from "./db/create-tables.js"
import {
  notFoundHandler,
  badRequestHandler,
  forbiddenHandler,
  genericServerErrorHandler,
} from "./errorHandlers.js";

const server = express();
const port = 3001; //server to listen on the port, it is stores into a variable

//************************ MIDDLEWARES ********************************
server.use(express.json()); //this has to be specified BEFORE the routes, otherwise the body will be undefined
server.use(cors()) //cors connects BE with FE

//************************ ROUTES *************************************
server.use("/products", productsRouter); // all the productsRouter's endpoints will have the prefix "/products"
server.use("/reviews", reviewsRouter); // all the reviewsRouter's endpoints will have the prefix "/reviews"

// *********************** ERROR MIDDLEWARES ***************************
server.use(notFoundHandler);
server.use(badRequestHandler);
server.use(forbiddenHandler);
server.use(genericServerErrorHandler);

console.table(listEndpoints(server));

//server to listen on the port, it is stores into a variable
server.listen(port, () => {
  console.log(`😎 Server is listening on port:  ${port} 😎`);
  createDefaultTables()
});

server.on("error", console.log);
