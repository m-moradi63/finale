import { Octokit } from "octokit";
import {token} from "../constant.ts"



export interface brancheses {
  length:number , 
  name: string,
      commit: {
        sha: string,
        url: string
      },
      protected: boolean
}
async function getBranch(owner:string , name:string , token:Object): Promise<brancheses>{
    
    const octokit = new Octokit({
        auth: token
      })
      
      const brancheApi = await octokit.request('GET /repos/{owner}/{repo}/branches', {
        owner: owner,
        repo: name,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })
      console.log ("bbbbbbbbbbbbbbbbbb" , brancheApi.data.length)
      return brancheApi.data
      
    }
    export {  getBranch }