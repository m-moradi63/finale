import { Repotab } from "./Pages/RepoTab.tsx";
import { Main } from "./compunents/Main.tsx";
import { Profilecontext } from "./context.ts";
import { token } from "./constant.ts";
import { useParams } from "react-router-dom";

export interface usertype {
  username: string;
}


export function App(username: string) {
const param = useParams()
console.log("uu" , param.username)
  return (
    <Profilecontext.Provider
    value={{
     token:token
     
    }}
  >
    <div className=" apple-system BlinkMacSystemFont ">
      <Main  />
    </div>
    </Profilecontext.Provider>
  
  );
}
