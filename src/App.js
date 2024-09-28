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

  //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  //HANDLE PROJECT STATUS SELECTION
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

  function showSelectedProject(projID) {
    setCreateProject(prevProject => {
      return {
        ...prevProject,
        selectedProjectID: projID
      }
    })

  }

  //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  //HANDLE PROJECTS CREATION AND DELETION
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

  function handleRemoveProject() {
    setCreateProject(prevProject => {
      const projectsLeft = createProject.projects.filter(project => project.id !== createProject.selectedProjectID)
      const tasksLeft = createProject.tasks.filter(task => task.project_id !== createProject.selectedProjectID)
      
      return {
        ...prevProject,
        selectedProjectID: undefined,
        projects: [...projectsLeft],
        tasks: [...tasksLeft]
      }
    })
  }

    //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    //HANDLE TASKS CREATION AND DELETION
    function addNewTask(text) {
      setCreateProject(prevProject => {
        const newTask = {
          id: Math.random(),
          project_id: prevProject.selectedProjectID,
          task_title: text
        }
        return {
          ...prevProject,
          tasks: [...prevProject.tasks, newTask]
        }
      })
    }

    function removeTask(id) {
      setCreateProject(prevProject => {
        const tasksLeft = createProject.tasks.filter(task => task.id !== id)
        return {
          ...prevProject,
          tasks: [...tasksLeft]
        }
      })
    }
  
  
  const selectedProject = createProject.projects.find(project => project.id === createProject.selectedProjectID)
  const selectedTasks = createProject.tasks.filter(task => task.project_id === createProject.selectedProjectID)
  console.log(createProject);
 
  let main_content = <ProjectView project={selectedProject} tasks={selectedTasks} onAdd={addNewTask} onDelete={removeTask} onRemove={handleRemoveProject}/>

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
