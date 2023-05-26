import React, {useContext} from "react";

import App, { AppContext } from "../App";

const Context = () => {

    const details = useContext(AppContext)

    return (
        <>
            {details && (
                <div>
                    <p>Linguagem: {details.language}</p>
                    <p>FW: {details.framework}</p>
                    <p>QTD: {details.projects}</p>
                </div>
            )}
        </>
    )
}

export default Context