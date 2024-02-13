import { Octokit } from "octokit";
import { Profilecontext } from "../context.ts";

export interface User{
  avatar_url : string | undefined,
  name : string | null,
  company: string | null,
  blog:string | null,
  bio: string | null,
  followers :number ,
  following :number,
  login: string  | null,
  location : string,
  twitter_username : string
  


}
export interface Repositoryes{
  name : string | null | undefined,
  login: string ,
  visibility:string ,
  fork:boolean,
  forks_url: string  ,
  description :string | null | undefined,
  language :string  | null,
  allow_forking:boolean,
  node_id:string ,
  default_branch: string ,
  archived :boolean 
}








async function getUser(username:string , token:Object) : Promise<User>{
  const octokit = new Octokit({ auth: token })

  const old = (await octokit.request("GET /users/{username}/", {
    username: username,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    },
  }))
  return old.data
}
export { getUser }
