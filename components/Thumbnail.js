import Image from "next/image"
import { ThumbUpIcon } from "@heroicons/react/outline"
import { Result } from "postcss"
import { forwardRef } from "react"

const Thumbnail = forwardRef(({ video }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/"

  return (
    <div
      ref={ref}
      className="p-2 group cursor-pointer select-none transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
    >
      <Image
        draggable={false}
        layout="responsive"
        height={1080}
        width={1920}
        src={
          `${BASE_URL}${video.backdrop_path || video.poster_path}` ||
          `${BASE_URL}${video.poster_path}`
        }
      />
      <div className="p-2">
        <p className="truncate max-w-md">{video.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {video.title || video.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {video.media_type && `${video.media_type} •`}{" "}
          {video.release_date || video.first_air_date} •{" "}
          <ThumbUpIcon className="h-5 mx-2" /> {video.vote_count}
        </p>
      </div>
    </div>
  )
})
export default Thumbnail
