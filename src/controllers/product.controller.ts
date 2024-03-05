import axios, { AxiosResponse } from "axios";
import { NextFunction, Request, Response } from "express";

const products = async (req: Request, res: Response, next: NextFunction) => {
  let result: AxiosResponse = await axios.get(`https://dummyjson.com/products`);
  return res.send(result.data);
};

const productsById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let result: AxiosResponse = await axios.get(
    `https://dummyjson.com/products/${req.params["id"]}`,
  );
  return res.send(result.data);
};

export { products, productsById };
