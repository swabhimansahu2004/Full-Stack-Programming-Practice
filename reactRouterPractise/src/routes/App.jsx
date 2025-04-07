import "bootstrap/dist/css/bootstrap.min.css";
import HeaderComponent from "../Components/HeaderComponent.jsx";
import FooterComponent from "../Components/FooterComponent.jsx";
import SideBar from "../Components/Sidebar.jsx";
import "./App.css";
import CreatePost from "../Components/CreatePost.jsx";
import PostList from "../Components/PostList.jsx";
import { useState } from "react";
import PostListProvider from "../Store/PostListStore.jsx";
import { Outlet } from "react-router-dom";

function App(){
  
  const [selectedTab,setSelectedTab] = useState('Home');
  return (
  <PostListProvider>
  <div className="app-container"> 
  <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></SideBar>
  <div className="content-container">
  <HeaderComponent></HeaderComponent>
  <Outlet></Outlet>
  {/* {selectedTab === "Home" ? (<PostList></PostList>) : (<CreatePost></CreatePost>)} */}
  <FooterComponent></FooterComponent>
  </div>
  </div>
  </PostListProvider>
  );
};
export default App;