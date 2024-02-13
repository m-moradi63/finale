import { User, getUser } from "../api/getUser.ts";
import { getRepos, Repositoryes} from "../api/getrepository"
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getOrg , Repositspecial } from "../api/getrepoORG.ts";
import { getBranch, brancheses} from "../api/getbranches.ts";
import useSWR from "swr"
import { comm, getCommits } from "../api/getCommit.ts";


export  function useCommit(owner:string , name:string , token:Object ) {
 
  const [loadingCommit, setloadingCommit] = useState(true);
  const [commit , setcommit] = useState<Array<comm>>([]);
  const [sha , setsha] = useState<string>("");
  




  
  useEffect(() => {
   
    getCommits(owner ,name ,token)
      .then(function (data) {
        setcommit(data);
        setsha(data[0].sha)
        console.log("commit" , sha)
         
      })
  
  }, []);
  return {
    loadingCommit:loadingCommit,
    setloadingCommit: setloadingCommit,
    setcommit : setcommit,
    commit:commit,
    sha :sha
    
   


  };
}
