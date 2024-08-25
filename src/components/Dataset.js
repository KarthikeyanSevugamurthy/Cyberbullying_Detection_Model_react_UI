const Dataset = () => {
    return (
        <div className="container mt-4">
            <h1 className="text-center mb-3">About the Dataset</h1> {/* .text-center: Centers text, .mb-3: Adds bottom margin */}
            <div className="row mb-2"> {/* .row: Bootstrap grid system row*/}
                <div className="col-md-6 mb-3"> {/* .col-md-6: Column takes up 6 of 12 columns on medium and larger screens, .mb-3: Adds bottom margin */}
                    <h2>Dataset</h2>
                    <p>
                        You can find the source of the dataset <a href="https://www.kaggle.com/datasets/andrewmvd/cyberbullying-classification" target="_blank" rel="noreferrer">here</a>.
                    </p>
                    <p>
                        Dataset consists of two columns: tweet_text and cyberbullying_type. This dataset contains 47692 tweets and cyberbullying_type is labelled according to the class of cyberbullying: Age, Ethnicity, Gender, Religion, Other type of cyberbullying, Not cyberbullying. The data has been balanced in order to contain ~8000 of each class. As mentioned by the authors in Kaggle, these tweets either describe a bullying event or are the offense themselves, therefore explore it to the point where you feel comfortable.
                    </p>
                </div>
                <div className="col-md-6 mb-3 d-flex justify-content-center align-items-center">
                    <img src="./images/sample-dataset.png" className="img-fluid" alt="Sample Dataset" /> {/* .img-fluid: Makes the image responsive */}
                </div>
            </div>
            <div className="row mb-3 flex-md-row-reverse"> {/* .flex-md-row-reverse: Reverses column order on medium and larger screens */}
                <div className="col-md-6 mb-3">
                    <h2>Cyberbullying type classes description</h2>
                    <ul className="ps-3"> {/*.ps-3: Adds padding start */}
                        <li>Age: This class refers to instances of cyberbullying that revolve around someone's age. It could involve making fun of someone’s age, or using age-related insults to hurt them.</li>
                        <li>Ethnicity: This class refers to tweets that involve bad words.</li>
                        <li>Gender: Involves attacking someone based on their gender.</li>
                        <li>Religion: Cyberbullying that is targeted on a person's religion or beliefs.</li>
                        <li>Other Type of Cyberbullying: This class covers any form of online harassment that doesn't fit the defined categories but still causes harm and distress.</li>
                        <li>Not Cyberbullying: Situations where the content or behavior does not meet the criteria for cyberbullying.</li>
                    </ul>
                </div>
                <div className="col-md-6 mb-3 d-flex justify-content-center align-items-center">
                    <img src="./images/class-distribution.png" className="img-fluid" alt="Class distribution" />
                </div>
            </div>
        </div>
    );
}

export default Dataset;