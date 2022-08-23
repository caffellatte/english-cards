import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Card as BootstrapCard } from 'react-bootstrap';
interface CardContent {
  id: number;
  word: string;
  transcription: string;
  translation: string;
  example: string;
  motivation: string;
}

const Card: React.FC<CardContent> = ({id, word, transcription, translation, example, motivation}) => {
const [side, setSide] = useState(true);

const changeSide = () => {
  if(side) {
    setSide(false);
  } else {
    setSide(true);
  }
}

return (
  <div>
    { side &&  <BootstrapCard className="bootstrap-card">
      <BootstrapCard.Header as="h5">{motivation}</BootstrapCard.Header>
      <BootstrapCard.Body>
        <BootstrapCard.Title>{word} {`[${transcription}]`}</BootstrapCard.Title>
        <BootstrapCard.Text>
          {example}
        </BootstrapCard.Text>
        <Button variant="primary" onClick={changeSide}>LEARN MORE</Button>
      </BootstrapCard.Body>
    </BootstrapCard>
    }
    { !side &&  <BootstrapCard className="bootstrap-card">
      <BootstrapCard.Header as="h5"><span>&nbsp;</span></BootstrapCard.Header>
      <BootstrapCard.Body>
        <BootstrapCard.Title>{translation}</BootstrapCard.Title>
        <BootstrapCard.Text>
          <span>&nbsp;</span>
        </BootstrapCard.Text>
        <Button variant="primary" onClick={changeSide}>LEARN MORE</Button>
      </BootstrapCard.Body>
    </BootstrapCard>
    }
  </div>

  );
}

export default Card;