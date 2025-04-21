import { useState } from 'react'
import logo from '/vite.svg'

function Header() {

    const [now, setNow] = useState(new Date())

    setInterval(() => setNow(new Date()), 1000)

    return (

        <header className="row border b-2">
            <img src={logo} style={{width: 'auto'}} alt="Result" />

            <span className="col">Время: { now.toLocaleTimeString() }</span>
        </header>
    )
}

export default Header