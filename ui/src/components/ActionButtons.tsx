import { FC } from 'react';

const ActionButtons: FC = () => {
  return (
    <div style={{ display: 'flex', marginBottom: '1em' }}>
      <button className={`button button-negative button-shadow`}>
        Cancel Order
      </button>
      <button className={`button button-primary button-shadow`}>
        Add to Order
      </button>
    </div>
  );
};

export default ActionButtons;
