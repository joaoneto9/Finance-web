import type { JSX, ReactNode } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import "../style/BrowserRouter.css"

interface page {
    name: string,
    reactPage: JSX.Element
}

interface props {
    pages: page[]
}

function BrowserRouterComponent({pages}: props) {
    const links = (): ReactNode => {
        return pages.map((page: page) => ( 
            <>
                <Link to={`/${page.name}`}> {page.name} </Link>
                <br/>
            </>
        ))
    }

    const routes = (): ReactNode => {
        return pages.map((page: page) => (
            <>
                <Route path={page.name} element={page.reactPage}/>
            </>
        ))
    }

    return (
        <BrowserRouter>
            <div className="browser-routes-container">
                <nav>
                    {links()}
                </nav>
            </div>             
            
            <Routes>
                {routes()}
            </Routes>
        </BrowserRouter>
    )
}

export default BrowserRouterComponent;