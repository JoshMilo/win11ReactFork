import { pinnedApps, recentApps } from "../utils"

const defState = {
  pnApps: pinnedApps,
  rcApps: recentApps,
  hide: true,
  menu: false,
  showAll: false,
  lulz: false,
  assignments: [
    { name: "Math", due: "Today" },
    { name: "English", due: "Tomorrow" },
  ],
  alpha: false,
  pwctrl: false,
  curAlpha: "A",
  qksrch: [
    ["faClock", 1, "Today in history"],
    ["faChartLine", null, "Markets today"],
    ["faFilm", null, "New movies"],
    ["faNewspaper", 1, "Top news"],
  ],
}

const menuReducer = (state = defState, action) => {
  // console.log('menuReducer', staste);
  switch (action.type) {
    case "STARTSHW":
      return {
        ...state,
        menu: true,
        hide: false,
        pwctrl: false,
        lulz: true,
      }
    case "STARTHID":
      return {
        ...state,
        hide: true,
        showAll: false,
        pwctrl: false,
      }
    case "STARTOGG":
      return {
        ...state,
        hide: !(state.hide || !state.menu),
        menu: true,
        alpha: false,
        curAlpha: "A",
        pwctrl: false,
        showAll: state.menu && state.showAll ? true : null,
        lulz: state.lulz,
      }
    case "STARTBOBO":
      return {
        ...state,
        pwctrl: false,
        curAlpha: "A",
        lulz: !state.lulz,
      }

    case "STARTALL":
      return {
        ...state,
        showAll: !state.showAll,
        alpha: false,
        pwctrl: false,
        curAlpha: "A",
      }
    case "STARTALPHA":
      return {
        ...state,
        alpha: !state.alpha,
        pwctrl: false,
        curAlpha: action.payload || "A",
      }
    case "STARTSRC":
      return {
        ...state,
        hide: !(state.hide || state.menu),
        menu: false,
        pwctrl: false,
      }
    case "STARTPWC":
      return {
        ...state,
        pwctrl: true,
      }

    default:
      return state
  }
}

export default menuReducer
