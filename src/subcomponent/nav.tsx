import { Profilecontext } from "../context.ts";
import { useContext } from "react";


import { useParams } from "react-router-dom";
import { useProfile } from "../hooks/useprofile";

export function Nav() {
  const params = useParams();
  const contex = useContext(Profilecontext)
  const { Getuser, loadingOVER} = useProfile(params.username!,contex.token);
  console.log("loading overrrr:" , loadingOVER)
  /* if (loadingOVER) {
    return (
      <div className="bg-gray-500 flex justify-between items-center mx-auto w-screen-xl   min-h-[5rem]">
      <div className="mx-auto flex justify-between items-center w-screen-xl  ">
      
  
  Processing...

        </div>
        </div>
      ) } */
  if(Getuser)
  return (
    <div className="flex justify-between items-center mx-auto max-w-screen-xl   min-h-[5rem] ">
      <div className="flex justify-between items-center  ">
        
          <button className=" box-border h-8 p-2 w-9  border-2 rounded-sm rounded-xl">
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              className=" octicon octicon-three-bars Button-visual"
            >
              <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path>
            </svg>
          </button>
        
        <i className="ml-4 fa-brands fa-github fa-2xl"></i>
        <span className="inline ml-[1rem]">{params.username}</span>
      </div>

      <div className="flex justify-between items-center ">
        <button className="me-1 flex justify-between w-[14rem] inline-block    border-solid border-2 border-slate-600 border-indigo-600 ... rounded-xl">
          <div>
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              className="inline-block octicon octicon-search"
            >
              <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
            </svg>
            <span>Type / to search </span>
          </div>
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            className="inline-block octicon octicon-command-palette"
          >
            <path d="m6.354 8.04-4.773 4.773a.75.75 0 1 0 1.061 1.06L7.945 8.57a.75.75 0 0 0 0-1.06L2.642 2.206a.75.75 0 0 0-1.06 1.061L6.353 8.04ZM8.75 11.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5Z"></path>
          </svg>
        </button>
        <span className="inline-block me-1">|</span>
        <button className="flex  items-center text-center  w-10 border-solid border-2 border-slate-600 border-indigo-600 ... rounded-lg">
          <span>+</span>
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
        <button className="flex  items-center  h-[1.8rem] mx-auto  w-10 border-solid border-2 border-slate-600 border-indigo-600 ... rounded-lg">
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            className="octicon octicon-issue-opened Button-visual mx-auto"
          >
            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
          </svg>
        </button>
        <button className="w-[2rem] p-1 border-solid border-2 border-slate-600 border-indigo-600... rounded-xl">
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            className="octicon octicon-git-pull-request Button-visual"
          >
            <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
          </svg>
        </button>
        <button className="w-[2rem] p-1 border-solid border-2 border-slate-600 border-indigo-600... rounded-xl">
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            className="octicon octicon-inbox Button-visual"
          >
            <path d="M2.8 2.06A1.75 1.75 0 0 1 4.41 1h7.18c.7 0 1.333.417 1.61 1.06l2.74 6.395c.04.093.06.194.06.295v4.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25v-4.5c0-.101.02-.202.06-.295Zm1.61.44a.25.25 0 0 0-.23.152L1.887 8H4.75a.75.75 0 0 1 .6.3L6.625 10h2.75l1.275-1.7a.75.75 0 0 1 .6-.3h2.863L11.82 2.652a.25.25 0 0 0-.23-.152Zm10.09 7h-2.875l-1.275 1.7a.75.75 0 0 1-.6.3h-3.5a.75.75 0 0 1-.6-.3L4.375 9.5H1.5v3.75c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Z"></path>
          </svg>
        </button>
        <button >
          <img
            className="w-[2rem] p-1 border-solid border-2 border-slate-600 border-indigo-600... rounded-xl"
            src={Getuser.avatar_url}
          />
        </button>
      </div>
    </div>
  );
}
