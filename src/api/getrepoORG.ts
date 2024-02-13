import { Octokit } from "octokit";
import {token} from "../constant.ts"
import { useParams } from "react-router-dom";
import { promises } from "dns";





export interface Repositspecial {
  id:                          number;
  node_id:                     string;
  name:                        string;
  full_name:                   string;
  private:                     boolean;
  owner:                       Owner;
  html_url:                    string;
  description:                 null | string;
  fork:                        boolean;
  url:                         string;
  forks_url:                   string;
  keys_url:                    string;
  collaborators_url:           string;
  teams_url:                   string;
  hooks_url:                   string;
  issue_events_url:            string;
  events_url:                  string;
  assignees_url:               string;
  branches_url:                string;
  tags_url:                    string;
  blobs_url:                   string;
  git_tags_url:                string;
  git_refs_url:                string;
  trees_url:                   string;
  statuses_url:                string;
  languages_url:               string;
  stargazers_url:              string;
  contributors_url:            string;
  subscribers_url:             string;
  subscription_url:            string;
  commits_url:                 string;
  git_commits_url:             string;
  comments_url:                string;
  issue_comment_url:           string;
  contents_url:                string;
  compare_url:                 string;
  merges_url:                  string;
  archive_url:                 string;
  downloads_url:               string;
  issues_url:                  string;
  pulls_url:                   string;
  milestones_url:              string;
  notifications_url:           string;
  labels_url:                  string;
  releases_url:                string;
  deployments_url:             string;
  created_at:                  Date;
  updated_at:                  Date;
  pushed_at:                   Date;
  git_url:                     string;
  ssh_url:                     string;
  clone_url:                   string;
  svn_url:                     string;
  homepage:                    null;
  size:                        number;
  stargazers_count:            number;
  watchers_count:              number;
  language:                    Language | null;
  has_issues:                  boolean;
  has_projects:                boolean;
  has_downloads:               boolean;
  has_wiki:                    boolean;
  has_pages:                   boolean;
  has_discussions:             boolean;
  forks_count:                 number;
  mirror_url:                  null;
  archived:                    boolean;
  disabled:                    boolean;
  open_issues_count:           number;
  license:                     null;
  allow_forking:               boolean;
  is_template:                 boolean;
  web_commit_signoff_required: boolean;
  topics:                      any[];
  visibility:                  Visibility;
  forks:                       number;
  open_issues:                 number;
  watchers:                    number;
  default_branch:              DefaultBranch;
  permissions:                 Permissions;
}

export enum DefaultBranch {
  Main = "main",
  Master = "master",
}

export enum Language {
  CSS = "CSS",
  HTML = "HTML",
  JavaScript = "JavaScript",
  TypeScript = "TypeScript",
}

export interface Owner {
  login:               Login;
  id:                  number;
  node_id:             NodeID;
  avatar_url:          string;
  gravatar_id:         string;
  url:                 string;
  html_url:            string;
  followers_url:       string;
  following_url:       FollowingURL;
  gists_url:           GistsURL;
  starred_url:         StarredURL;
  subscriptions_url:   string;
  organizations_url:   string;
  repos_url:           string;
  events_url:          EventsURL;
  received_events_url: string;
  type:                Type;
  site_admin:          boolean;
}

export enum EventsURL {
  HTTPSAPIGithubCOMUsersMMoradi63EventsPrivacy = "https://api.github.com/users/m-moradi63/events{/privacy}",
}

export enum FollowingURL {
  HTTPSAPIGithubCOMUsersMMoradi63FollowingOtherUser = "https://api.github.com/users/m-moradi63/following{/other_user}",
}

export enum GistsURL {
  HTTPSAPIGithubCOMUsersMMoradi63GistsGistID = "https://api.github.com/users/m-moradi63/gists{/gist_id}",
}

export enum Login {
  MMoradi63 = "m-moradi63",
}

export enum NodeID {
  UKgDOCD4CTA = "U_kgDOCD4ctA",
}

export enum StarredURL {
  HTTPSAPIGithubCOMUsersMMoradi63StarredOwnerRepo = "https://api.github.com/users/m-moradi63/starred{/owner}{/repo}",
}

export enum Type {
  User = "User",
}

export interface Permissions {
  admin:    boolean;
  maintain: boolean;
  push:     boolean;
  triage:   boolean;
  pull:     boolean;
}

export enum Visibility {
  Public = "public",
}

  async function getOrg(name:string , repo:string , token:Object): Promise<Repositspecial[]>  {
    
const octokit = new Octokit({
    auth: token
  })
  
  const org= (await octokit.request('GET /repos/{owner}/{repo}', {
    owner: name,
    repo: repo,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  }))
  return org.data
  
}


export {  getOrg }