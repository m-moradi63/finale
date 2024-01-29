import { Octokit } from "octokit";
import {token} from "../constant.ts"
import { useParams } from "react-router-dom";
import { promises } from "dns";
import path from "path";

export  interface contented{
  id: number;
    node_id: string;
    name: string;
    full_name: string;
    owner: {
        name?: string | null | undefined;
        email?: string | null | undefined;
        login: string;
        id: number;
        node_id: string;
        avatar_url: string;}
}
async function getContent(owner:string , repo:string ):Promise<Array<contented>> {
 
  const octokit = new Octokit({ auth: token })
  const resulte = await octokit.request('GET /repos/{owner}/{repo}/contents', {
    owner: owner,
    repo: repo,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
  console.log ("resulte.url" ,resulte.data)
  return (resulte.data).sort((a, b) => a.type - b.type);
}
export  {getContent}