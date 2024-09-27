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

  console.log(createProject);

  let main_content;
  if (createProject.selectedProjectID === undefined) {
    main_content = <NoProject onSelect={handleSelectNewProject}/>
  } else if (createProject.selectedProjectID === null) {
    main_content = <NewProject onCancel={handleCancelNewProject} onAdd={handleAddProject}/>
  }

  return (
    <div className="container">
      <Sidebar onSelect={handleSelectNewProject} projects={createProject.projects}/>
      {main_content}
    </div>
  );
}

export default App;
