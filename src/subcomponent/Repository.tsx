import { RenderCateg } from "./renderCateg.tsx";
import { usertype } from "../App.tsx";
import { useProfile } from "../hooks/useprofile.ts";
import { useParams } from "react-router-dom";
import { SearchRepository } from "../usablesubcomponent/searchrepository.tsx";
import { DropdownButton } from "../usablesubcomponent/DropdownButtonmenu.tsx";
import { DropdownLanguage } from "../usablesubcomponent/dropdownlanguage.tsx";
import { Profilecontext } from "../context.ts";
import { useContext } from "react";

export function Reposit() {
  const repo_params = useParams()
  const { languageItem,setlanguageItem, repositState,setrepositState , loadingREPO, filter, setfilter,searchItem,setSearchItem } = useProfile(repo_params.username!);
 const listmenu=[ 'Select Type','All','Public','Private','Sources' , 'Forks' ,'Archived', 'Can be sponsored' , 'Mirrors' , 'Template']
 const listlanguage=[ 'Select Language','All','TypeScript','JavaScript','HTML' , 'CSS' ,'Objective-C', 'Java' , 'c' ]

 
  return (
    <div className="w-[750px]   text-xs  ">
      <div className="flex z-50 justify-between w-[45rem] border-b mb-[1rem] h-[3rem]">
      <input
        className="border-2 border-solid w-[30rem] rounded-lg h-[2rem]"
          type="text"
          placeholder="find a repository"
          value={searchItem}
          onChange={(e) => {
            
            setSearchItem(e.target.value);
            console.log("searchItem" , searchItem)
          }}
        />

        {<DropdownButton setfilter={setfilter} listmenu={listmenu} listclick={(option)=>{console.log("optionoption",option)}} />}
        {<DropdownLanguage setlanguageItem={setlanguageItem} languageItem={languageItem} listlanguage={listlanguage} listclick={(option)=>{console.log("optionoption",option)}} />}
 
     
      </div>

      <RenderCateg renderReposit={repositState} />
    </div>
  );
}
