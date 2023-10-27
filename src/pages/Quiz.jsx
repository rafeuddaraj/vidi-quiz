import Answer from "../components/Answer";
import ProgressBar from "../components/ProgressBar";
import MiniPlayer from "../components/MiniPlayer";

export default function Quiz() {
    return (
        <>
            <h1>Pick three of your favorite Star Wars Flims</h1>
            <h4>Question can have multiple answers</h4>
            <Answer />
            <ProgressBar />
            <MiniPlayer />
        </>
    );
}
