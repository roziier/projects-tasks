import Sidebar from "./components/Sidebar.jsx";
import NoProject from "./components/NoProject.jsx";
import {useState} from 'react'


function App() {

  const [createProject, setCreateProject] = useState({
    selectedProjectID: undefined,
    projects: [],
    tasks: []
  })



  return (
    <div className="container">
      <Sidebar />
      <NoProject />
    </div>
  );
}

export default App;
