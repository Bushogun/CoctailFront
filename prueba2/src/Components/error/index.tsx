import React from 'react';

interface ErrorProps {
  error: string;
}

const Error: React.FC<ErrorProps> = ({ error }) => (
  <div >
    <p>Error: {error}</p>
  </div>
);

export default Error;