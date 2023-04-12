import { createBrowserRouter, RouterProvider, useParams } from "react-router-dom";
import ComposeMail from "./component/ComposeMail";
import ReadMail from "./component/ReadMail";
import Inbox from "./Routerpages/Inbox";



function App() {
  let {id}=useParams()
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Inbox/>
    },
    {
      path:"/ComposeMail",
      element:<ComposeMail/>
    },{
      path:":id",
      element:<ReadMail/>
    }

  ])
  
  return (
    <div>
    
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
