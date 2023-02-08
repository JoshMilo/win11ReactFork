import React from "react"
import { Image } from "../../utils/general"

export const AssignmentCard = (props) => {
  return (
    <div className="assignmentCard flex w-full p-2 mb-2">
      <div className="flex items-center pl-4">
        <Image className="" src="img/icon/winWord.png" w={24} ext="png" />
      </div>
      <div className="flex flex-col grow items-start pl-4">
        <p className="m-0 p-0 title text-xs font-semibold">Super duper title</p>
        <p className="m-0 p-0 text-xs">Due on 24 setPowCtrl</p>
        <p className="m-0 p-0 text-xs">Algebra</p>
      </div>
      <div className="flex pr-4">
        <p className="text-xs text-slate-700 m-0">50 points</p>
      </div>
    </div>
  )
}
