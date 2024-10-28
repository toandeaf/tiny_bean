import './Configs.css';

const Size = () => {
  // TODO - replace these wee circles with coffee cups with letters?
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
      }}
    >
      <button className="size-button">S</button>
      <button className="size-button selected">M</button>
      <button className="size-button">L</button>
    </div>
  );
};

export default Size;
