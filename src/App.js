import "semantic-ui-css/semantic.min.css";
import "./App.css";
import ApolloWrapper from "./ApolloProvider";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { AuthProvider } from "./context/auth";
import AuthRoute from "./utils/AuthRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SinglePost from "./pages/SinglePost";
import MenuBar from "./components/MenuBar";
import { Container } from "semantic-ui-react";

function App() {
  return (
    <>
      <ApolloWrapper>
        <AuthProvider>
          <Router>
            <Container>
              <MenuBar />
              <Route exact path="/" component={Home} />
              <AuthRoute exacth path="/login" component={Login} />
              <AuthRoute exacth path="/register" component={Register} />
              <Route exact path="/posts/:postId" component={SinglePost} />
            </Container>
          </Router>
        </AuthProvider>
      </ApolloWrapper>
    </>
  );
}

export default App;
