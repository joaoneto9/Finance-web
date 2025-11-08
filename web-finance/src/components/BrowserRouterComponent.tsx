import type { JSX, ReactNode } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

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
            <nav>
                {links()}
            </nav>
            
            <Routes>
                {routes()}
            </Routes>
        </BrowserRouter>
    )
}

export default BrowserRouterComponent;