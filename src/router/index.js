import React from 'react'
import { Redirect } from "react-router-dom";

import TFDiscover from '../pages/discover'
import TFFriend from '../pages/friend'
import TFMine from '../pages/mine'

const routes = [
    {
        path: '/',
        exact: true,
        render: () => (
            <Redirect to="/discover"/>
        )
    },
    {
        path: "/discover",
        component: TFDiscover,
    },
    {
        path: '/friend',
        component: TFFriend
    },
    {
        path: '/mine',
        component: TFMine
    }
]

export default routes
