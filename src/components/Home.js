import { useState } from "react";

const Home = () => {
    const [text, setText] = useState("");
    const [prediction, setPrediction] = useState("");

    const handlePredict = async () => {
        if (!text.trim()) {
            setPrediction("Text cannot be empty");
            return;
        }

        try {
            const response = await fetch('http://127.0.0.1:5000/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ text })
            });

            if (response.ok) {
                const data = await response.json();
                setPrediction(data.prediction);
            } else {
                setPrediction("Error: Unable to get prediction");
            }
        } catch (error) {
            setPrediction("Error: Unable to get prediction");
        }
    };

    return (
        <div className="container mt-4"> {/* .container: center the content and add padding to the sides, .mt-4: Adds top margin*/}
            <div className="row">
                <div className="col-md-8"> {/* .col-md-8: Column takes up 8 of the 12 columns on medium and larger screens */}
                    <p>
                        Social media platforms have ingrained themselves into our lives in today's connected society, 
                        providing a forum for connection, expression, and communication. However, this digital environment 
                        also presents difficulties, one of which is the increase in cyberbullying, a kind of online harassment 
                        and hostility. The growing use of social media has increased the impact of cyberbullying, which now 
                        affects people of all ages, genders, and races.
                    </p>
                    <p>
                        The "Cyberbullying Tweet Detection" project looks into the world of machine learning to tackle the 
                        essential problem of cyberbullying detection in online communication. This project focuses on the 
                        creation and implementation of cutting-edge machine learning models to automatically recognize and 
                        categorize tweet content containing cyberbullying.
                    </p>
                </div>
                <div className="col-md-4 text-center"> {/*.text-center: Centers text and inline elements horizontally */}
                    <img src="./images/cyberbullying.png" className="img-fluid" alt="Cyberbullying" />
                </div>
            </div>
            <div className="row my-4">
                <div className="col-md-12 text-center">
                    <h2>Try the Cyberbullying Detection Model</h2>
                    <textarea 
                        className="form-control my-3" 
                        placeholder="Enter text here..." 
                        value={text} 
                        onChange={(e) => setText(e.target.value)}
                    /> {/* .form-control: Applies Bootstrap's form control styles (e.g., padding, borders, etc.)*/}
                    <button className="btn btn-dark mb-3" onClick={handlePredict}>Predict</button>
                    <p className="fw-bold">{prediction}</p> 
                </div>
            </div>
            <div className="row"> {/* .row: Bootstrap grid system row to align columns */}
                <div className="col-md-12"> 
                    <p>
                        The machine learning models developed in the "Cyberbullying Tweet Detection" project have achieved 
                        an impressive accuracy rate of 83% in effectively identifying and categorizing cyberbullying content 
                        in English language tweets. Please note that while the system is highly accurate, it may not detect 
                        all instances of cyberbullying.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;