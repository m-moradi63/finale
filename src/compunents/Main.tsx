import { Profile } from "../Pages/profile.tsx";
import { Repotab } from "../Pages/RepoTab.tsx";
import { Route, Routes } from "react-router-dom";
import { Repositories } from "../Pages/Repositories.tsx";

import { useParams } from "react-router-dom";
import { token } from "../constant.ts";

export function Main() {
  const params = useParams();
  console.log("eee", params);

  return (
  
      <div className="object-cover mx-auto    ">
        <Routes>
          <Route index element={<Profile />} />
          <Route path="/:username" element={<Profile />} />
          <Route path="/:username/:Repotab" element={<Repotab />} />
          <Route path="/:username/Overview" element={<Profile />} />
          <Route path="/:username/Repositories" element={<Repositories />} />
        </Routes>
      </div>
    
  );
}
