import { NextApiRequest, NextApiResponse } from "next";
import data from '../../public/api/cars.json';

export default async function handler(_req : NextApiRequest, res : NextApiResponse) {
  res.status(200).json(data);
}