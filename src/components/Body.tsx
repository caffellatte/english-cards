import React from 'react';

interface BodyProps {
  children?: React.ReactNode
}

const Body: React.FC<BodyProps> = ({children}) => {
  return(
    <div>
      {children}
    </div>
  );
};

export default Body;