import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'

import routes from './router'

import TFAppHeader from '@/components/app-header'
import TFAppFooter from '@/components/app-footer'
import { HashRouter } from 'react-router-dom'

export default memo(function App() {
    return (
        <HashRouter>
            <TFAppHeader />
            <h2>App</h2>
            { renderRoutes(routes) }
            <TFAppFooter />
        </HashRouter>
    )
})
