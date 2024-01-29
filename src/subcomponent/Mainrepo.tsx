import { Link, useParams } from "react-router-dom";
import { useProfile } from "../hooks/useprofile.ts";
import { useRepos } from "../hooks/usereposit.ts";
import { onMounted } from "vue";
import { DropdownMenu } from "../usablesubcomponent/dropdownmenu.tsx";
import { useState } from "react";
import { useBranches } from "../hooks/usebranches.ts";
import { DropdownBranch } from "../usablesubcomponent/dropdownbranch.tsx";
import { Searchesadd } from "../usablesubcomponent/searchadd .tsx";
import { Dropdownfile } from "../usablesubcomponent/dropdownfile.tsx";
import useSWR from "swr";
import { getBranch } from "../api/getbranches.ts";
import { useContent } from "../hooks/usecontent.ts";
import { Contenttree } from "./Content.tsx";
export function Mainrepo() {
  const params = useParams();
  console.log("paramsparams", params.Repotab);
  console.log("paramsparams1", params.username);
  console.log("paramsparams3", params.Repotab);

  const { repoinfo, setrepoinfo, setloadingRepos, loadingRepos } = useRepos(
    params.username!,
    params.Repotab!
  );
  console.log("repoinforepoinforepoinfo", repoinfo);
  const { Getuser, loading } = useProfile(params.username!);

  /* const { branch } = useBranches(params.username!, params.Repotab!); */
  const { data, error, isLoading } = useSWR(`Branch-${params.Repotab!}`, () => {
    return getBranch(params.username!, params.Repotab!);
  });

  const [click, setclick] = useState(false);
  const handleClick = () => setclick(!click);
  const [brclick, setbrclick] = useState(false);
  const handleClickbr = () => {
    setbrclick(!brclick), console.log("brclick", brclick);
  };
  const [fileclick, setfileclick] = useState(false);
  const handleClickfile = () => {
    setfileclick(!fileclick), console.log("brclick", brclick);
  };
  let newurl = "";
  let neww = "";

  const closeMobileview = () => setclick(false);

  if (loading) {
    return <div className="w-[274px] h-[2rem]   ">Loading</div>;
  }
  if (repoinfo) {
    return (
      <div>
        <div className="flex  justify-between mt-[1rem] border-b-2 w-[1024px] font-serift">
          <div className="flex">
            <img
              className="mr-[1rem] rounded-full border-2 border-solid border-slate-100 w-[2.2rem] h-[2.2rem] "
              src={Getuser?.avatar_url}
            />

            <div>
              <div className="flex">
                <span className="mr-[2rem]">{repoinfo.name!}</span>
                <button className="border-2 solid w-[3.4rem] text-xs h-[1.7rem] rounded-xl ml-[1rem] text-slate-400 m-auto">
                  <span className="mt-[5rem]">{repoinfo.visibility!}</span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex ">
            <button className=" w-[9rem] h-[1.7rem] rounded-xl border-2 border-solid ">
              <div className="mx-1.5 flex items-center items-center justify-center ">
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  className="mr-[.5rem] octicon octicon-eye "
                >
                  <path d="M8 2c1.981 0 3.671.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.62 1.62 0 0 1 0 1.798c-.45.678-1.367 1.932-2.637 3.023C11.67 13.008 9.981 14 8 14c-1.981 0-3.671-.992-4.933-2.078C1.797 10.83.88 9.576.43 8.898a1.62 1.62 0 0 1 0-1.798c.45-.677 1.367-1.931 2.637-3.022C4.33 2.992 6.019 2 8 2ZM1.679 7.932a.12.12 0 0 0 0 .136c.411.622 1.241 1.75 2.366 2.717C5.176 11.758 6.527 12.5 8 12.5c1.473 0 2.825-.742 3.955-1.715 1.124-.967 1.954-2.096 2.366-2.717a.12.12 0 0 0 0-.136c-.412-.621-1.242-1.75-2.366-2.717C10.824 4.242 9.473 3.5 8 3.5c-1.473 0-2.825.742-3.955 1.715-1.124.967-1.954 2.096-2.366 2.717ZM8 10a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 10Z"></path>
                </svg>
                <div>
                  {repoinfo.watchers === 0 ? (
                    <span className="text-lg ">unwatch</span>
                  ) : (
                    <span>whatch</span>
                  )}
                </div>
                <div
                  className="flex gap-[0.5rem] border-2 solid bg-[#e5e7eb] w-[1rem] h-[1.2rem] text-xs rounded-full"
                  data-dropdown-toggle="dropdown"
                >
                  {repoinfo.watchers_count}
                  <i className="nav-item">
                    <Link className="nav-links" onClick={handleClick}>
                      <i className=" fas fa-caret-down"></i>
                    </Link>
                    {click && <DropdownMenu />}
                  </i>
                </div>
              </div>
            </button>
            <button className=" w-[8rem] h-[1.7rem] rounded-xl border-2 border-solid  ">
              <div className="mx-1.5 flex items-center justify-center  ">
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  className="octicon octicon-repo-forked mr-2"
                >
                  <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
                </svg>
                fork
                <div className="border-2 solid bg-[#e5e7eb] w-[1rem] h-[1.2rem] text-xs rounded-full">
                  {repoinfo.forks_count}
                </div>
              </div>
            </button>
            <button className=" w-[8rem] h-[1.7rem] rounded-xl border-2 border-solid ">
              <div className="mx-1.5 flex items-center items-center justify-center ">
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  className="octicon octicon-star d-inline-block mr-2"
                >
                  <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                </svg>
                Star
                <div className="border-2 solid bg-[#e5e7eb] w-[1rem] h-[1.2rem] text-xs rounded-full">
                  {repoinfo.forks_count}
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="flex items-start">
          <div className="flex flex-col  ">
          <div className="flex items-center ">
            <div className="flex items-center h-[6rem] me-20 ">
              <button className="  me-2  w-[6rem] h-[2rem] rounded-lg  border-2 border-solid ">
                <div className="text-center flex items-center ml-[1.6rem]">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    role="img"
                    className="  octicon octicon-git-branch"
                    viewBox="0 0 16 16"
                    width="16"
                    height="16"
                    fill="currentColor"
                  >
                    <path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"></path>
                  </svg>
                  {repoinfo.default_branch}
                  <i className="nav-item">
                    <Link className="nav-links" onClick={handleClickbr}>
                      <i className=" fas fa-caret-down"></i>
                    </Link>
                    {brclick && <DropdownBranch />}
                  </i>
                </div>
              </button>
              <div className=" flex">
                <div className="me-6 flex gap-[4px] items-center">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    role="img"
                    className=" octicon octicon-git-branch"
                    viewBox="0 0 16 16"
                    width="16"
                    height="16"
                    fill="currentColor"
                  >
                    <path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"></path>
                  </svg>
                  <span> {data?.length}</span>
                  <span>Branche</span>
                </div>
                <div>
                  <span
                    data-component="buttonContent"
                    className="Box-sc-g0xbh4-0 kkrdEu"
                  >
                    <span
                      data-component="leadingVisual"
                      className=" flex items-center gap-[6px] Box-sc-g0xbh4-0 trpoQ"
                    >
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        role="img"
                        className="octicon octicon-tag online-block"
                        viewBox="0 0 16 16"
                        width="16"
                        height="16"
                        fill="currentColor"
                      >
                        <path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path>
                      </svg>
                      <span data-component="text">
                        <div className=" Box-sc-g0xbh4-0 flex gap-[6px]">
                          <strong className=" color-fg-default">0</strong>
                          <span className="color-fg-muted">Tags</span>
                        </div>
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div className="me-4">{<Searchesadd />}</div>
            <button className="w-[6rem] h-[2rem] rounded-lg  border-2 border-solid ">
              <i className="nav-item ">
                <Link
                  className="nav-links font-serift"
                  onClick={handleClickfile}
                >
                  Add file<i className=" fas fa-caret-down"></i>
                </Link>
                {fileclick && <Dropdownfile />}
              </i>
            </button>
            <button className="flex items-center w-[6rem] h-[2rem] rounded-lg bg-green-600 border-2 border-solid ">
              <svg
                aria-hidden="true"
                focusable="false"
                role="img"
                className="ml-[1.2rem] octicon octicon-code"
                viewBox="0 0 16 16"
                width="16"
                height="16"
                fill="currentColor"
              >
                <path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path>
              </svg>
              <i className="nav-item font-serift">
                <Link className="nav-links" onClick={handleClickfile}>
                  Code<i className=" fas fa-caret-down"></i>
                </Link>
                {fileclick && <Dropdownfile />}
              </i>
            </button>
            </div>
            <div className="border-2 solid  w-[47rem] rounded-xl">
            <div className="border-b bg-slate-100 h-[4rem] py-5 w-full "><span >{params.username}</span></div>
            <div className="rounded-xl" >{<Contenttree />}</div>
            </div>
          </div>
          
          
          <div className="ms-6 w-[16rem] border-none solid  h-[20rem] font-serift">
            About
            <br />A massively spiffy yet delicately unobtrusive compression
            library.
            <br />
            <br />
            <a className="flex items-center">
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                className="octicon octicon-link flex-shrink-0 mr-2"
              >
                <path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path>
              </svg>
              {repoinfo?.homepage}
            </a>
            <a className="flex items-center">
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                className="octicon octicon-book mr-2"
              >
                <path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z"></path>
              </svg>
              Readme
            </a>
            <a className="flex items-center">
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                className="octicon octicon-law mr-2"
              >
                <path d="M8.75.75V2h.985c.304 0 .603.08.867.231l1.29.736c.038.022.08.033.124.033h2.234a.75.75 0 0 1 0 1.5h-.427l2.111 4.692a.75.75 0 0 1-.154.838l-.53-.53.529.531-.001.002-.002.002-.006.006-.006.005-.01.01-.045.04c-.21.176-.441.327-.686.45C14.556 10.78 13.88 11 13 11a4.498 4.498 0 0 1-2.023-.454 3.544 3.544 0 0 1-.686-.45l-.045-.04-.016-.015-.006-.006-.004-.004v-.001a.75.75 0 0 1-.154-.838L12.178 4.5h-.162c-.305 0-.604-.079-.868-.231l-1.29-.736a.245.245 0 0 0-.124-.033H8.75V13h2.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h2.5V3.5h-.984a.245.245 0 0 0-.124.033l-1.289.737c-.265.15-.564.23-.869.23h-.162l2.112 4.692a.75.75 0 0 1-.154.838l-.53-.53.529.531-.001.002-.002.002-.006.006-.016.015-.045.04c-.21.176-.441.327-.686.45C4.556 10.78 3.88 11 3 11a4.498 4.498 0 0 1-2.023-.454 3.544 3.544 0 0 1-.686-.45l-.045-.04-.016-.015-.006-.006-.004-.004v-.001a.75.75 0 0 1-.154-.838L2.178 4.5H1.75a.75.75 0 0 1 0-1.5h2.234a.249.249 0 0 0 .125-.033l1.288-.737c.265-.15.564-.23.869-.23h.984V.75a.75.75 0 0 1 1.5 0Zm2.945 8.477c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327Zm-10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327Z"></path>
              </svg>
              View License
            </a>
            <a className="flex items-center">
              <svg
                text="gray"
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                className="octicon octicon-pulse mr-2"
              >
                <path d="M6 2c.306 0 .582.187.696.471L10 10.731l1.304-3.26A.751.751 0 0 1 12 7h3.25a.75.75 0 0 1 0 1.5h-2.742l-1.812 4.528a.751.751 0 0 1-1.392 0L6 4.77 4.696 8.03A.75.75 0 0 1 4 8.5H.75a.75.75 0 0 1 0-1.5h2.742l1.812-4.529A.751.751 0 0 1 6 2Z"></path>
              </svg>
              Activity
            </a>
            <a className="flex items-center">
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                className="octicon octicon-star mr-2"
              >
                <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
              </svg>
              {repoinfo.stargazers_count}
            </a>
            <a className="flex items-center">
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                className="octicon octicon-eye mr-2"
              >
                <path d="M8 2c1.981 0 3.671.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.62 1.62 0 0 1 0 1.798c-.45.678-1.367 1.932-2.637 3.023C11.67 13.008 9.981 14 8 14c-1.981 0-3.671-.992-4.933-2.078C1.797 10.83.88 9.576.43 8.898a1.62 1.62 0 0 1 0-1.798c.45-.677 1.367-1.931 2.637-3.022C4.33 2.992 6.019 2 8 2ZM1.679 7.932a.12.12 0 0 0 0 .136c.411.622 1.241 1.75 2.366 2.717C5.176 11.758 6.527 12.5 8 12.5c1.473 0 2.825-.742 3.955-1.715 1.124-.967 1.954-2.096 2.366-2.717a.12.12 0 0 0 0-.136c-.412-.621-1.242-1.75-2.366-2.717C10.824 4.242 9.473 3.5 8 3.5c-1.473 0-2.825.742-3.955 1.715-1.124.967-1.954 2.096-2.366 2.717ZM8 10a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 10Z"></path>
              </svg>
              {repoinfo.subscribers_count}
              watching
            </a>
            <a className="flex items-center">
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                className="octicon octicon-repo-forked mr-2"
              >
                <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
              </svg>
              {repoinfo.forks_count}forks
            </a>
          </div>
        </div>
      </div>
    );
  }
}
