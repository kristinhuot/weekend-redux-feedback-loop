import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function CommentsInput(){
    const [commentsInput, setCommentsInput] = useState('')
const dispatch = useDispatch()
const history = useHistory()

const handleCommentsInput = (e) => {
    setCommentsInput(e.target.value)
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
                <h1>Any comments you want to leave?</h1>
                <input 
                    value={commentsInput}
                    type="text"
                    onChange={handleCommentsInput}
                />
                <button onClick={submitComments}>Next</button>
            </div>
          )

}


export default CommentsInput