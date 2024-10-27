import { FC } from 'react';

interface Props {
  text: string;
  href?: string;
  primary?: boolean;
}

const Button: FC<Props> = ({ primary, text, href }) => {
  return (
    <a
      href={href}
      className={`button button-${primary ? 'primary' : 'secondary'} button-shadow`}
    >
      {text}
    </a>
  );
};

export default Button;
