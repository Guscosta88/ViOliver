import React from 'react';
import Button from 'react-bootstrap/Button';
import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
     <div className="home">
       <Button variant="outline-info">FIRST TIME HERE</Button>
       </div>
       <div className="home">
       <Button variant="outline-info">ALREADY A CUSTOMER</Button>
   </div>
   </div>
  );
};

export default ExploreContainer;
