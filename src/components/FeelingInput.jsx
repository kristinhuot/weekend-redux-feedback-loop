import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function FeelingInput(){

const [feelingInput, setFeelingInput] = useState(0)
const dispatch = useDispatch()
const history = useHistory()

const handleFeelingInput = (e) => {
    setFeelingInput(e.target.value)
}

const submitFeeling = () => {

    dispatch ({
        type: 'SUBMIT_FEELING', 
        payload: feelingInput
    })
    history.push('/understanding')
}
        return (
            <div>
                <h1>How are you feeling today?</h1>
                <input 
                    data-testid="input"
                    value={feelingInput}
                    type="number"
                    min="1"
                    max="5"
                    onChange={handleFeelingInput}
                />
                <button data-testid="next" onClick={submitFeeling}>Next</button>
            </div>
          )
}


export default FeelingInput