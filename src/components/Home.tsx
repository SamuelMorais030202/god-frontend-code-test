import React from "react";
import { useGetCars } from "../hooks/useGetCars";
import { CarCard } from "./Card";

import styles from '../../public/css/home.module.css';
import { Spacer, Text } from "vcc-ui";
import { Paginate } from "./Paginate";

const onClickNavigate = (left: boolean) => {
  let cardList = document.getElementById("card-list");
  let card = cardList?.firstElementChild;
  let cardSize = (card?.clientWidth ?? 0) + 24;
  let scrollPosition = cardList?.scrollLeft ?? 0;

  if(left) cardList?.scrollTo({ left: scrollPosition - cardSize })
  else cardList?.scrollTo({ left: scrollPosition + cardSize })
}

export const Home: React.FC = () => {
  const { cars } = useGetCars();

  return (
    <div className={styles.homeWrapper}>
      <Text variant="cook">New Cars</Text>
      <Spacer />
      <Spacer />
      <div className={styles.cardsWrapper} id="card-list">
        {
          cars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
            />
          ))
        }
      </div>
      <Paginate onClickLeft={() => onClickNavigate(true)} onClickRight={() => onClickNavigate(false)} />
    </div>
  );
};
