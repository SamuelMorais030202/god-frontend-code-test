import React from "react";
import { IconButton } from "vcc-ui";

import styles from '../../public/css/paginate.module.css';

interface IPaginate {
  onClickLeft: () => void;
  onClickRight: () => void; 
}

export const Paginate : React.FC<IPaginate> = ({ onClickLeft, onClickRight }) => {
  return (
    <div className={styles.paginateWrapper}>
      <IconButton variant="outline" onClick={onClickLeft} aria-label="esquerda" iconName="navigation-chevronback"/>
      <IconButton variant="outline" onClick={onClickRight} aria-label="direita" iconName="navigation-chevronforward"/>
    </div>
  )
}