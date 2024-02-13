import { Sidebar } from "../compunents/Sidebar.tsx";
import { usertype } from "../App.tsx";
import { Menu } from "../subcomponent/Menu.tsx";
import { Nav } from "../subcomponent/nav.tsx";
import { Reposit } from "../subcomponent/Repository.tsx"
import { useRepos } from "../hooks/usereposit.ts";
import { Profilecontext } from "../context.ts";
import { useContext } from "react";
import { useParams } from "react-router-dom";

export function Repositories() {
  const param = useParams()
  const contex = useContext(Profilecontext)
  const {loadingRepos} = useRepos(param.username! , param.repotab! , contex.token)
  if(loadingRepos){
    return(
      <div className="absolute  top-0 left-0  right-0 border-none solid   bg-slate-300 min-w-screen-xl w-screen-xl h-[100vh] min-h-[100vh]">
        <span className="absolute top-[18rem] text-4xl left-[40rem]">loading...</span>
      </div>
    )
  }
  return (
    <div className=" w-fit   ">
     <div className="border-1 solid bg-gray-300   min-h-[8.1rem]  h-[8.1rem]">
        
        <Nav />

        <Menu />
      </div>
      <div className="flex justify-center box-border    gap-0  mt-[1rem] ">
        <Sidebar  />
        <Reposit />
      </div>
    </div>
  );
}
