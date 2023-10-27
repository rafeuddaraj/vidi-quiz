import React from "react";

export default function Checkbox({ text, className, ...rest }) {
    return (
        <>
            <label className={className}>
                <input type="checkbox" {...rest} />
                <span> {text}</span>
            </label>
        </>
    );
}
