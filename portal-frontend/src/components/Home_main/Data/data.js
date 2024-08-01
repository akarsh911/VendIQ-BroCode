import React from "react";

// Creating the context object and passing the default values.
import Data from "./Info.json";
const authContext = React.createContext(Data);

export default authContext;
