import type { ReactNode } from "react"
import { Link } from "react-router-dom"
import "../style/NavBrowser.css"
import React from "react"

interface props {
    links: string[]
}

function NavBrowser({links}: props) {
    const navContent = (): ReactNode => {
        return links.map((name: string) => ( 
            <React.Fragment key={name}>
                <Link className="link" to={`/${name}`}>{name}</Link>
            </React.Fragment>
        ))
    }

    return (
        <>
            <div className="nav-content-container">
                <nav className="nav-element">
                    {navContent()}
                </nav>
            </div>
        </>
    )
}

export default NavBrowser;

