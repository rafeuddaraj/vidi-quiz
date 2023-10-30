import classes from "../styles/Video.module.css";

export default function Video({ title, image, noq }) {
    return (
        <div className={classes.video}>
            <img src={image} alt="Video" />
            <div title={title}>
                <p>{title}</p>
                <div className={classes.qmeta}>
                    <p>{noq} Questions</p>
                    <p>Total points : ({5 * noq})</p>
                </div>
            </div>
        </div>
    );
}
