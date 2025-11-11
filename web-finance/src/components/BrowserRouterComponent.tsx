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

    const routes = (): ReactNode => {
        return pages.map((page: page) => (
            <>
                <Route path={page.name.toLowerCase()} element={page.reactPage}/>
            </>
        ))
    }

    return (
        <BrowserRouter>
            
            <Routes>
                {routes()}
            </Routes>
        </BrowserRouter>
    )
}

export default BrowserRouterComponent;