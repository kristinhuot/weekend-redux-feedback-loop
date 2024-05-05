import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";


function Review(){

    const feelingData = useSelector((store) => store.feelingReducer); 
    const understandingData = useSelector((store) => store.understandingReducer);
    const supportedData = useSelector((store) => store.supportedReducer);
    const commentsData = useSelector((store) => store.commentsReducer);

    console.log('feeling data is:', feelingData);

    const dispatch = useDispatch()
    const history = useHistory()

    const submitFeedback = () => {

        axios({
            method: "POST",
            url: "/api/feedback",
            data: {
                feeling: feelingData,
                understanding: understandingData,
                supported: supportedData,
                comments: commentsData,
            }
        })
            .then(() => {
                dispatch({ type: "SUBMIT_FEELING", payload: 0 });
                dispatch({ type: "SUBMIT_UNDERSTANDING", payload: 0 });
                dispatch({ type: "SUBMIT_SUPPORTED", payload: 0 });
                dispatch({ type: "SUBMIT_COMMENTS", payload: "" });
                history.push('/submit');
            })
            .catch((error) => {
                console.log('Error in POST /api/feedback', error);
                alert('Error saving your feedback! Please try again')
            })
        }
            return (
                <div>
                    <h1>Review your feedback</h1>
                    <p>Feelings: {feelingData} </p>
                    <p>Understanding: {understandingData} </p>
                    <p>Support: {supportedData} </p>
                    <p>Comments: {commentsData} </p>
                    <button data-testid="next" onClick={submitFeedback}>Submit</button>
                </div>
              )

}

export default Review