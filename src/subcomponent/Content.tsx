
import { useContent } from "../hooks/usecontent.ts";
import { useParams } from "react-router-dom";
import React from "react";
import { isTemplateExpression } from "typescript";
import { Folder, File } from "@phosphor-icons/react";
import { useCommit } from "../hooks/usecommit.ts";

export function Contenttree() {
  const paramse = useParams();
  console.log("owner :" , paramse.username)
  console.log("owner :" , paramse.Repotab)
 const {contents , setcontent}=useContent(paramse.username!,paramse.Repotab! )
 console.log("contenet :" , contents)
 const {commit , setcommit, loadingCommit,setloadingCommit}=useCommit(paramse.username!,paramse.Repotab! )
 interface contents{
  readdir : "readdir"
 }

  
 
    return (
     <div>
     <div>
     {contents.sort((a,b)=>{return a.type=="dir"?-1:1}).map((itms)=>{
      return (
        <div className=" w-full flex ">
         <div className="flex h-[3rem] border-b-2 w-full solid  border-zinc-200">
          {itms.type==="dir"?<Folder size={24} color="#5e5eff"/>:<File size={24}  />}
          {itms.name}
          {commit.map((itmse)=>{
          return(
            <div>
              {itmse.commit.message}
             
            </div>
          )
        })}
         
         
          </div>
          <div>
         
          </div>
       </div> )})}
       <div>
       
       </div>
   </div>
     

      

     </div>
    )}
  
  
  
        
