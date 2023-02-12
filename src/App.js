import { useState } from 'react';
import { questions } from './constants/question';
import AssesmentPage from './components/AssessmentPage';
import ProgressBar from './components/ProgressBar';
import Question from './components/Question';
import './App.scss';

function App() {
  const [answer, setAnswer] = useState(null);
  const [answers, setAnswers] = useState([null]);
  const [questionId, setQuestionId] = useState(1);
  const [error, setError] = useState("");
  const [result, setResult] = useState();
  const [nextButton, setNextButton] = useState("button");
  const [previousButton, setPreviousButton] = useState("button disable");
  const [buttonName, setButtonName] = useState("Next");

  const next = (props) => {
    if(props === "step4d") {
      return true;
    } else if(answer == null) {
      setError("Please select answer.")
      return false;
    } else {
      setError("")
      setPreviousButton("button");
      setAnswer(answers[questionId]);
      
      const tempAnswers = answers;
      tempAnswers[questionId-1] = answer;
      setAnswers(tempAnswers);
      return true;
    }
  }

  const previous = () => {
    setButtonName("Next");
    if(questionId < 2) {
      return;
    }
    setAnswer(answers[questionId - 2]);
  }

  const reset = () => {
    setAnswers([null]);
    setResult(null);
    setNextButton("button");
    setButtonName("Next");
  }

  const complete = () => {
    let score = 0;
    for (let i = 0; i <= 2; i++) {
      if(answers[i] === questions[i].Answer) {
        score += 5;
      }
    }
    score = (score / 3).toFixed(2);
    setResult(`Your score is ${score}`);
    setNextButton("button disable");
    setPreviousButton("button disable");
  }


  return (
    <div className="App">
      <AssesmentPage />

      <ProgressBar
        setQuestionId={setQuestionId}
        next={next} previous={previous}
        reset={reset} complete={complete}
        nextButton={nextButton}
        previousButton={previousButton}
        setPreviousButton={setPreviousButton}
        buttonName={buttonName}
        setButtonName={setButtonName}
      />

      <Question
        answer={answer}
        setAnswer={setAnswer}
        answers={answers}
        setAnswers={setAnswers}
        question={questions[questionId - 1]}
      />
      <p className='error'>{error}</p>
      <p className='result'>{result}</p> 
    </div>
  );
}

export default App;
