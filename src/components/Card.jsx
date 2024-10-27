
import React, { useState } from 'react';
import CardBody from './CardBody';
import CardHeader from './CardHeader';
import CardImage from './CardImage';
import Button from './Button';

// Mais card component
const Card = () => {

  // State for controlling the order of the cards
  const [order, setOrder] = useState([1, 2, 3]);

  // State for tracking the currently selected card
  const [selectedCard, setSelectedCard] = useState(null);

    const moveToCenter = (index) => {
      // If the clicked card is already in position 2 (center), keep positions as they are
      if (order[index] === 2) return;

      // Find the index of the card that is already in the center position
      const centerCardIndex = order.findIndex(pos => pos === 2);

      // Update positions: place the clicked card in the center position (2),
      // and move the card in the center to the previous position of the clicked card
      setOrder(order.map((pos, i) => {
        if (i === index) return 2;                      // Move the clicked card to the center (position 2)
        if (i === centerCardIndex) return order[index]; // Move the center card to the position of the clicked card
        return pos;                                     // Keep other cards in their current positions
      }));

      // Update the selected card state to highlight the active card
      setSelectedCard(index);
    };


  return (
    <div className='carrossel'>

      <div className='cards'>

        <div className='card-one'
              style={{ order: order[0],
              border: selectedCard === 0 ? '5px solid rgb(66, 111, 200)' : 'none'}}>
          <CardImage />
          <CardHeader cardHeader="Heading 1" />
          <CardBody cardBody1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ullam alias odio est, obcaecati itaque excepturi consequuntur velit adipisci suscipit." />
          <Button buttonName="Button 1" onClick={() => moveToCenter(0)} />
        </div>

        <div className='card-two'
              style={{ order: order[1],
              border: selectedCard === 1 ? '5px solid rgb(66, 111, 200)' : 'none'}}>
          <CardImage />
          <CardHeader cardHeader="Heading 2" />
          <CardBody cardBody1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ullam alias odio est, obcaecati itaque excepturi consequuntur velit adipisci suscipit." />
          <Button buttonName="Button 2" onClick={() => moveToCenter(1)} />
        </div>

        <div className='card-three'
              style={{ order: order[2],
              border: selectedCard === 2 ? '5px solid rgb(66, 111, 200)' : 'none' }}>
          <CardImage />
          <CardHeader cardHeader="Heading 3" />
          <CardBody
            cardBody1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ullam alias odio est, obcaecati itaque excepturi consequuntur velit adipisci suscipit."
            cardBody2="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
          <Button buttonName="Button 3" onClick={() => moveToCenter(2)} />
        </div>
      </div>
    </div>
  );
};

export default Card;
