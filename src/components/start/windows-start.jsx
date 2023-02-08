import React from "react"
import { useSelector } from "react-redux"
import { Icon, Image } from "../../utils/general"
import { AssignmentCard } from "./assignment-card"
import { PreviewCard } from "./preview-card"

const Loader = () => {
  return (
    <div className="" id="loader">
      <svg className="progressRing" height={48} width={48} viewBox="0 0 16 16">
        <circle cx="8px" cy="8px" r="7px"></circle>
      </svg>
    </div>
  )
}

export const WindowsStart = (props) => {
  const { query, setQuery, match, tabSw, atab, clickDispatch } = props

  const start = useSelector((state) => {
    var arr = state.startmenu,
      ln = (6 - (arr.pnApps.length % 6)) % 6

    for (var i = 0; i < ln; i++) {
      arr.pnApps.push({
        empty: true,
      })
    }

    for (i = 0; i < arr.rcApps.length; i++) {
      if (arr.rcApps[i].lastUsed < 0) {
        arr.rcApps[i].lastUsed = "Recently used"
      } else if (arr.rcApps[i].lastUsed < 10) {
        arr.rcApps[i].lastUsed = "Just Now"
      } else if (arr.rcApps[i].lastUsed < 60) {
        arr.rcApps[i].lastUsed += "m ago"
      } else if (arr.rcApps[i].lastUsed < 360) {
        arr.rcApps[i].lastUsed =
          Math.floor(arr.rcApps[i].lastUsed / 60) + "h ago"
      }
    }

    var allApps = [],
      tmpApps = Object.keys(state.apps)
        .filter((x) => x != "hz")
        .map((key) => {
          return state.apps[key]
        })

    tmpApps.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))

    for (i = 0; i < 27; i++) {
      allApps[i] = []
    }

    for (i = 0; i < tmpApps.length; i++) {
      var t1 = tmpApps[i].name.trim().toUpperCase().charCodeAt(0)
      if (t1 > 64 && t1 < 91) {
        allApps[t1 - 64].push(tmpApps[i])
      } else {
        allApps[0].push(tmpApps[i])
      }
    }

    arr.contApps = allApps
    arr.allApps = tmpApps
    return arr
  })

  return (
    <>
      <div className="stmenu" data-allapps={start.showAll}>
        <div className="menuUp">
          <div className="searchBar relative z-50">
            <Icon className="searchIcon" src="search" width={16} />
            <input
              type="text"
              onChange={(event) => {
                setQuery(event.target.value.trim())
              }}
              onKeyUp={clickDispatch}
              defaultValue={query}
              placeholder="What do you want to do?"
              autoFocus
            />
          </div>
          <div
            className="allCont"
            data-allapps={start.alpha}
            data-bobo={start.lulz}
          >
            <div className="appCont">
              <div
                className="allApps aiFrame win11Scroll"
                data-alpha={start.alpha}
              >
                <h2 className="text-xl font-semibold text-left">
                  Past essays related to your upcoming assignment
                </h2>
                <div className="flex gap-3 mb-7">
                  <PreviewCard />
                  <PreviewCard />
                  <PreviewCard />
                </div>
                <div className="flex flex-col items-start mb-10">
                  {/* <h2 className="text-xl font-semibold pl-8 pt-6">
                    Essays that are best to reference
                  </h2> */}
                  <AssignmentCard />
                  <AssignmentCard />
                  <AssignmentCard />
                </div>
                <div className="flex flex-col items-start glass-pane">
                  <h2 className="text-xl font-semibold pl-8 pt-6">
                    Essays from your 8th grade English class
                  </h2>
                  <ul>
                    <li>Essay 1</li>
                    <li>Essay 2</li>
                    <li>Essay 3</li>
                    <li>Essay 4</li>
                    <li>Essay 5</li>
                    <li>Essay 1</li>
                    <li>Essay 2</li>
                    <li>Essay 3</li>
                    <li>Essay 4</li>
                    <li>Essay 5</li>
                    <li>Essay 1</li>
                    <li>Essay 2</li>
                    <li>Essay 3</li>
                    <li>Essay 4</li>
                    <li>Essay 5</li>
                    <li>Essay 1</li>
                    <li>Essay 2</li>
                    <li>Essay 3</li>
                    <li>Essay 4</li>
                    <li>Essay 5</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

//OLD START MENU
export const OldWindowsStart = (props) => {
  const start = useSelector((state) => {
    var arr = state.startmenu,
      ln = (6 - (arr.pnApps.length % 6)) % 6

    for (var i = 0; i < ln; i++) {
      arr.pnApps.push({
        empty: true,
      })
    }

    for (i = 0; i < arr.rcApps.length; i++) {
      if (arr.rcApps[i].lastUsed < 0) {
        arr.rcApps[i].lastUsed = "Recently used"
      } else if (arr.rcApps[i].lastUsed < 10) {
        arr.rcApps[i].lastUsed = "Just Now"
      } else if (arr.rcApps[i].lastUsed < 60) {
        arr.rcApps[i].lastUsed += "m ago"
      } else if (arr.rcApps[i].lastUsed < 360) {
        arr.rcApps[i].lastUsed =
          Math.floor(arr.rcApps[i].lastUsed / 60) + "h ago"
      }
    }

    var allApps = [],
      tmpApps = Object.keys(state.apps)
        .filter((x) => x != "hz")
        .map((key) => {
          return state.apps[key]
        })

    tmpApps.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))

    for (i = 0; i < 27; i++) {
      allApps[i] = []
    }

    for (i = 0; i < tmpApps.length; i++) {
      var t1 = tmpApps[i].name.trim().toUpperCase().charCodeAt(0)
      if (t1 > 64 && t1 < 91) {
        allApps[t1 - 64].push(tmpApps[i])
      } else {
        allApps[0].push(tmpApps[i])
      }
    }

    arr.contApps = allApps
    arr.allApps = tmpApps
    return arr
  })

  return (
    <>
      <div className="stmenu" data-allapps={start.showAll}>
        <div className="menuUp">
          <div className="pinnedApps">
            <div className="stAcbar">
              <div className="gpname">Pinned</div>
              <div
                className="gpbtn prtclk"
                onClick={props.clickDispatch}
                data-action="STARTALL"
              >
                <div>All apps</div>
                <Icon fafa="faChevronRight" width={8} />
              </div>
            </div>
            <div className="pnApps">
              {start.pnApps.map((app, i) => {
                return app.empty ? (
                  <div key={i} className="pnApp pnEmpty"></div>
                ) : (
                  <div
                    key={i}
                    className="prtclk pnApp"
                    value={app.action != null}
                    onClick={props.clickDispatch}
                    data-action={app.action}
                    data-payload={app.payload || "full"}
                  >
                    <Icon className="pnIcon" src={app.icon} width={32} />
                    <div className="appName">{app.name}</div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="recApps win11Scroll">
            <div className="stAcbar">
              <div className="gpname">Recommended</div>
              <div className="gpbtn none">
                <div>More</div>
                <Icon fafa="faChevronRight" width={8} />
              </div>
            </div>
            <div className="reApps">
              {start.rcApps.slice(0, 6).map((app, i) => {
                return app.name ? (
                  <div
                    key={i}
                    className="rnApp"
                    value={app.action != null}
                    onClick={props.clickDispatch}
                    data-action={app.action}
                    data-payload={app.payload || "full"}
                  >
                    <Icon className="pnIcon" src={app.icon} width={32} />
                    <div className="acInfo">
                      <div className="appName">{app.name}</div>
                      <div className="timeUsed">{app.lastUsed}</div>
                    </div>
                  </div>
                ) : null
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="allCont" data-allapps={start.showAll}>
        <div className="appCont">
          <div className="stAcbar">
            <div className="gpname">All apps</div>
            <div
              className="gpbtn prtclk"
              onClick={props.clickDispatch}
              data-action="STARTALL"
            >
              <Icon className="chevLeft" fafa="faChevronLeft" width={8} />
              <div>Back</div>
            </div>
          </div>
          <div className="allApps win11Scroll" data-alpha={start.alpha}>
            {start.contApps.map((ldx, i) => {
              if (ldx.length == 0) return null

              var tpApps = []
              tpApps.push(
                <div
                  key={i}
                  className="allApp prtclk"
                  data-action="STARTALPHA"
                  onClick={props.clickDispatch}
                  id={`char${i == 0 ? "#" : String.fromCharCode(i + 64)}`}
                >
                  <div className="ltName">
                    {i == 0 ? "#" : String.fromCharCode(i + 64)}
                  </div>
                </div>
              )

              ldx.forEach((app, j) => {
                tpApps.push(
                  <div
                    key={app.name}
                    className="allApp prtclk"
                    onClick={props.clickDispatch}
                    data-action={app.action}
                    data-payload={app.payload || "full"}
                  >
                    <Icon className="pnIcon" src={app.icon} width={24} />
                    <div className="appName">{app.name}</div>
                  </div>
                )
              })

              return tpApps
            })}
          </div>
          <div className="alphaBox" data-alpha={start.alpha}>
            <div className="alphaCont">
              <div className="dullApp allApp">
                <div className="ltName">&</div>
              </div>
              {start.contApps.map((ldx, i) => {
                return (
                  <div
                    key={i}
                    className={
                      ldx.length == 0 ? "dullApp allApp" : "allApp prtclk"
                    }
                    data-action="STARTALPHA"
                    onClick={ldx.length == 0 ? null : props.clickDispatch}
                    data-payload={i == 0 ? "#" : String.fromCharCode(i + 64)}
                  >
                    <div className="ltName">
                      {i == 0 ? "#" : String.fromCharCode(i + 64)}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="menuBar">
        <div className="profile handcr">
          <Image
            className="rounded-full overflow-hidden"
            src="img/asset/ghost.png"
            w={26}
            ext
          />
          <div className="usName">Cristina Fernandez</div>
        </div>
        <div className="relative powerMenu">
          <div className="powerCont" data-vis={start.pwctrl}>
            <div
              className="flex prtclk items-center gap-2"
              onClick={props.clickDispatch}
              data-action="WALLALOCK"
            >
              <svg
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2a4 4 0 0 1 4 4v2h1.75A2.25 2.25 0 0 1 20 10.25v9.5A2.25 2.25 0 0 1 17.75 22H6.25A2.25 2.25 0 0 1 4 19.75v-9.5A2.25 2.25 0 0 1 6.25 8H8V6a4 4 0 0 1 4-4Zm5.75 7.5H6.25a.75.75 0 0 0-.75.75v9.5c0 .414.336.75.75.75h11.5a.75.75 0 0 0 .75-.75v-9.5a.75.75 0 0 0-.75-.75Zm-5.75 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm0-10A2.5 2.5 0 0 0 9.5 6v2h5V6A2.5 2.5 0 0 0 12 3.5Z"
                  fill="currentColor"
                />
              </svg>
              <span>Lock</span>
            </div>
            <div
              className="flex prtclk items-center gap-2"
              onClick={props.clickDispatch}
              data-action="WALLSHUTDN"
            >
              <svg
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.204 4.82a.75.75 0 0 1 .634 1.36A7.51 7.51 0 0 0 4.5 12.991c0 4.148 3.358 7.51 7.499 7.51s7.499-3.362 7.499-7.51a7.51 7.51 0 0 0-4.323-6.804.75.75 0 1 1 .637-1.358 9.01 9.01 0 0 1 5.186 8.162c0 4.976-4.029 9.01-9 9.01C7.029 22 3 17.966 3 12.99a9.01 9.01 0 0 1 5.204-8.17ZM12 2.496a.75.75 0 0 1 .743.648l.007.102v7.5a.75.75 0 0 1-1.493.102l-.007-.102v-7.5a.75.75 0 0 1 .75-.75Z"
                  fill="currentColor"
                />
              </svg>
              <span>Shut down</span>
            </div>
            <div
              className="flex prtclk items-center gap-2"
              onClick={props.clickDispatch}
              data-action="WALLRESTART"
            >
              <svg
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4.5a7.5 7.5 0 1 1-7.419 6.392c.067-.454-.265-.892-.724-.892a.749.749 0 0 0-.752.623A9 9 0 1 0 6 5.292V4.25a.75.75 0 0 0-1.5 0v3c0 .414.336.75.75.75h3a.75.75 0 0 0 0-1.5H6.9a7.473 7.473 0 0 1 5.1-2Z"
                  fill="currentColor"
                />
              </svg>
              <span>Restart</span>
            </div>
          </div>
          <svg
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            onClick={props.clickDispatch}
            data-action="STARTPWC"
          >
            <path
              d="M8.204 4.82a.75.75 0 0 1 .634 1.36A7.51 7.51 0 0 0 4.5 12.991c0 4.148 3.358 7.51 7.499 7.51s7.499-3.362 7.499-7.51a7.51 7.51 0 0 0-4.323-6.804.75.75 0 1 1 .637-1.358 9.01 9.01 0 0 1 5.186 8.162c0 4.976-4.029 9.01-9 9.01C7.029 22 3 17.966 3 12.99a9.01 9.01 0 0 1 5.204-8.17ZM12 2.496a.75.75 0 0 1 .743.648l.007.102v7.5a.75.75 0 0 1-1.493.102l-.007-.102v-7.5a.75.75 0 0 1 .75-.75Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </>
  )
}
