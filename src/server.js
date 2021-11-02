import express from "express";
import listEndpoints from "express-list-endpoints";
import { join } from "path";

import {
    notFoundHandler,
    badRequestHandler,
    forbiddenHandler,
    genericServerErrorHandler,
  } from "./errorHandlers.js"
  
  const server = express();
  const port = 3001; //server to listen on the port, it is stores into a variable