import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function SupportedInput(){
    const [supportedInput, setSupportedInput] = useState(0)
const dispatch = useDispatch()
const history = useHistory()

const handleSupportedInput = (e) => {
    setSupportedInput(e.target.value)
}

const submitSupported = () => {

    dispatch ({
        type: 'SUBMIT_SUPPORTED', 
        payload: supportedInput
    })
    history.push('/comments')
}
        return (
            <div>
                <h1>How well are you being supported?</h1>
                <input 
                    data-testid="input"
                    value={supportedInput}
                    type="number"
                    min="1"
                    max="5"
                    onChange={handleSupportedInput}
                />
                <button data-testid="next" onClick={submitSupported}>Next</button>
            </div>
          )

}

export default SupportedInput