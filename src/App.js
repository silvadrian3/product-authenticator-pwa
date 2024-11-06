import React from "react";
import Routes from "./Routes";
import "./assets/styles/styles.css";

// import PubSub from "@aws-amplify/pubsub";
// PubSub.configure(awsmobile);
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

function App() {
  
  return <Routes />;
}

export default App;
