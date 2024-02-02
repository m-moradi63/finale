
import { useContent } from "../hooks/usecontent.ts";
import { useParams } from "react-router-dom";
import React from "react";
import { isTemplateExpression } from "typescript";
import { Folder, File } from "@phosphor-icons/react";
import { useCommit } from "../hooks/usecommit.ts";
import { useCommitFile } from "../hooks/usecommitFiles.ts";

export function Contenttree() {
  const paramse = useParams();

 const {contents , setcontent}=useContent(paramse.username!,paramse.Repotab! )

 const {commit}=useCommit(paramse.username!,paramse.Repotab! )
const returnFile=((elm)=>{
  const {commitFile}=useCommitFile(paramse.username!,paramse.Repotab!,elm )
  console.log("janeman" , elm)
  return commitFile
})

/*  const {commit}=useCommit(paramse.username!,paramse.Repotab!) */


 interface contents{
  readdir : "readdir"
 }

  
 
    return (
     <div>
     <div>
    
        <div className=" w-full flex ">
         <div className="flex h-[3rem] border-b-2 w-full solid  border-zinc-200">
         <div> {contents.sort((a,b)=>{return a.type=="dir"?-1:1}).map((itms)=>{
           return (
            <div> 
            {itms.type==="dir"?<Folder size={24} color="#5e5eff"/>:<File size={24}  />}
              {itms.name}
              </div>
           )})}
        </div>
        <div>
          {commit.map((g)=>{
            return (
              <div>
                {g.commit.message}
              </div>
            )
          })}
        </div>
         
         {/*  {commit.map((g)=>{
        
           return (
              <div>
                {(returnFile(g.sha)).sha}
              
              </div>
            )
           
          })} */}
        

     {/*  {commit.map((g)=>{
        if(g.sha===itms.sha){
          return (
            const {commitFile,setcommitFile}=useCommitFile(paramse.username!,paramse.Repotab!,g.sha )

            <div>{commitFile.message}</div>
          )
        }
     
      })}   */} 
     
           
            
      
         
         
          </div>
       
       
         
       </div> 
      
   </div>


     

      

     </div>
    )}
  
  
  
        
