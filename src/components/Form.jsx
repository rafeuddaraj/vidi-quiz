import classes from "../styles/Form.module.css";

export default function Form({ children, className, ...rest }) {
    return (
        <>
            <form {...rest} className={`${className} ${classes.form}`}>
                {children}
            </form>
        </>
    );
}
