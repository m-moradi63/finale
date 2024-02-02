import { Octokit } from "octokit";
import {token} from "../constant.ts"



export interface comm {
 sha:string ,
 message : string,

    
 }

async function getCommits(owner:string , name:string ): Promise<Array<comm>>{
    
    const octokit = new Octokit({
        auth: token
      })
      
      const Commits = await octokit.request('GET /repos/{owner}/{repo}/commits', {
        owner: owner,
        repo: name,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })
     
      return Commits.data
      
    }
    export {  getCommits }