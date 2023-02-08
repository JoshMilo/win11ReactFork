import React from "react"
import { Icon } from "../../utils/general"

export const SearchPane = (props) => {
  const { query, setQuery, match, tabSw, atab, clickDispatch, start } = props
  return (
    <div className="searchMenu">
      <div className="searchBar">
        <Icon className="searchIcon" src="search" width={16} />
        <input
          type="text"
          onChange={(event) => {
            setQuery(event.target.value.trim())
          }}
          defaultValue={query}
          placeholder="Type here to search"
          autoFocus
        />
      </div>
      <div className="flex py-4 px-1 text-xs">
        <div className="opts w-1/2 flex justify-between">
          <div value={atab == "All"} onClick={tabSw}>
            All
          </div>
          <div value={atab == "Apps"} onClick={tabSw}>
            Apps
          </div>
          <div value={atab == "Documents"} onClick={tabSw}>
            Documents
          </div>
          <div value={atab == "Web"} onClick={tabSw}>
            Web
          </div>
          <div value={atab == "More"} onClick={tabSw}>
            More
          </div>
        </div>
      </div>
      <div className="shResult w-full flex justify-between">
        <div className="leftSide flex-col px-1" data-width={query.length != 0}>
          <div className="text-sm font-semibold mb-4">
            {query.length ? "Best match" : "Top apps"}
          </div>
          {query.length ? (
            <div className="textResult h-16">
              <div className="smatch flex my-2 p-3 rounded">
                <Icon src={match.icon} width={24} />
                <div className="matchInfo flex-col px-2">
                  <div className="font-semibold text-xs">{match.name}</div>
                  <div className="text-xss">App</div>
                </div>
              </div>
              <div
                className="smatch flex my-2 p-3 rounded handcr prtclk"
                onClick={clickDispatch}
                data-action="EDGELINK"
                data-payload={query}
              >
                <Icon className="blueicon" src="search" ui width={20} />
                <div className="matchInfo flex-col px-2">
                  <div className="font-semibold text-xs">Search online</div>
                  <div className="text-xss">Web</div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="topApps flex w-full justify-between">
                {start.rcApps.slice(1, 7).map((app, i) => {
                  return (
                    <div
                      key={i}
                      className="topApp pt-6 py-4 ltShad prtclk"
                      onClick={clickDispatch}
                      data-action={app.action}
                      data-payload={app.payload || "full"}
                    >
                      <Icon src={app.icon} width={30} />
                      <div className="text-xs mt-2">{app.name}</div>
                    </div>
                  )
                })}
              </div>
              <div className="text-sm font-semibold mt-8">Quick Searches</div>
              <div className="quickSearches mt-2">
                {start.qksrch.map((srch, i) => {
                  return (
                    <div
                      key={i}
                      className="qksrch flex items-center p-3 my-1 handcr prtclk"
                      onClick={clickDispatch}
                      data-action="EDGELINK"
                      data-payload={srch[2]}
                    >
                      <Icon fafa={srch[0]} reg={srch[1]} />
                      <div className="ml-4 text-sm">{srch[2]}</div>
                    </div>
                  )
                })}
              </div>
            </>
          )}
        </div>
        {query.length ? (
          <div className="w-2/3 rightSide rounded">
            <Icon className="mt-6" src={match.icon} width={64} />
            <div className="">{match.name}</div>
            <div className="text-xss mt-2">App</div>
            <div className="hline mt-8"></div>
            <div
              className="openlink w-4/5 flex prtclk handcr pt-3"
              onClick={clickDispatch}
              data-action={match.action}
              data-payload={match.payload ? match.payload : "full"}
            >
              <Icon className="blueicon" src="link" ui width={16} />
              <div className="text-xss ml-3">Open</div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
