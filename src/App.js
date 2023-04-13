import { createBrowserRouter, RouterProvider, useParams } from "react-router-dom";
import ComposeMail from "./component/ComposeMail";
import ReadMail from "./component/ReadMail";
import Signinpage from "./component/Signin";
import Signuppage from "./component/Signup";
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
    },
    {
      path:"/signin",
      element:<Signinpage/>
    },
    {
      path:"/signup",
      element:<Signuppage/>
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
