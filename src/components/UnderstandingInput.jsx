import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function UnderstandingInput(){

const [understandingInput, setUnderstandingInput] = useState(0)
const dispatch = useDispatch()
const history = useHistory()

const handleUnderstandingInput = (e) => {
    setUnderstandingInput(e.target.value)
}

const submitUnderstanding = () => {

    dispatch ({
        type: 'SUBMIT_UNDERSTANDING', 
        payload: understandingInput
    })
    history.push('/supported')
}
        return (
            <div>
                <h1>How well are you understanding the content?</h1>
                <input 
                    data-testid="input"
                    value={understandingInput}
                    type="number"
                    min="1"
                    max="5"
                    onChange={handleUnderstandingInput}
                />
                <button data-testid="next" onClick={submitUnderstanding}>Next</button>
            </div>
          )

}

export default UnderstandingInput