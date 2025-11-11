import type { ReactNode } from "react"
import { Link } from "react-router-dom"
import "../style/NavBrowser.css"
import React from "react"

interface content {
    name: string,
    link: string
}

interface props {
    contents: content[]
}

function NavBrowser({contents}: props) {
    const navContent = (): ReactNode => {
        return contents.map((content: content) => ( 
            <React.Fragment key={content.name}>
                <Link className="link" to={`/${content.link}`}>{content.name}</Link>
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

