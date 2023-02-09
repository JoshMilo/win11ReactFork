import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { SearchPane } from "./search"
import { WindowsStart, OldWindowsStart } from "./windows-start"
import { Configuration, OpenAIApi } from "openai"
import { useMutation } from "react-query"

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_AI_KEY,
})
const openai = new OpenAIApi(configuration)
console.log(import.meta.env)

// const response = await openai.createCompletion({
//   model: "text-davinci-003",
//   prompt: "Write a limerick about a cute cat",
//   temperature: 0,
//   max_tokens: 256,
//   top_p: 1,
//   frequency_penalty: 0,
//   presence_penalty: 0,
// })
// console.log(response)

export const StartMenu = () => {
  const searchResults = [
    {
      userName: "Evia Atkins",
      studentId: "1234",
      class: "English 101",
      assignments: [
        {
          id: "a1",
          title: "Examine the themes of prejudice in Toni Morrison's Beloved",
          createdDate: "2022-10-10",
          dueDate: "2022-10-17",
          turnedInDate: "2022-11-10",
          graded: true,
          submissions: [
            {
              id: "s1",
              assignmentId: "a1",
              studentId: "1234",
              submissionDate: "2022-11-10",
              grade: 89,
              feedback: "Overall a nice job, but you missed a few key points",
              file: [
                "Examine the themes of prejudice in Toni Morrison's Beloved",
              ],
            },
          ],
        },
        {
          id: "a2",
          title:
            "Discuss the themes of alienation and identity in J.D. Salinger's The Catcher in the Rye",
          createdDate: "2023-1-20",
          dueDate: "2023-5-17",
          turnedInDate: "",
          graded: true,
          submissions: [
            {
              id: "s2",
              assignmentId: "a2",
              studentId: "1234",
              submissionDate: "2022-11-10",
              grade: 100,
              feedback: "Great job! You are a natural writer!",
              file: ["themes of alienation and identity in J.D. Salinger"],
            },
          ],
        },
        {
          id: "a3",
          title: "The Future of Education: Adaptive Learning",
          createdDate: "2023-1-22",
          dueDate: "2023-2-18",
          turnedInDate: "",
          graded: false,
        },
        {
          id: "a3",
          title: "Analyze the theme of conformity in Animal Farm",
          createdDate: "2023-2-01",
          dueDate: "2023-3-15",
          turnedInDate: "",
          graded: false,
        },
      ],
      files: [
        {
          id: "f1",
          title: "prejudice in Toni Morrisons Beloved",
          createdDate: "2022-10-10",
          alsoSeenIn: ["Word", "Outlook"],
          sharedWidth: ["Reginald Milo", "Sarah Smith"],
          lastAccessed: "2022-12-12",
          lastSaved: "2022-12-12",
          fileType: "Word",
        },
        {
          id: "f2",
          title: "Conformity in Animal Farm",
          createdDate: "2023-2-01",
          alsoSeenIn: ["Word", "Outlook"],
          sharedWidth: ["Reginald Milo", "Sarah Smith"],
          lastAccessed: "2023-2-03",
          lastSaved: "2023-2-03",
          fileType: "Word",
        },
        {
          id: "f3",
          title: "My life in Photos",
          createdDate: "2023-2-02",
          alsoSeenIn: [],
          sharedWidth: [],
          lastAccessed: "2023-2-03",
          lastSaved: "2023-2-02",
          fileType: "Powerpoint",
        },
        {
          id: "f4",
          title: "Analyze the symbolism in The Lord of the Flies",
          createdDate: "2023-1-02",
          alsoSeenIn: [],
          sharedWidth: [],
          lastAccessed: "2023-1-30",
          lastSaved: "2023-1-10",
          fileType: "Powerpoint",
        },
      ],
    },
  ]
  const [query, setQuery] = useState("")
  const [match, setMatch] = useState({})
  const [atab, setTab] = useState("All")
  const [answer, setAnswer] = useState("")

  const getAnswers = async () => {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: query,
      temperature: 0,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    return response
  }

  const mutation = useMutation(getAnswers, {
    onSuccess: (data) => {
      console.log("data", data)
      setAnswer(data.data.choices[0].text)
    },
    onError: (error) => {
      console.log("error", error)
    },
  })

  const { align } = useSelector((state) => state.taskbar)
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

  // const [pwctrl, setPowCtrl] = useState

  const dispatch = useDispatch()
  const tabSw = (e) => {
    setTab(e.target.innerText.trim())
  }

  const clickDispatch = (event) => {
    var action = {
      type: event.target.dataset.action,
      payload: event.target.dataset.payload,
    }

    if (action.type) {
      dispatch(action)
    }

    if (
      action.type &&
      (action.payload == "full" || action.type == "EDGELINK")
    ) {
      dispatch({
        type: "STARTHID",
      })
    }

    if (action.type == "STARTALPHA") {
      var target = document.getElementById("char" + action.payload)
      if (target) {
        target.parentNode.scrollTop = target.offsetTop
      } else {
        var target = document.getElementById("charA")
        target.parentNode.scrollTop = 0
      }
    }

    if (event.key === "Enter") {
      dispatch({
        type: "STARTBOBO",
      })
      mutation.mutate()
    }
  }

  useEffect(() => {
    if (query.length) {
      for (var i = 0; i < start.allApps.length; i++) {
        if (start.allApps[i].name.toLowerCase().includes(query.toLowerCase())) {
          setMatch(start.allApps[i])
          break
        }
      }
    }
  }, [query])

  // const userName = useSelector((state) => state.setting.person.name)

  return (
    <div
      className="startMenu dpShad"
      data-hide={start.hide}
      style={{ "--prefix": "START" }}
      data-align={align}
    >
      {start.menu ? (
        <WindowsStart
          {...start}
          clickDispatch={clickDispatch}
          query={query}
          setQuery={setQuery}
          mutation={mutation}
          answer={answer}
        />
      ) : (
        <>
          <SearchPane
            start={start}
            setQuery={setQuery}
            query={query}
            match={match}
            tabSw={tabSw}
            atab={atab}
            clickDispatch={clickDispatch}
          />
          {/* <OldWindowsStart
            {...start}
            clickDispatch={clickDispatch}
            query={query}
            setQuery={setQuery}
          /> */}
        </>
      )}
    </div>
  )
}
