import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './assets/css/App.css';
import Header from './components/NavBar.tsx';
import Loading from "./components/Loading.tsx";
import Cursor from "./components/Cursor.tsx";
import Home from "./components/home/Home.tsx";

interface AppState {
  isLoading: boolean;
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2000);
  }

  render() {
    return (
      <>
        {this.state.isLoading ? (
          <Loading />
        ) : (
          <Router>
            <Cursor />
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
        )}
      </>
    );
  }
}

export default App;