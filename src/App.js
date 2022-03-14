import "./App.css";
import { useState } from "react";
import PropTypes from "prop-types";
import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/FeedbackOptions";
import Notification from "./components/Notification";
import Section from "./components/Section";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addToGood = () => {
    setGood(good + 1);
  };

  const addToNeutral = () => {
    setNeutral(neutral + 1);
  };

  const addToBad = () => {
    setBad(bad + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((good / total) * 100);
  };

    const total = countTotalFeedback();
    const positive = countPositiveFeedbackPercentage();

  return (
      <div className="App">
        <header className="App-header">
          <Section title="Please Leave Feedback">
            <FeedbackOptions onLeaveFeedback="good" options={addToGood}/>
            <FeedbackOptions onLeaveFeedback="neutral" options={addToNeutral}/>
            <FeedbackOptions onLeaveFeedback="bad" options={addToBad}/>
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
                positivePercentage={positive}/>
            )}
          </Section>
        </header>
      </div>
    );
}

App.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positive: PropTypes.number,
};

export default App;
