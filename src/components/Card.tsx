import Image from "next/image";
import { CardContent, Text, Spacer, Flex, Row, Link } from "vcc-ui";
import { ICardProps } from "../interfaces/car.interface";

import styles from '../../public/css/carCard.module.css';

interface CardProps {
  car: ICardProps;
}

export const CarCard : React.FC<CardProps> = ({ car }) => {
  return (
    <div className={styles.cardWrapper}>
      <Text variant="bates">{car.bodyType}</Text>
      <Flex extend={{
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexDirection: 'row',
          margin: 0,
        }}>
          <Text variant="amundsen" extend={{ margin: '0', padding: '0' }}>{car.modelName}</Text>
          <Spacer />
          <Text variant="bates" subStyle="inline-link" extend={{ margin: '0' }}>{car.modelType}</Text>
        </Flex>
        <Spacer />
        <Image
          src={car.imageUrl}
          alt={car.modelName}
          height={200}
          width={250}
        />
        <Spacer />
        <Flex extend={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
          <Link>
            {'SHOP >'}
          </Link>
          <Spacer />
          <Link>
            {'LEARN >'}
          </Link>
        </Flex>
    </div>
  );
};