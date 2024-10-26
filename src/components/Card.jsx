
import React, { useState } from 'react';
import CardBody from './CardBody';
import CardHeader from './CardHeader';
import CardImage from './CardImage';
import Button from './Button';

const Card = () => {

  const [order, setOrder] = useState([1, 2, 3]);

  const [selectedCard, setSelectedCard] = useState(null);

    // const moveToCenter = (index) => {
    //     setSelectedCard(index); // Update selected card
    //     setOrder(order.map((_, i) => {
    //         if (i === index) return 2; // Setting clicked card to the center
    //             return i < index ? 3 : 1; //  Setting other cards to the positions 1 and 3
    //     }));

    // };

    const moveToCenter = (index) => {
      // Se o card clicado já estiver na posição 2, mantenha as posições
      if (order[index] === 2) return;

      // Encontra o índice do card que está na posição 2
      const centerCardIndex = order.findIndex(pos => pos === 2);

      // Atualiza as posições: coloca o card clicado na posição 2 e o card do centro na posição anterior do clicado
      setOrder(order.map((pos, i) => {
        if (i === index) return 2;             // Card clicado vai para o centro (posição 2)
        if (i === centerCardIndex) return order[index]; // Card do centro vai para a posição do clicado
        return pos;                            // Mantém a posição dos outros cards
      }));

      // Atualiza o estado do card selecionado
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
