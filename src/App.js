import React, { Component } from "react";
import { GlobalStyle } from "./components/GlobalStyle";
import { Container } from "./App.stiled";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import TitleMain from "./components/TitleMain/TitleMain";
import Statistics from "./components/Statistics/Statistics";
import Section from "./components/Section/Section";
import Notification from "./components/Notification/Notification";
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleClick = (key) => {
    this.setState((prevState) => {
      return { [key]: prevState[key] + 1 };
    });
  };
  countTotalFeedback = () => {
    const args = Object.values(this.state);
    const reducer = (prevStateValue, stateValue) => prevStateValue + stateValue;
    return args.reduce(reducer);
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.round((good / total) * 100) + "%" : 0;
  };
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <Container>
        <GlobalStyle />
        <TitleMain title="Feedback" />
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleClick}
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
}
export default App;
