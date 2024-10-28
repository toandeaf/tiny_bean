import './OrderPlacePage.css';
import Banner from '../components/Banner.tsx';
import { ORDER_OPTIONS } from '../data/orderOptions.ts';
import { useState } from 'react';
import { OrderOption } from '../types/types.ts';
import '../components/Card/Card.css';
import Card from '../components/Card/Card.tsx';
import CardExpanded from '../components/Card/CardExpanded.tsx';

const OrderPlacePage = () => {
  const [selectedOrderOption, setSelectedOrderOption] =
    useState<OrderOption | null>(null);

  const handleCardClick = (orderOption: OrderOption) => {
    setSelectedOrderOption(orderOption);
  };

  return (
    <>
      <Banner />
      <div className="card-container">
        {selectedOrderOption ? (
          <CardExpanded
            key={selectedOrderOption.title}
            option={selectedOrderOption}
          />
        ) : (
          ORDER_OPTIONS.map((option) => (
            <Card
              key={option.title}
              option={option}
              onClick={handleCardClick}
            />
          ))
        )}
      </div>
    </>
  );
};

export default OrderPlacePage;
