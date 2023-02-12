import React from "react";

import '../style/AssessmentPage.scss'

function AssesmentPage () {
    return (
        <div className="assessment-page">
            <p>Assesment Page</p>
            <button className="button" onClick={() => window.open("http://google.com")}>Back</button>
        </div>
    );
}

export default AssesmentPage;