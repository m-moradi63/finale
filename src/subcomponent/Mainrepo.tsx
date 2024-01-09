import { useParams } from "react-router-dom";
import { useProfile } from "../hooks/useprofile.ts";
import { useRepos } from "../hooks/usereposit.ts";
import { getuid } from "process";

export function Mainrepo() {
  const params = useParams();
  console.log("paramsparams", params.Repotab);
  console.log("paramsparams1", params.username);

  const { repoinfo, setrepoinfo, setloadingRepos, loadingRepos } = useRepos(
    params.username!,
    params.Repotab!
  );
  const { Getuser, loading } = useProfile(params.username!);
  console.log("tesssst:::", repoinfo);

  if (loading) {
    return <div className="w-[274px] h-[2rem]   ">Loading</div>;
  }
  if (repoinfo) {
    return (
      <div>
        <div className="flex  justify-between mt-[1rem] border-b-2 w-[1024px]">
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
                <div className="border-2 solid bg-gray-400 w-[1rem] h-[1.2rem] text-xs rounded-full">
                  {repoinfo.watchers_count}
                </div>
                <select className="w-[1rem] bg-white">
                  <option disabled hidden></option>
                  <option>Notifications</option>
                  <option>participaring and @ mentions</option>
                  <option>All Activity</option>
                  <option>Ignor</option>
                  <option>Custom</option>
                </select>
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
                <div className="border-2 solid bg-gray-400 w-[1rem] h-[1.2rem] text-xs rounded-full">
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
                  class="octicon octicon-star d-inline-block mr-2"
                >
                  <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                </svg>
                Star
                <div className="border-2 solid bg-gray-400 w-[1rem] h-[1.2rem] text-xs rounded-full">
                  {repoinfo.forks_count}
                </div>
              </div>
            </button>
          </div>
        </div>
        <div>
        
        {repoinfo.default_branch}
        </div>
      </div>
    );
  }
}
