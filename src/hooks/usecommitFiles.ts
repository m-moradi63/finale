import { User, getUser } from "../api/getUser.ts";
import { getRepos, Repositoryes} from "../api/getrepository"
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getOrg , Repositspecial } from "../api/getrepoORG.ts";
import { getBranch, brancheses} from "../api/getbranches.ts";
import useSWR from "swr"
import { comm, getCommits } from "../api/getCommit.ts";
import { getCommitFile } from "../api/getcommitsfile.ts";
import { useCommit } from "./usecommit.ts";

/* const {commit} = useCommit<Array<comm>>(param.username! , param.repotab ! )  */
export function useCommitFile(owner:string , name:string ,ref:string, token:Object) {
  
  const [commitFile , setcommitFile] = useState<Array<any>>([]);
  const [loadingCommitFile, setloadingCommitFile] = useState(true);
  



  useEffect(() => {
    
    getCommitFile(owner ,name ,ref , token)
      .then(function (data) {
        setcommitFile(data);
       
       
        
      })
     
  }, []);
  
 
  return {
    
    commitFile:commitFile,
    setcommitFile:setcommitFile,
    loadingCommitFile:loadingCommitFile,
    setloadingCommitFile:setloadingCommitFile


  };
}
