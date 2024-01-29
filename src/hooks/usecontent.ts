import { User, getUser } from "../api/getUser.ts";
import { getRepos, Repositoryes} from "../api/getrepository"
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getOrg , Repositspecial } from "../api/getrepoORG.ts";
import {getContent} from "../api/getcontent.ts"
import { contented } from "../api/getcontent.ts";



export function useContent( owner:string ,repo:string ) {

  const [contents , setcontent] = useState<Array<contented>>([]);
  

  useEffect(() => {
    getContent(owner ,repo )
      .then(function (data) {
        setcontent(data);
        console.log("content------content" , contents)
      })
     
  }, []);
 
  return {
    contents : contents,
    setcontent : setcontent
  };
}
