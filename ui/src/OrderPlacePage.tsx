import './OrderPlacePage.css';
import Banner from './Banner.tsx';
import { ORDER_OPTIONS } from './orderOptions.ts';
import { useState } from 'react';
import { OrderType } from './types.ts';
import './Card.css';
import Card from './Card.tsx';
import CardExpanded from './CardExpanded.tsx';

const OrderPlacePage = () => {
  const [selectedOrderType, setSelectedOrderType] = useState<OrderType | null>(
    null
  );

  const handleCardClick = (orderType: OrderType) => {
    setSelectedOrderType(orderType);
  };

  return (
    <>
      <Banner />
      <div className="card-container">
        {selectedOrderType
          ? ORDER_OPTIONS.filter(
              (option) => option.type === selectedOrderType
            ).map((option) => (
              <CardExpanded
                key={option.title}
                imageSrc={option.imageSrc}
                title={option.title}
                type={option.type}
                onClick={handleCardClick}
              />
            ))
          : ORDER_OPTIONS.map((option) => (
              <Card
                key={option.title}
                imageSrc={option.imageSrc}
                title={option.title}
                type={option.type}
                onClick={handleCardClick}
              />
            ))}
      </div>
    </>
  );
};

export default OrderPlacePage;
