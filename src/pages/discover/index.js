import React, { memo, useEffect } from 'react'
import { renderRoutes } from 'react-router-config'

import { dicoverMenu } from '@/common/local-data'
import request from '@/services/request'

import {
    DiscoverWrapper,
    TopMenu
} from './style'
import { NavLink } from 'react-router-dom'

export default memo(function TFDiscover(props) {
    
    useEffect(() => {
        request({
            url: '/banner'
        }).then(res => {
            console.log(res)
        })
    }, [])
    
    const discoverRoute = props.route
    console.log(props)
    return (
        <DiscoverWrapper>
            <div className="top">
                <TopMenu className="wrap-v1">
                    {
                        dicoverMenu.map((item, index) => {
                            return(
                                <div className="item" key={item.title}>
                                    <NavLink to={item.link}>{item.title}</NavLink>
                                </div>
                            )
                        })
                    }
                </TopMenu>
            </div>
            {renderRoutes(discoverRoute.routes)}
        </DiscoverWrapper>
    )
})
