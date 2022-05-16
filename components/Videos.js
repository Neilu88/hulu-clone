const Videos = ({ videos }) => {
  return (
    <div>
      {videos.map((video) => {
        return <Thumbnail video={video} />
      })}
    </div>
  )
}
export default Videos
