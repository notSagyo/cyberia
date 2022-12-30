import { useEffect, useState } from 'react';
import Layout from '/components/Layout/Layout';
import Anchor from '/components/utils/Anchor/Anchor';
import { fortuneQuotes } from '/data/quotes';

const unusedQuotes = [...fortuneQuotes];

const getRandomQuote = () => {
  if (unusedQuotes.length <= 0) unusedQuotes.push(...fortuneQuotes);
  const randomQuoteIndex = Math.floor(Math.random() * unusedQuotes.length);
  const randomQuote = unusedQuotes[randomQuoteIndex].split('/');
  unusedQuotes.splice(randomQuoteIndex, 1);
  return randomQuote;
};

const FortunePage = () => {
  // Quotes are an array of strings where each elem is a new line
  const [randomQuote, setRandomQuote] = useState<string[]>([]);

  useEffect(() => setRandomQuote(getRandomQuote()), []);

  return (
    <Layout
      noPadding
      title="fortune_teller.exe"
      className="bgSpace"
      bodyProps={{ className: 'center' }}
    >
      {randomQuote.map((quote, i) => (
        <h2 key={i} className="h4">
          {quote}
        </h2>
      ))}
      <br />
      <Anchor onClick={() => setRandomQuote(getRandomQuote())}>
        TRY AGAIN
      </Anchor>
    </Layout>
  );
};

export default FortunePage;
