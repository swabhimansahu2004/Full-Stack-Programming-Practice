import "bootstrap/dist/css/bootstrap.min.css";
import HeaderComponent from "./Components/HeaderComponent.jsx";
import FooterComponent from "./Components/FooterComponent.jsx";
import SideBar from "./Components/Sidebar.jsx";
import "./App.css";
import CreatePost from "./Components/CreatePost.jsx";
import PostList from "./Components/PostList.jsx";
import { useState } from "react";
import PostListProvider from "./Store/PostListStore.jsx";

function App(){
  
  const [selectedTab,setSelectedTab] = useState('Home');//used useState to show the active tab
  return (
  <PostListProvider>
  <div className="app-container"> 
  <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></SideBar>
  <div className="content-container">
  <HeaderComponent></HeaderComponent>
  {selectedTab === "Home" ? (<PostList></PostList>) : (<CreatePost></CreatePost>)}
  <FooterComponent></FooterComponent>
  </div>
  </div>
  </PostListProvider>
  );//here all  the components are called and active tab is shown 
};
export default App;