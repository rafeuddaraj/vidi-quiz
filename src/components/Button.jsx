import classes from '../styles/Button.module.css'

export default function Button({children,className}) {
    return (
        <button className={`${classes.button} ${className}`}>
            {children}
        </button>
    );
}
