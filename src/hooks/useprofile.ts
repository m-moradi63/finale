import { ALL } from "dns";
import { User, getUser } from "../api/getUser.ts";
import { getRepos, Repositoryes} from "../api/getrepository"
import { useEffect, useState } from "react";

export function useProfile(username:string , token:string ) {
  const [Getuser, setGetuser] = useState<User>();
  const [loading, setloading] = useState(true);
  const [repositState, setrepositState] = useState<Array<Repositoryes>>([]);
  const [loadingREPO, setloadingREPO] = useState(true);
  const [loadingOVER, setloadingOVER] = useState(true);
  const [filter, setfilter] = useState<string>("");
  const [searchItem, setSearchItem] = useState("");
  const [languageItem, setlanguageItem] = useState("");
  
  useEffect(() => {
    getRepos(username!, token)
      .then(function (data) {
        setrepositState(data);
      })
      .finally(() => {
        setloadingOVER(false);
      });
  }, []);
  useEffect(() => {
    setloadingOVER(false);
    getUser(username!, token!)
      .then(function (data) {
        setGetuser(data);
        
      })
      .catch(() => {
        setloadingOVER(true);
      });
  }, []);
  useEffect(() => {
    getUser(username , token)
      .then(function (data) {
        setGetuser(data);
      })
      .finally(() => {
        setloading(false);
      });
  }, []);
  useEffect(() => {
    getRepos(username , token)
      .then(function (data) {
        setrepositState(data);
      })
      .finally(() => {
        setloadingREPO(false);
      });
  }, []);
  
  return {
    Getuser: Getuser,
    setGetuser: setGetuser,
    loading: loading,
    setloading :setloading,
    repositState: applyFilter(repositState , filter, searchItem,languageItem),
    loadingREPO: loadingREPO,
    loadingOVER: loadingOVER,
    setloadingOVER: setloadingOVER,
    filter: filter,
    setfilter: setfilter,
    setrepositState: setrepositState,
    searchItem:searchItem,
    setSearchItem:setSearchItem,
    languageItem:languageItem,
    setlanguageItem:setlanguageItem
  };
}


function applyFilter(List:Array<Repositoryes> , filter:string, searchItem:string , languageItem:string ){
  console.log("listtttt" , List )
  console.log("filterrrrr"  ,filter)
 
let output = List
if (filter){
  output = output.filter((elm)=>{
    if(filter==="Forks"){
      return elm.fork===true
    }
    else if(filter === "Archived"){
      return elm.Archived===true
    }
  else return true
  })
}

if(languageItem && languageItem!=="All"){
  output = output.filter((elm)=>{
    if(languageItem===elm.language){
      return true
    }
  })

}
if(searchItem){
  output = output.filter((elm)=>{
    return elm.name.includes(searchItem)
  })
}
return output

}