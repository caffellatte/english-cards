import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';
import CardList from '../components/CardList';

const motivation = [
  { id: 1, phrase: "Word of the Day" },
  { id: 2, phrase: "Learning is not a spectator sport" },
  { id: 3, phrase: "There is no substitute for hard work" },
  { id: 4, phrase: "Today a reader, tomorrow a leader" },
  { id: 5, phrase: "If you can dream it, you can do it" }
];
const words = [
  {
    id: 1,
    word: "house",
    transcription: "haʊs",
    translation: "дом",
    example: "I ordered a bottle of their house kvass"
  },
  {
    id: 2,
    word: "world",
    transcription: "wɜ:ld ",
    translation: "мир",
    example: "The whole world hates a Monday"
  },
  {
    id: 3,
    word: "work",
    transcription: "wɜ:k",
    translation: "работа",
    example: "New contracts force employees to work longer hours"
  },
  {
    id: 4,
    word: "sun",
    transcription: "sʌn",
    translation: "солнце",
    example: "The sun shone from a cloudless sky"
  },
  {
    id: 5,
    word: "once",
    transcription: "wʌns",
    translation: "однажды",
    example: "Once the grapes were pressed, the juice was put into barrels"
  }
];

const Cards = () => {
  return(
    <section>
      <Header />
      <Body>
        <CardList words={words} motivation={motivation} />
      </Body>
      <Footer />
    </section>
  );
};

export default Cards;