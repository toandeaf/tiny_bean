import '../Configs.css';
import ConfigContainer from '../ConfigContainer.tsx';

const Notes = () => {
  return (
    <ConfigContainer title={'Notes'}>
      <textarea rows={3} style={{ width: '90%' }}></textarea>
    </ConfigContainer>
  );
};

export default Notes;
