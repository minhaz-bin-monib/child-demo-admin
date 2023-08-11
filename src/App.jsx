import { Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import AllApps from "./pages/AllApps";
import Analytics from "./pages/Analytics";
import Authentication from "./pages/Authentication";
import Build from "./pages/Build";
import Settings from "./pages/Settings";
import Stroage from "./pages/Stroage";
import DeleteNurse from "./pages/DeleteNurse";

const App = () => {



  const router = createBrowserRouter([
    {
      path: '/',
      element: <AllApps></AllApps>,
      children: [
        {
          path : '/',
          element : <AllApps></AllApps>
        },
        {
          path : '/authentication',
          element : <Authentication></Authentication>
        },
        {
          path : '/stroage',
          element : <Stroage></Stroage>
        },
        {
          path : '/settings',
          element : <Settings></Settings>
        },
        {
          path : '/analytics/:aID',
          element : <Analytics></Analytics>
        },
        {
          path : '/Nurses/DeleteNurse',
          element : <DeleteNurse></DeleteNurse>,
          loader: () => fetch('http://localhost:5000/users')
        }
        
  
  
      ]
    }
  ])




  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<AllApps />} />
        <Route path="/authentication" element={<Authentication />}  />
        <Route path="/stroage" element={<Stroage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/build/:bID" element={<Build />} />
        <Route path="/analytics/:aID" element={<Analytics />} />
        <Route path="/Nurses/DeleteNurse" element={<DeleteNurse/>}  />
      </Routes>
    </RootLayout>

  

      // <div>
      //   <RootLayout>
      //   <RouterProvider router={router}></RouterProvider>
      // </RootLayout>
      // </div>
      
      
   

    
  );

 
};

export default App;
