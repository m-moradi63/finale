import { User, getUser } from "../api/getUser.ts";
import { getRepos, Repositoryes} from "../api/getrepository"
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getOrg , Repositspecial } from "../api/getrepoORG.ts";
import { getBranch, brancheses} from "../api/getbranches.ts";
import useSWR from "swr"


export function useBranches(owner:string , name:string ,token:Object ) {
 
  const [loadingBranch, setloadingBranch] = useState(true);
  const [branch , setbranch] = useState<brancheses>({});

 /*  useEffect(() => {
    getBranch(owner , name)
      .then(function (data) {
        console.log("1111111111111" , data)
        setbranch(data);
        
      })
      .finally(() => {
        setloadingBranch(false);
      });
  }, []); */



  const { data, error, isLoading } = useSWR('/api/user', ()=>{return getBranch(owner , name ,token )})

 
  return {
    loadingBranch:isLoading,
    setloadingBranch: setloadingBranch,
    setbranch : setbranch,
    branch:branch
  };
}
