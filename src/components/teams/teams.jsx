import React, { useEffect } from "react"
import {
  Button,
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  DialogBody,
  DialogActions,
  DialogContent,
  Label,
  Input,
  useId,
  Textarea,
} from "@fluentui/react-components"
import { PeopleAdd24Regular } from "@fluentui/react-icons"

const ClassTeam = () => {
  return (
    <div className="classTeam">
      <div className="sideBar relative">
        {/* <img src="img/sidebar.png" alt="" /> */}
      </div>
      <div>
        <img
          className="relative w-full left-[-1px] top-[2px]"
          src="img/createdclass3.png"
          alt=""
        />
      </div>
    </div>
  )
}

const TeamTypes = (props) => {
  const [value, setValue] = React.useState(false)
  console.log("teams", props)

  // const dialog = document.querySelector(".fui-DialogSurface")
  // const dialogBody = document.querySelector(".fui-DialogBody")
  // if (dialog) {
  //   console.log("fired")
  //   dialogBody.classList.add("!max-w-fit")
  //   dialog.classList.add("!max-w-fit")
  // }

  return (
    <>
      <DialogTitle>
        {value ? "Create your team" : "Select a team type"}
      </DialogTitle>
      <DialogContent className={`flex gap-4 overflow-visible`}>
        <div className={`${value && "hidden"} relative`}>
          <img src="img/Webview.png" className="w-full" alt="" />
          <button
            className="teamTypeGhost !max-w-fit"
            onClick={setValue.bind(null, true)}
          ></button>
        </div>
        <div className={`${!value && "hidden"}`}>
          <CreateYourTeam value={value} />
        </div>
      </DialogContent>

      {value && (
        <DialogActions>
          <DialogTrigger disableButtonEnhancement action="close">
            <Button appearance="secondary">Cancel</Button>
          </DialogTrigger>
          <DialogTrigger disableButtonEnhancement>
            <Button onClick={props.routeToTeam} appearance="primary">
              Next
            </Button>
          </DialogTrigger>
        </DialogActions>
      )}

      {!value && (
        <DialogActions>
          <DialogTrigger disableButtonEnhancement>
            <Button appearance="secondary">Cancel</Button>
          </DialogTrigger>
        </DialogActions>
      )}
    </>
  )
}

const CreateYourTeam = (props) => {
  const inputId = useId("input")
  const inputId2 = useId("input2")
  const textareaId = useId("textarea")

  return (
    <>
      <DialogContent className="flex flex-col justify-center">
        <p>
          Educators or students can create teams to work together on any shared
          goal, project, or activity.
        </p>
        <div className=" flex flex-col mb-6">
          <Label htmlFor={inputId}>Team name</Label>
          <Input id={inputId} appearance="filled-darker" />
        </div>
        <div className=" flex flex-col mb-6">
          <Label htmlFor={textareaId}>Description</Label>
          <Textarea
            id={textareaId}
            appearance="filled-darker"
            defaultValue="Let people know what this team is all about"
          />
        </div>
        <div className=" flex flex-col mb-6">
          <Label htmlFor={inputId}>Privacy</Label>
          <Input
            defaultValue="Private- Only team owners can add members"
            appearance="filled-darker"
            id={inputId2}
          />
        </div>
      </DialogContent>
    </>
  )
}

const CreateTeam = (props) => {
  const [show, setShow] = React.useState(false)

  const clickShow = () => {
    setShow(!show)
  }

  return (
    <div className="createTeam relative">
      <button className="backBtn" onClick={props.clickShow}></button>
      <Dialog className="w-fit lulz">
        <DialogTrigger disableButtonEnhancement>
          <div className="relative">
            <button className="ghost-btn"></button>
          </div>
        </DialogTrigger>
        <DialogSurface>
          <DialogBody>
            <TeamTypes
              clickShow={props.clickShow}
              show={show}
              routeToTeam={props.routeToTeam}
            />
          </DialogBody>
        </DialogSurface>
      </Dialog>

      <img className="w-full" src="img/createTeam.png" alt="" />
    </div>
  )
}

const Classes = (props) => {
  return (
    <div className="frame">
      <div className="relative w-full">
        {/* <img className="w-full" src="img/frame.png" alt="" /> */}
        <div className="flex justify-between items-center mb-8">
          <div className="font-bold m-0">Teams</div>

          <div className="flex gap-2 items-center">
            <div>
              <img src="img/options.png" alt="" />
            </div>
            <div className="">
              <Button onClick={props.clickShow} icon={<PeopleAdd24Regular />}>
                Join or create team
              </Button>
            </div>
          </div>
        </div>
        <img className="w-full" src="img/classes.png" alt="" />
      </div>
    </div>
  )
}

export const Teams = (props) => {
  // add a css class to the body
  // document.body.classList.add("overflow-hidden")
  // remove the css class from the body

  return (
    <div className="teams">
      <div className="header w-full">
        <img className="w-full max-h-[48px]" src="img/header2.png" alt="" />
      </div>
      <div className="leftRail  relative">
        <img
          className="w-full relative top-[-4px]"
          src="img/leftRail2.png"
          alt=""
        />
      </div>
      <div className="">
        {!props.openCreateTeam && !props.teamCreated && <Classes {...props} />}
        {/* <ClassTeam /> */}
        {props.openCreateTeam && !props.teamCreated && (
          <CreateTeam {...props} />
        )}
        {props.teamCreated && <ClassTeam />}
      </div>
    </div>
  )
}
