import { Octokit } from "octokit";
import {token} from "../constant.ts"



export interface comm {
 sha:string,
 commit:string,
 message : string,

    
 }

async function getCommitFile(owner:string , name:string , ref:string): Promise<Array<any>>{
    
    const octokit = new Octokit({
        auth: token
      })
 
      const CommitsFile = await octokit.request('GET /repos/:owner/:repo/commits/:sha', {
        owner: owner,
        repo: name,
        ref:  ref ,
        headers: {
          /* 'Accept': 'application/vnd.github+json' */
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })
      console.log ("Commitsfillll" , CommitsFile.data)
      return CommitsFile.data
      
    }
    export {  getCommitFile }