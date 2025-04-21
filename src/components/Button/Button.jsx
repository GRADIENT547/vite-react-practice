import './Button.css'

function Button( {children, onClick, isActive } ) {
    let classes = 'button'

    if (isActive) classes += ' active'

    return <button
    className={classes}
    onClick={onClick}
    >{children}</button>
}

export default Button