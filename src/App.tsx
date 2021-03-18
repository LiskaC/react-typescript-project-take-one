import * as React from "react";
import './App.css';

import { StoryboardListScreen } from "./screens/Storyboard_List";
import { Navigator } from './config/Navigator';

function App() {
  return (
    <div className="App">
      <Navigator childComp={<StoryboardListScreen />} />
    </div>
  );
}

export default App;
