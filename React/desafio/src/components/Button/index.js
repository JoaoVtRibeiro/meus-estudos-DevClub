import React from "react";
import { Button } from "./styles";

const Buttons = ({children, backButton}) =>{
    return <Button backButton={backButton}>{children}</Button>
}

export default Buttons