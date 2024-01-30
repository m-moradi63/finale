import { Octokit } from "octokit";
import {token} from "../constant.ts"



export interface comm {
 sha:string,
 commit:string,
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
      console.log ("Commits" , Commits.data.length)
      return Commits.data
      
    }
    export {  getCommits }