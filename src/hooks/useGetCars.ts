import axios from "axios";
import { useEffect, useState } from "react";
import { ICardProps } from "../interfaces/car.interface";

export function useGetCars() {
  const [cars, setCars] = useState<ICardProps[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/cars")
      .then((res) => setCars(res.data));
  }, []);

  return { cars };
}