import React from "react";
import cl from "./Error404.module.css"

function Error404() {
    return (
        <div className={cl.errorPage}>
            <div className={cl.num}>404</div>
            <div>Page not found!</div>
            <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    );
}

export default Error404;
