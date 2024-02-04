import { User, getUser } from "../api/getUser.ts";
import { getRepos, Repositoryes} from "../api/getrepository"
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getOrg , Repositspecial } from "../api/getrepoORG.ts";
import {getContent} from "../api/getcontent.ts"
import { contented } from "../api/getcontent.ts";
import { language , getLanguage } from "../api/getlanguage.ts";



export function useLanguage( owner:string ,repo:string ) {

  const [languages , setLanguages] = useState<language>({});
  

  useEffect(() => {
    getLanguage(owner ,repo )
      .then(function (data) {
        setLanguages(data);
        console.log("languageslanguages" , languages)
      })
     
  }, []);
 
  return {
    languages : languages,
    setLanguages : setLanguages
  };
}
