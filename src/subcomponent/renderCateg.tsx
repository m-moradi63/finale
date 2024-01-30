import { Repositspecial } from "../api/getrepoORG";
import { getRepos, Repositoryes } from "../api/getrepository";
import { Link } from "react-router-dom";
interface RenderCategProps {
  renderReposit: Array<Repositoryes>;}

function generateRepositoryLink(username , repository){
  return `/${username}/${repository}`
}


export function RenderCateg(props: RenderCategProps) {
  
  return (
    <div className="flex flex-wrap  ">
      {" "}
      {props.renderReposit.map((item) => {
        const link = generateRepositoryLink(item.owner.login , item.name)
        return (
          <div
            className="text-slate-400 border-b-[1px] border-neutral-300 mb-[1rem]  w-[45rem] z-0"
            key={item.node_id}
          >
            <div className="border-2 solid relative z-10  w-[45rem]  h-[6rem] rounded-md mr-[2rem] mb-[2rem] px-2.5 py-2.5">
              <div className="flex justify-between">
                <div className="flex  justify-left ">
                  <Link to={link} className="text-blue-600 text-xl ">
                    {item.name}
                  </Link>

                  <button className="border-2 solid w-[3.4rem] h-[1.2rem] rounded-xl ml-[1rem] ">
                    {item.visibility}
                  </button>
                </div>
               {/*  <button className="flex justify-between   items-center p-1  w-28 border-solid border-2 border-slate-300 border-indigo-600 ... rounded-md">
            
                  <button className="flex  items-center    w-10 border-solid border-l-2 border-slate-300 ... ">
                    <svg
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                      className="inline-block octicon octicon-triangle-down"
                    >
                      <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
                    </svg>
                  </button>
                </button> */}
              </div>
              &nbsp;&nbsp; &nbsp;&nbsp;
              <span>{item.description} </span>
              &nbsp;&nbsp;
              <div className="flex text-slate-400">
              <div className="me-2" >
                {item.language ? (
                  <div className="flex  ">
                    <span className=" solid w-[1rem] h-[1rem] bg-[#94a3b8] rounded-full inline-block"></span>
                    {item.language}
                  </div>
                ) : (
                  ""
                )}
           </div>
              <div className="me-2">
                  {item.watchers ? (
                    <div className="flex">
                      <svg
                        aria-label="stars"
                        role="img"
                        height="16"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="16"
                        data-view-component="true"
                        fill= " #808080"
                        className="octicon octicon-star "
                      >
                        <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                      </svg>
                      {item.watchers_count}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="me-2">
                  {item.forks_count ? (
                    <div className="flex">
                      <svg
                         fill= " #808080"
                        aria-label="fork"
                        role="img"
                        height="16"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="16"
                        data-view-component="true"
                        className="octicon octicon-repo-forked"
                      >
                        <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
                      </svg>
                      {item.forks_count}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  {item.updated_at?<div>update at{item.updated_at}</div>: ""}
                </div>
                </div>         
            </div>
          </div>
        );
      })}
    </div>
  );
}
