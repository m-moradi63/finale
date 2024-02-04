import { token } from "../constant"
import { Octokit } from "octokit"


export interface language{
 TypeScript:number,
 HTML:number,
 JavaScript:number
}


export async function getLanguage(owner:string , repo:string):Promise<language>{
const octokit = new Octokit({
    auth: token
  })
  
  const lang = await octokit.request('GET /repos/{owner}/{repo}/languages', {
    owner: owner,
    repo: repo,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
return lang.data
}