import { useState } from "react";
import useVideoList from "../hooks/useVideoList";
import Video from "./Video";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Videos() {
    const [page, setPage] = useState(1);
    const { hasMore, videos, error, loading } = useVideoList(page);
    return (
        <div>
            {videos.length > 0 && (
                <InfiniteScroll
                    dataLength={videos.length}
                    hasMore={hasMore}
                    next={() => setPage((prev) => prev + 8)}
                    loader="loading....">
                    {videos.map((video) =>
                        video.noq !== 0 ? (
                            <Link key={video.youtubeID} to={{
                                pathname:`/quiz/${video.youtubeID}`,
                                state: {
                                    videoTitle:video.title
                                }
                            }}>
                                <Video
                                    title={video.title}
                                    image={`https://img.youtube.com/vi/${video.youtubeID}/maxresdefault.jpg`}
                                    noq={video.noq}
                                />
                            </Link>
                        ) : (
                            <Video
                                key={video.youtubeID}
                                title={video.title}
                                image={`https://img.youtube.com/vi/${video.youtubeID}/maxresdefault.jpg`}
                                noq={video.noq}
                            />
                        )
                    )}
                </InfiniteScroll>
            )}
            {!loading && videos.length === 0 && <p>No Data Found</p>}
            {error && <p>There was an error</p>}
            {loading && <p>Loading...</p>}
        </div>
    );
}
