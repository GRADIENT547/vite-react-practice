import React from "react"

// function IntroSection() {
//     return (
//         <section>
//             <h1 className="centered">Т-14 «Армата»</h1>
//             <h3 className="centered" style={{color: "#666"}}>
//                  — первый в мире серийный танк с «неводимой» башней: экипаж сидит в бронекапсуле, а пушка управляется дистанционно! 💀🎮
//             </h3>
//         </section>
//     )
// }

// export default IntroSection

function IntroSection() {
    return React.createElement('section',
        null, [
            React.createElement('h1', {key: 'title', className: 'centered'}, 'T-14'),
            React.createElement('h3', {key: 'subtitle', className: 'centered', color: '#666'}, '— первый в мире серийный танк с «неводимой» башней: экипаж сидит в бронекапсуле, а пушка управляется дистанционно! 💀🎮')
        ])
}

export default IntroSection