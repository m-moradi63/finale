
import { useContent } from "../hooks/usecontent.ts";
import { useParams } from "react-router-dom";
import React from "react";
import { isTemplateExpression } from "typescript";
import { Folder, File } from "@phosphor-icons/react";

export function Contenttree() {
  const paramse = useParams();
  console.log("owner :" , paramse.username)
  console.log("owner :" , paramse.Repotab)
 const {contents , setcontent}=useContent(paramse.username!,paramse.Repotab! )
 console.log("contenet :" , contents)
 interface contents{
  readdir : "readdir"
 }

  
  if (contents) {
    return (
     <div>
        {contents.map((itms)=>{
          return (
            <div className=" w-full flex ">
             {(itms.type==="dir")?<span className="flex h-[3rem] border-b-2 w-full solid  border-zinc-200"><Folder size={24} color="#5e5eff"/>{itms.name} </span>:null}
             
        </div>
          )
          })}
           {contents.map((itms)=>{
          return (
            <div className="border-b border-zinc-200 w-full flex"> 
             {(itms.type==="file")?<span className="flex h-[3rem] w-[10rem]"><File size={24}  />{itms.name}</span>:""}
            </div>
          )
          })}
     </div>
    )}}
        
