import React from 'react';

const Hero = () => {
  const mainSentence = "Unlocking Tomorrow's Innovations: Smart Events, Brilliant Experiences.";
  const mainSentenceWords = mainSentence.split(" ");
  const formattedMainSentence = mainSentenceWords.map((word, index) => {
    if (index % 2 !== 0) {
      return <span key={index}>{word}<br /></span>;
    }
    return <span key={index}>{word} </span>;
  });

  return (
    <div className="hero-container">
      <h1 className="main-sentence">{formattedMainSentence}</h1>
      <p className="sub-sentence">
        Seamlessly add events to your calendar with Smart Event in just a few clicks.
      </p>
    </div>
  );
}

export default Hero;
