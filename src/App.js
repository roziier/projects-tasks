import Sidebar from "./components/Sidebar.jsx";
import NoProject from "./components/NoProject.jsx";
import NewProject from "./components/NewProject.jsx";
import ProjectView from "./components/ProjectView.jsx";

import {useState} from 'react'


function App() {

  const [createProject, setCreateProject] = useState({
    selectedProjectID: undefined,
    projects: [],
    tasks: []
  })

  //HANDLE PROJECT STATUS
  function handleSelectNewProject() {
    setCreateProject(prevProject => {
      // return an object
      return {
        ...prevProject,
        selectedProjectID: null
      }
    })
  }
  //HANDLE PROJECT STATUS
  function handleCancelNewProject() {
    setCreateProject(prevProject => {
      // return an object
      return {
        ...prevProject,
        selectedProjectID: undefined
      }
    })
  }
  //HANDLE PROJECT CREATION
  function handleAddProject(values) {
    setCreateProject(prevProject => {
      const newProj = {
        ...values,
        id: Math.random()
      }
      // return an object
      return {
        ...prevProject,
        selectedProjectID: undefined,
        projects: [...prevProject.projects, newProj]
      }
    })
  }

    function showSelectedProject(projID) {
      setCreateProject(prevProject => {
        return {
          ...prevProject,
          selectedProjectID: projID
        }
      })

    }
  

  console.log(createProject);
  const selectedProject = createProject.projects.find(project => project.id === createProject.selectedProjectID)

  let main_content = <ProjectView project={selectedProject}/>

  if (createProject.selectedProjectID === undefined) {
    main_content = <NoProject onSelect={handleSelectNewProject} projects={createProject.projects}/>
  } else if (createProject.selectedProjectID === null) {
    main_content = <NewProject onCancel={handleCancelNewProject} onAdd={handleAddProject}/>
  }

  return (
    <div className="container">
      <Sidebar onSelect={handleSelectNewProject} projects={createProject.projects} clickProject={showSelectedProject}/>
      {main_content}
    </div>
  );
}

export default App;
