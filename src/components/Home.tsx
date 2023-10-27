import React from "react";
import { useGetCars } from "../hooks/useGetCars";
import { CarCard } from "./Card";

import styles from '../../public/css/home.module.css';
import { Spacer, Text } from "vcc-ui";

export const Home: React.FC = () => {
  const { cars } = useGetCars();

  return (
    <div className={styles.homeWrapper}>
      <Text variant="cook">New Cars</Text>
      <Spacer />
      <Spacer />
      <div className={styles.cardsWrapper}>
        {
          cars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
            />
          ))
        }
      </div>
    </div>
  );
};
