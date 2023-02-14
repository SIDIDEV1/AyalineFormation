export default function QuestionForm() {
    const handleSubmit = (e)=> {
        e.preventDefault()
        console.log(e.target['input'].value);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input className="" name="input" type='datetime-local' placeholder="tapez ici ..." />
            <button>Submit</button>
        </form>
    )
}