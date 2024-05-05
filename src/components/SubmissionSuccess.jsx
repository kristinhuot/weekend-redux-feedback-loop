import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

function SubmissionSuccess(){

    const history = useHistory()

    const backToTheTop = () => {
        history.push('/')
    }

    return (
        <div>
            <h1>Feedback!</h1>
            <p>Thank you for your thoughts! Your feedback has been submitted. Have more to say?</p>
            <button data-testid="next" onClick={backToTheTop}>Leave New Feedback</button>
        </div>
      )

}

export default SubmissionSuccess