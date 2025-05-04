import { useState } from "react"
import Button from "./Button/Button"

function FeedbackSection () {
    const [form, setForm] = useState({
        name: '',
        hasError: true,
        reason: 'help',
    })
    // const [name, setName] = useState('')
    // const [hasError, setHasError] = useState(false)
    // const [reason, setReason] = useState('help')

    function handleNameChange(event) {
        // console.log(event.target.value)
        // setName(event.target.value)
        // setHasError(event.target.value.trim().length === 0)
        setForm(prev => ({
            ... prev,
            name: event.target.value,
            hasError: event.target.value.trim().length === 0,
        }))
        // setForm({
        //     name: event.target.value,
        //     hasError: event.target.value.trim().length === 0,
        //     reason: form.reason,
        // })
    }

    return (
        <section>
            <h3>Обратная связь</h3>

            <form>
                <label htmlFor="name">Ваше имя</label>
                <input
                type="text"
                id="name"
                className="control"
                value={form. name}
                style={{
                    border: form.hasError ? '1px solid red' : null,
                }}
                onChange={handleNameChange} />

                <label htmlFor="reason"></label>
                <select id="reason" className="control" value={form.reason} onChange={event => setForm(prev => ({... prev, reason: event.target.value}))}>
                    <option value="error">Ошибка</option>
                    <option value="help">Нужна помощь</option>
                    <option value="suggest">Предложение</option>
                </select>

                <pre>{JSON.stringify(form, null, 2)}</pre>

                <Button disabled={form.hasError} isActive={!form.hasError}>Отправить</Button>
            </form>
        </section>
    )
}

export default FeedbackSection