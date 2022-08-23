import React from 'react';
import { Word } from '../interfaces/Word';
import { Motivation } from '../interfaces/Motivation';
import Card from './Card';

interface ChildProps {
  words: Word[];
  motivation: Motivation[];
}

const CardList: React.FC<ChildProps> = ({words, motivation}) => {
  return(
    <div className="container ht-100  align-items-center">

    <div className="container-fluid">
    <h2>Cards</h2>
      {words.map(word => {
        let moto = motivation[word.id-1].phrase;
        console.log(moto);
        return(
          <Card
          key={word.id}
          id={word.id}
          word={word.word}
          transcription={word.transcription}
          translation={word.translation}
          example={word.example}
          motivation={moto}
        />
        );
      })}
    </div>
  </div>
  );
};

export default CardList;