import React from "react";
import { Button } from "./styles";

const Buttons = ({children, ...props}) =>{
    return <Button {...props}>{children}</Button>
}

export default Buttons