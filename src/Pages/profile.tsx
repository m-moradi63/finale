import { Sidebar } from "../compunents/Sidebar.tsx";
import { Menu } from "../subcomponent/Menu.tsx";
import { Nav } from "../subcomponent/nav.tsx";
import { Overview } from "../subcomponent/Overview.tsx";
import { useParams, useSearchParams } from "react-router-dom";
import { Repositories } from "./Repositories.tsx";
import { useProfile } from "../hooks/useprofile.ts";
import { Profilecontext } from "../context.ts";
import { useContext } from "react";

export function Profile() {
  const contex = useContext(Profilecontext)
  console.log("::::::::" , contex.token)
  const params= useParams()
  console.log("pp" , params.repotab)
  let [searchParams, setSearchParams] = useSearchParams();
  const {Getuser , loadingOVER}=useProfile(params.username! , contex.token)
  console.log("searchparams" , searchParams)
  if(loadingOVER){
    return(
      <div className="absolute  top-0 left-0  right-0 border-none solid   bg-slate-300 min-w-screen-xl w-screen-xl h-[100vh] min-h-[100vh]">
        <span className="absolute top-[18rem] text-4xl left-[40rem]">loading...</span>
      </div>
    )
  }
  else if(searchParams.get("tab")==="repositories"){
    return (
     <Repositories/>
    )
  }
  else if (Getuser)
  return (
    <div >
     <div className=" border-1 solid bg-gray-300  min-h-[8.1rem]  h-[8.1rem] mx-auto">
        <Nav />

        <Menu />
      </div>
      
      <div className="flex justify-center box-border    gap-0  ">
        <Sidebar />
        <Overview />
      </div>
    </div>
  );
}
