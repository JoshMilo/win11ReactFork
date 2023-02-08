import React from "react"
import { Image } from "../../utils/general"

export const PreviewCard = (props) => {
  return (
    <div className="previewCard">
      <div className="flex gap-2">
        <Image className="" src="img/icon/winWord.png" w={24} ext="png" />
        <p className="title text-xs font-semibold">Adaptive learning</p>
      </div>
      <div className="card">
        <Image
          className="overflow-hidden"
          src="img/asset/blurry-text.png"
          w={200}
          ext="png"
        />
      </div>
    </div>
  )
}
