import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider,createBrowserRouter } from "react-router-dom";
import App from '../src/routes/App.jsx'
import CreatePost, { createPostAction } from './Components/CreatePost.jsx'
import PostList from './Components/PostList.jsx'
import {PostLoader} from './Components/PostList.jsx'

const router=createBrowserRouter([{
  path:"/",
  element:<App />,
  children:[
    {path:"/",element:<PostList />, loader: PostLoader },
    {path:"/createpost",element:<CreatePost />,action: createPostAction}
  ]}
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
