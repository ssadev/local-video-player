import Plyr, { PlyrOptions, PlyrInstance, PlyrSource } from "plyr-react"
import "plyr-react/plyr.css"

const videoSource = {
    video: 'http://localhost:41053/WALL-E.2008.1080p.BrRip.x264.YIFY.mp4',
    poster: 'http://localhost:3000/thubm.png',
    caption: 'http://localhost:3000/subtitle2.vtt'
};
const playerConfig: PlyrInstance = {
    // sources: [{ src: videoSource, type: 'video/mp4', size: 720 }],
    // type: 'video',
    source: {
        sources: [{ src: videoSource.video, type: 'video/mp4', size: 720 }],
        type: 'video',
        previewThumbnails: { src: videoSource.poster, enabled: true },
        poster: videoSource.poster,
        tracks: [
            {
                src: videoSource.caption,
                kind: 'captions',
                label: 'English',
                srcLang: 'en',
                default: true,
            }
        ],
    },
}
const VideoPlayer = () => {

    return (
        <div>
            <div className="w-full flex justify-center items-center" >
                <Plyr {...playerConfig} />
            </div>
            {/* <Plyr source={{ sources: [{ src: videoSource, type: 'video/mp4', size: 720 }], type: 'video' }} /> */}
        </div>
    )
}

export default VideoPlayer