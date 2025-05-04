import { useState } from 'react'
import logo from '/vite.svg'
import { styled } from 'styled-components'

const HeaderContainer = styled.header`
    height: 50px;
    display: flex;
    padding: 0 2rem;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    background: #fafafa ;

`

function Header() {

    const [now, setNow] = useState(new Date())

    setInterval(() => setNow(new Date()), 1000)

    return (

        <HeaderContainer>
            <img src={logo} style={{width: 'auto'}} alt="Result" />
            <span className="col">Время: { now.toLocaleTimeString() }</span>
        </HeaderContainer>
    )
}

export default Header