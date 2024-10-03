import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Registration from "./Registration";
import Post from "./Post";
import ReadMore from "./ReadMore";
import Parent from "./Parent";
import FormikWithMUI from "./FormikWithMUI";
import CurdWithReducer from "./CurdWithReducer";
import MyinfoWithDataGridDemo from "./MyinfoWithDataGridDemo";
import MyInfoCommentsApi from "./MyInfoCommentsApi";
import ParentMain from "./ParentMain";
import GitHub from "./GitHub";
import GitHubUser from "./GitHubUser";
import RefAndTheDom from "./RefAndTheDom";
import RefWithVideoExample from "./RefWithVideoExample";
import RefVideo from "./RefVideo";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          {/* <Route path='/product' element={<Product />} />
          <Route path='/counter' element={<Counter />} /> */}
          <Route
            path="/formikwithMUI"
            element={<FormikWithMUI></FormikWithMUI>}
          />
          <Route path="/post" element={<Post></Post>} />
          <Route
            path="/readmore"
            element={
              <ReadMore props="this is the javascript this is the javascript this is the javascript this is the javascript this is the javascript this is the javascript this is the javascript this is the javascript this is the javascript"></ReadMore>
            }
          />
          <Route path="/Parent" element={<Parent></Parent>} />
          <Route path="/myCurd" element={<CurdWithReducer />} />
          <Route path="/myInfo" element={<MyinfoWithDataGridDemo />} />
          <Route path="/myInfocomments" element={<MyInfoCommentsApi />} />
          <Route path="/parentMain" element={<ParentMain />} />
          <Route path="/Ref" element={<RefAndTheDom />} />
          <Route path="/RefVideo" element={<RefVideo />} />

          <Route path="/RefWithVideo" element={<RefWithVideoExample />} />

          <Route path="/github" element={<GitHub />} />
          <Route path="/github/:username/followers" element={<GitHubUser />} />
          <Route path="/github/:username/following" element={<GitHubUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
