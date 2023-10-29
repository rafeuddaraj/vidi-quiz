import classes from "../styles/MiniPlayer.module.css";
import img from "../assets/images/3.jpg";
import { useRef, useState } from "react";
import ReactPlayer from "react-player";

export default function MiniPlayer({ id, title }) {
    const [status, setStatus] = useState(false);
    const buttonRef = useRef();
    const url = `https://www.youtube.com/watch?v=${id}`;

    const toggleMiniPlayer = () => {
        if (!status) {
            setStatus(true);
            buttonRef.current.classList.remove(classes.floatingBtn);
        } else {
            setStatus(false);
            buttonRef.current.classList.add(classes.floatingBtn);
        }
    };

    return (
        <div
            className={`${classes.miniPlayer} ${classes.floatingBtn}`}
            ref={buttonRef}
            onClick={toggleMiniPlayer}>
            <span
                className={`material-icons-outlined ${classes.open}`}
                style={{ display: status && "none" }}>
                play_circle_filled
            </span>
            <span
                className={`material-icons-outlined ${classes.close}`}
                onClick={toggleMiniPlayer}>
                close
            </span>
            <ReactPlayer
                url={url}
                className={classes.player}
                width="300px"
                height="168px"
                playing
                controls
            />
            <p>{title}</p>
        </div>
    );
}
