import Thumbnail from "./Thumbnail"
import FlipMove from "react-flip-move"

const Videos = ({ videos }) => {
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {videos.map((video) => {
        return <Thumbnail key={video.id} video={video} />
      })}
    </FlipMove>
  )
}
export default Videos
