import { useState } from "react";

export default function QuestionForm() {
    const [text, setText] = useState('Ma default value est ça')
    const handleSubmit = (e) => {
        e.preventDefault()

    }
    return (
        // <form onSubmit={handleSubmit} >
        <div>

            <textarea onChange={(e) => setText(e.target.value)} value={text}>

            </textarea>
            <button onClick={() => alert(text)}>Submit</button>
        </div>
        // </form>
    )
}