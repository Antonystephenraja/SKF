import "./index.css";
import Login from "./routes/Login";
import {Route,Routes,Navigate} from 'react-router-dom'
import DashMain from "./routes/DashMain";
import DashGraph from "./routes/DashGraph";
import DashReports from "./routes/DashReports";
import DashSettings from "./routes/DashSettings";
import DashAdmin from "./routes/DashAdmin";
import SkfAdmin from "./routes/SkfAdmin";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import ChildRoutes from "./routes/ChildRoutes";

function App() {
  const Access = localStorage.getItem('token');
  const data = JSON.parse(Access);
  const role = data ? data.role : 'N/A';
  const Access_Role = role === 'admin'
  console.log(role)
  console.log(Access_Role)
  return (
    <div>
      <Routes>      
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRoutes/>}>
          {!Access_Role ? ( 
            <Route path="/" element={<ChildRoutes/>}>
              <Route index element={<DashMain />}/>
              <Route path="dashgraph" element={<DashGraph />} />
              <Route path="dashreports" element={<DashReports />} />
              <Route path="dashsettings" element={<DashSettings />} />
            </Route>
          ): (
            <Route path="/" element={<ChildRoutes/>}>
            <Route index element={<DashAdmin />} />
            <Route path="skfadmin" element={<SkfAdmin />} />
          </Route>
          )}

        </Route>
        <Route path="*" element={<div>Page Not Found</div>} />

      </Routes>
    </div>
  );
}

export default App;
