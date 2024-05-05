import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function Review(){

    const feelingData = useSelector((store) => store.feelingReducer) 
    const understandingData = useSelector((store) => store.understandingReducer)
    const supportedData = useSelector((store) => store.supportedReducer)
    const commentsData = useSelector((store) => store.commentsReducer)

    const [commentsInput, setCommentsInput] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()

    const submitFeedback = () => {

        axios({
            method: 'POST',
            url: '/api/feedback',
            data: {
                feelingData,
                understandingData,
                supportedData,
                commentsData
            }
            .then(() => {
                dispatch({type: 'RESET_FEEDBACK', payload: 0})
                history.push('/submit')
                sendStatus(201)
            })
            .catch((error) => {
                console.log('Error in POST /api/feedback', error);
                alert('Error saving your feedback! Please try again')
            })
        })
    }
    
    
    const submitComments = () => {
    
        dispatch ({
            type: 'SUBMIT_COMMENTS', 
            payload: commentsInput
        })
        history.push('/review')
    }
            return (
                <div>
                    <h1>Review your feedback</h1>
                    <p>Feelings: {feelingData} </p>
                    <p>Understanding: {understandingData} </p>
                    <p>Support: {supportedData} </p>
                    <p>Comments: {commentsData} </p>
                    <button onClick={submitFeedback}>Submit</button>
                </div>
              )

}

export default Review