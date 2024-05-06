import "./App.css";
import { useState, useEffect } from "react";

import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const storedFeedback = JSON.parse(localStorage.getItem("feedback"));
    return storedFeedback || { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback =
    totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  const handleReset = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div className="container">
      <div className="card">
        <Description />
        <Options
          totalFeedback={totalFeedback}
          updateFeedback={updateFeedback}
          handleReset={handleReset}
        />
        {totalFeedback > 0 ? (
          <Feedback
            feedback={feedback}
            totalFeedback={totalFeedback}
            positiveFeedback={positiveFeedback}
            handleReset={handleReset}
          />
        ) : (
          <Notification message="No feedback yet" />
        )}
      </div>
    </div>
  );
};

export default App;
