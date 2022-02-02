import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const About: FC = () => {
  const [message, setMessage] = useState('');
  const { nbr } = useParams();

  useEffect(() => {
    if (nbr) {
      setMessage(`The number is ${nbr}`);
    } else {
      setMessage('No number provided');
    }
  }, [nbr]);

  return (
    <>
      <h1>About</h1>
      <p>{message}</p>
    </>
  );
};

export default About;
