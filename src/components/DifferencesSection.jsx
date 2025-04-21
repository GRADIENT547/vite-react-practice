import { useState } from "react"

import Button from "./Button/Button"
import { tanks } from "../data"

function DifferencesSection() {
    const [contentType, setContentType] = useState(null)

    function handleClick (type) {
        setContentType(type)
    }
    return (
        <section>
          <h3>Ещё факты про</h3>

          <Button isActive = {contentType === 'chal_2' } onClick={() => handleClick('chal_2')}>Chalenger-2</Button>
          <Button isActive = {contentType === 'is_7' } onClick={() => handleClick('is_7')}>ИС-7</Button>
          <Button isActive = {contentType === 'maus' } onClick={() => handleClick('maus')}>Maus</Button>

          { !contentType && <p>Нажми на кнопку</p>}
          { contentType && <p>{tanks[contentType]}</p>}
        
        </section>
    )
}

export default DifferencesSection