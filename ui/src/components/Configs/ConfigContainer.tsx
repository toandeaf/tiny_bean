import { FC, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  title: string;
}

const ConfigContainer: FC<Props> = ({ title, children }) => (
  <>
    <div className={'option-title'}>{title}</div>
    <div className={'options'}>{children}</div>
  </>
);

export default ConfigContainer;
