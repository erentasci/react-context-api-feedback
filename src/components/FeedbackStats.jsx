import React from "react";
// import PropTypes from "prop-types";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext);

  // Calculate Ratings Average

  let average =
    feedback.reduce((acc, current) => {
      // acc = 0
      // current = current feedback item
      return acc + current.rating;
    }, 0) / feedback.length;

  average = average.toFixed(1).replace(/[.,]0$/, ""); //adjusting the part after the point

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating:{isNaN(average) ? 0 : average}</h4>
    </div>
  );
};

// FeedbackStats.propTypes = {
//   feedback: PropTypes.array.isRequired,
// };

export default FeedbackStats;
