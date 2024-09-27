import Sidebar from "./components/Sidebar.jsx";
import NoProject from "./components/NoProject.jsx";
import NewProject from "./components/NewProject.jsx";
import {useState} from 'react'


function App() {

  const [createProject, setCreateProject] = useState({
    selectedProjectID: undefined,
    projects: [],
    tasks: []
  })

  function handleSelectNewProject() {
    setCreateProject(prevProject => {
      // return an object
      return {
        ...prevProject,
        selectedProjectID: null
      }
    })
  }

  function handleCancelNewProject() {
    setCreateProject(prevProject => {
      // return an object
      return {
        ...prevProject,
        selectedProjectID: undefined
      }
    })
  }

  let main_content;
  if (createProject.selectedProjectID === undefined) {
    main_content = <NoProject onSelect={handleSelectNewProject}/>
  } else if (createProject.selectedProjectID === null) {
    main_content = <NewProject onCancel={handleCancelNewProject}/>
  }

  return (
    <div className="container">
      <Sidebar onSelect={handleSelectNewProject} />
      {main_content}
    </div>
  );
}

export default App;
