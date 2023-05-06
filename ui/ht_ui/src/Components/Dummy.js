// import React from 'react'

// const Dummy = () => {
//   return (
//     <TreeView
//                         aria-label="controlled"
//                         defaultCollapseIcon={<ExpandMoreIcon />}
//                         defaultExpandIcon={<ChevronRightIcon />}
//                         expanded={defaultOpen}
//                         selected={[selectedTask]}
//                       >
//                         {success && progresssuccess ? (
//                           <div>
//                             <TreeItem
//                               nodeId="100"
//                               label={
//                                 <pre className="text-2xl font-serif">
//                                   1. English{" "}
//                                   {comEnglish ? (
//                                     <FontAwesomeIcon
//                                       icon={faCheck}
//                                       style={{
//                                         color: "green",
//                                         fontSize: "15px",
//                                       }}
//                                     />
//                                   ) : (
//                                     ""
//                                   )}
//                                 </pre>
//                               }
//                             >
//                               {comEnglish ? "" : englishRender()}
//                             </TreeItem>
//                             <TreeItem
//                               nodeId="200"
//                               label={
//                                 <pre className="text-2xl font-serif">
//                                   2. Agile - Jira{" "}
//                                   {comAgile ? (
//                                     <FontAwesomeIcon
//                                       icon={faCheck}
//                                       style={{
//                                         color: "green",
//                                         fontSize: "15px",
//                                       }}
//                                     />
//                                   ) : (
//                                     ""
//                                   )}
//                                   {!comEnglish
//                                     ? " ( Complete English Path. )"
//                                     : ""}
//                                 </pre>
//                               }
//                             >
//                               {comAgile ? "" : agileRender()}
//                             </TreeItem>
//                             <TreeItem
//                               nodeId="300"
//                               label={
//                                 <pre className="text-2xl font-serif">
//                                   3. Git{" "}
//                                   {comGit ? (
//                                     <FontAwesomeIcon
//                                       icon={faCheck}
//                                       style={{
//                                         color: "green",
//                                         fontSize: "15px",
//                                       }}
//                                     />
//                                   ) : (
//                                     ""
//                                   )}
//                                   {!comAgile ? " ( Complete Agile Path. )" : ""}
//                                 </pre>
//                               }
//                             >
//                               {comGit ? "" : gitRenderer()}
//                             </TreeItem>
//                             <TreeItem
//                               nodeId="400"
//                               label={
//                                 <h6 className="text-2xl font-serif">
//                                   4. Choices{" "}
//                                   {comChoice ? (
//                                     <FontAwesomeIcon
//                                       icon={faCheck}
//                                       style={{
//                                         color: "green",
//                                         fontSize: "15px",
//                                       }}
//                                     />
//                                   ) : (
//                                     ""
//                                   )}
//                                   {!comGit ? " ( Complete Git Path. )" : ""}
//                                 </h6>
//                               }
//                             >
//                               {comChoice ? "" : chooseLanRenderer()}
//                             </TreeItem>
//                             <TreeItem
//                               nodeId="500"
//                               label={
//                                 <h6 className="text-2xl font-serif">
//                                   {programLang === "js" ? (
//                                     <pre className="text-2xl font-serif">
//                                       5. JavaScript ({" "}
//                                       <a
//                                         href="https://roadmap.sh/javascript"
//                                         className="text-orange-700  hover:text-blue-500 underline font-serif"
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                       >
//                                         Roadmap
//                                       </a>{" "}
//                                       ){" "}
//                                       {comProgram === true ? (
//                                         <FontAwesomeIcon
//                                           icon={faCheck}
//                                           style={{
//                                             color: "green",
//                                             fontSize: "15px",
//                                           }}
//                                         />
//                                       ) : (
//                                         ""
//                                       )}
//                                     </pre>
//                                   ) : programLang === "py" ? (
//                                     <pre className="text-2xl font-serif">
//                                       5. Python ({" "}
//                                       <a
//                                         href="https://roadmap.sh/python"
//                                         className="text-orange-700 hover:text-blue-500 underline font-serif"
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                       >
//                                         Roadmap
//                                       </a>{" "}
//                                       ){" "}
//                                       {comProgram === true ? (
//                                         <FontAwesomeIcon
//                                           icon={faCheck}
//                                           style={{
//                                             color: "green",
//                                             fontSize: "15px",
//                                           }}
//                                         />
//                                       ) : (
//                                         ""
//                                       )}
//                                     </pre>
//                                   ) : (
//                                     "5. Choosen Language"
//                                   )}
//                                   {programLang
//                                     ? ""
//                                     : "(Choose a language from above Path.)"}
//                                 </h6>
//                               }
//                             >
//                               {!comProgram && programLang === "js"
//                                 ? jsRenderer()
//                                 : !comProgram && programLang === "py"
//                                 ? pyRenderer()
//                                 : ""}
//                             </TreeItem>
//                             <TreeItem
//                               nodeId="700"
//                               label={
//                                 <h6 className="text-2xl font-serif">
//                                   6. Track{" "}
//                                   {comChooseTrack ? (
//                                     <FontAwesomeIcon
//                                       icon={faCheck}
//                                       style={{
//                                         color: "green",
//                                         fontSize: "15px",
//                                       }}
//                                     />
//                                   ) : (
//                                     ""
//                                   )}
//                                   {!comProgram
//                                     ? " ( Complete Above Path. )"
//                                     : ""}
//                                 </h6>
//                               }
//                             >
//                               {comChooseTrack ? (
//                                 ""
//                               ) : (
//                                 <TreeItem
//                                   nodeId="701"
//                                   label={
//                                     <h6 className="text-2xl font-serif">
//                                       1. Choose Track
//                                     </h6>
//                                   }
//                                 ></TreeItem>
//                               )}
//                             </TreeItem>
//                             <TreeItem
//                               nodeId="500"
//                               label={
//                                 <h6 className="text-2xl font-serif">
//                                   {comChooseTrack === "backend" ? (
//                                     <pre className="text-2xl font-serif">
//                                       7. Backend ({" "}
//                                       <a
//                                         href="https://roadmap.sh/backend"
//                                         className="text-orange-700  hover:text-blue-500 underline font-serif"
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                       >
//                                         Roadmap
//                                       </a>{" "}
//                                       ){" "}
//                                       {comTrack1 === true ? (
//                                         <FontAwesomeIcon
//                                           icon={faCheck}
//                                           style={{
//                                             color: "green",
//                                             fontSize: "15px",
//                                           }}
//                                         />
//                                       ) : (
//                                         ""
//                                       )}
//                                     </pre>
//                                   ) : comChooseTrack === "frontend" ? (
//                                     <pre className="text-2xl font-serif">
//                                       7. Frontend ({" "}
//                                       <a
//                                         href="https://roadmap.sh/frontend"
//                                         className="text-orange-700 hover:text-blue-500 underline font-serif"
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                       >
//                                         Roadmap
//                                       </a>{" "}
//                                       ){" "}
//                                       {comTrack1 === true ? (
//                                         <FontAwesomeIcon
//                                           icon={faCheck}
//                                           style={{
//                                             color: "green",
//                                             fontSize: "15px",
//                                           }}
//                                         />
//                                       ) : (
//                                         ""
//                                       )}
//                                     </pre>
//                                   ) : (
//                                     "5. Choosen Track"
//                                   )}
//                                   {comChooseTrack
//                                     ? ""
//                                     : "(Choose a track from above Path.)"}
//                                 </h6>
//                               }
//                             >
//                               {!comTrack1 && comChooseTrack === "backend"
//                                 ? jsRenderer()
//                                 : !comProgram && comChooseTrack === "frontend"
//                                 ? pyRenderer()
//                                 : ""}
//                             </TreeItem>
//                           </div>
//                         ) : (
//                           reloadFunc()
//                         )}
//                       </TreeView>
//   )
// }

// export default Dummy

import React from 'react'

const Dummy = () => {
  return (
    <div>Dummy</div>
  )
}

export default Dummy