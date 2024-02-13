import { useContent } from "../hooks/usecontent.ts";
import { useParams  } from "react-router-dom";
import { useContext } from "react";
import { isTemplateExpression } from "typescript";
import { Folder, File } from "@phosphor-icons/react";
import { useCommit } from "../hooks/usecommit.ts";
import { useCommitFile } from "../hooks/usecommitFiles.ts";
import { useLanguage } from "../hooks/uselanguage.ts";
import { Profilecontext } from "../context.ts";

export function Contenttree() {
  const paramse = useParams();
  const contex = useContext(Profilecontext)
  const { contents, setcontent } = useContent(
    paramse.username!,
    paramse.Repotab!,
    contex.token
  );

  const { commit } = useCommit(paramse.username!,paramse.repotab! , contex.token);
  const returnFile = (elm) => {
    const { commitFile } = useCommitFile(
      paramse.username!,
      paramse.Repotab!,
      elm,
      contex.token
    );
    console.log("janeman", elm);
    return commitFile;
  };

 

  /*  const {commit}=useCommit(paramse.username!,paramse.Repotab!) */

  interface contents {
    readdir: "readdir";
  }

  return (
    <div>
      <div>
        <div className=" w-full flex ">
          <div className="flex ">
            <div>
              {" "}
              {contents
                .sort((a, b) => {
                  return a.type == "dir" ? -1 : 1;
                })
                .map((itms, index) => {
                  if (index < 5)
                    return (
                      <div className="flex  w-[40rem] justify-between h-[3rem] border-b-2 w-full solid  border-zinc-200">
                        <div className="flex ">
                          {itms.type === "dir" ? (
                            <Folder size={24} color="#5e5eff" />
                          ) : (
                            <File size={24} />
                          )}
                          {itms.name}
                        </div>
                        <div>
                          {commit.map((g, index) => {
                            if (index < 1)
                              return (
                                <div>
                                  {g.commit.message}
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  {g.commit.committer.date}
                                </div>
                              );
                          })}
                        </div>
                      </div>
                    );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /*  {commit.map((g)=>{
        
           return (
              <div>
                {(returnFile(g.sha)).sha}
              
              </div>
            )
           
          })} */
}

{
  /*  {commit.map((g)=>{
        if(g.sha===itms.sha){
          return (
            const {commitFile,setcommitFile}=useCommitFile(paramse.username!,paramse.Repotab!,g.sha )

            <div>{commitFile.message}</div>
          )
        }
     
      })}   */
}
