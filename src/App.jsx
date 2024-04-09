import { useRef, useState, forwardRef, useImperativeHandle, useEffect } from "react"
import "./App.css"

function VideoPlayer({ isPlaying, src }) {
    const playRef = useRef(null)
    useEffect(() => {
        if (isPlaying) {
            playRef.current.play()
        } else {
            playRef.current.pause()
        }
    },isPlaying)
    return <video ref={playRef} src={src} loop playsInline></video>
}

function App() {
    const [isPlaying, setIsPlaying] = useState(false)
    return (
        <>
            <button onClick={()=>setIsPlaying(!isPlaying)}>{isPlaying ? "暂停" : "播放"}</button>
            <VideoPlayer isPlaying={isPlaying} src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"></VideoPlayer>
        </>
    )
}

export default App
