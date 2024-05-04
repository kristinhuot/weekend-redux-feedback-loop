import { useState } from "react";
import { useDispatch } from "react-redux";

function FeelingInput(){

const [feelingInput, setFeelingInput] = useState(0)

const dispatch = useDispatch()

const submitFeeling = (event) => {
    event.preventDefault()

    dispatch ({
        type: 'SUBMIT_FEELING', 
        payload: feelingInput
    })
    setFeelingInput('')

        return (
            <form onSubmit={submitFeeling}>
              <input 
                value={feelingInput}
                onChange={(e) => setFeelingInput(e.target.value)}
              />
              <button>Next</button>
            </form>
          )
}

}

export default FeelingInput