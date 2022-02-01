import React, { useState } from 'react';
import { GlobalStyle } from './components/GlobalStyle';
import { Container } from './App.stiled';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import TitleMain from './components/TitleMain/TitleMain';
import Statistics from './components/Statistics/Statistics';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';
function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const stateData = { good, neutral, bad };
  const args = Object.values(stateData);
  const keys = Object.keys(stateData);
  const handleClick = key => {
    switch (key) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return console.log('error');
    }
  };
  const countTotalFeedback = () => {
    const reducer = (prevStateValue, stateValue) => prevStateValue + stateValue;
    return args.reduce(reducer);
  };
  const countPositiveFeedbackPercentage = () => {
    return total ? Math.round((good / total) * 100) + '%' : 0;
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  return (
    <Container>
      <GlobalStyle />
      <TitleMain title="Feedback" />
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(stateData)}
          onLeaveFeedback={handleClick}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          ></Statistics>
        )}
      </Section>
    </Container>
  );
}
export default App;
