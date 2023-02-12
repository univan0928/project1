import React, { useState } from "react";

import '../style/ProgressBar.scss'

function ProgressBar(props) {
    
    const[step, setStep] = useState("step1");
    const[class1, setClass1] = useState("progress-step");
    const[class2, setClass2] = useState("progress-step");
    const[class3, setClass3] = useState("progress-step");
    const[class4, setClass4] = useState("progress-step");

    const next = () => {
        if(props.next(step)) {
            if (step === 'step1') {
                setStep('step2');
                props.setQuestionId(2);
                setClass1("progress-step is-complete");
                setClass2("progress-step is-active");

            } else if (step === 'step2') {
                setStep('step3');
                props.setQuestionId(3);
                setClass2("progress-step is-complete");
                setClass3("progress-step is-active");
    
            } else if (step === 'step3') {
                setStep('step4d');
                props.setQuestionId(4);
                props.setButtonName("Complete");
                setClass3("progress-step is-complete");
                setClass4("progress-step is-active");
    
            } else if (step === 'step4d') {
                setStep('complete');
                setClass4("progress-step is-complete is-active");

                props.complete();
            }
        }
    }

    const previous = () => {
        props.previous();

        if (step === 'step2') {
            setStep('step1');
            props.setQuestionId(1);
            props.setPreviousButton("button disable");
            setClass1("progress-step is-previous");

        } else if (step === 'step3') {
            setStep('step2');
            setClass2("progress-step is-previous");
            props.setQuestionId(2);

        } else if (step === 'step4d') {
            setStep('step3');
            props.setQuestionId(3);
            setClass3("progress-step is-previous");
            setClass4("progress-step");

        } else if (step === 'complete') {
            setStep('step4d');
            props.setButtonName("Next");
        }
    };

    const reset = () => {
        setStep('step1');
        props.setQuestionId(1);
        props.reset();
        props.setPreviousButton("button disable");
        setClass1("progress-step");
        setClass2("progress-step");
        setClass3("progress-step");
        setClass4("progress-step");
    };

    return (
        <div className="progress-bar">
            <div className="progress">
                <div className="progress-track"></div>

                <div id="step1" className={class1}>
                    Step One
                </div>

                <div id="step2" className={class2}>
                    Step Two
                </div>

                <div id="step3" className={class3}>
                    Step Three
                </div>

                <div id="step4" className={class4}>
                    Complete
                </div>
            </div>
            <div className="progress-button">
                <button className={props.previousButton} id="previous" onClick={previous}>Previous</button>
                <button className="button" id="reset" onClick={reset}>Reset</button>
                <button className={props.nextButton} id="next" onClick={next}>{props.buttonName}</button>
            </div>
        </div>
    );
}

export default ProgressBar;


