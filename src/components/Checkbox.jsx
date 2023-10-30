
export default function Checkbox({ text, title, className, ...rest }) {
    return (
        <>
            <label className={className} title={title}>
                <input type="checkbox" {...rest} />
                <span> {text}</span>
            </label>
        </>
    );
}
