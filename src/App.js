import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import About from "./pages/About";
import AboutIconLink from "./components/AboutIconLink";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedBack = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedBack = (newFeedBack) => {
    newFeedBack.id = uuidv4();
    console.log(typeof newFeedBack.id);
    setFeedback([newFeedBack, ...feedback]);
  };

  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedBack} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedBack}
                />
              </>
            }
          ></Route>
          <Route path="/about" element={<About />} />
        </Routes>

        <AboutIconLink />
      </div>
    </Router>
  );
}

export default App;
