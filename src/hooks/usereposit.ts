import { User, getUser } from "../api/getUser.ts";
import { getRepos, Repositoryes} from "../api/getrepository"
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getOrg , Repositspecial } from "../api/getrepoORG.ts";


export function useRepos(name:string , owner:string , token:string) {
 console.log("valueeeeeee" , owner)
  const [loadingRepos, setloadingRepos] = useState(true);
  const [repoinfo , setrepoinfo] = useState<Array<Repositspecial>>([]);
  

  useEffect(() => {
    getOrg(name, owner, token)
      .then(function (data) {
        setrepoinfo(data);
      })
      .finally(() => {
        setloadingRepos(false);
      });
  }, []);
 
  return {
    loadingRepos:loadingRepos,
    setloadingRepos:setloadingRepos,
    setrepoinfo : setrepoinfo,
    repoinfo:repoinfo
  };
}
