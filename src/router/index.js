import React from 'react'
import { Redirect } from "react-router-dom";

import TFDiscover from '../pages/discover'
import TFFriend from '../pages/friend'
import TFMine from '../pages/mine'

import TFRecommend from "../pages/discover/c-pages/recommend";
import TFRanking from "../pages/discover/c-pages/ranking";
import TFSongs from "../pages/discover/c-pages/songs";
import TFDjradio from "../pages/discover/c-pages/djradio";
import TFArtist from "../pages/discover/c-pages/artist";
import TFAlbum from "../pages/discover/c-pages/album";

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
        routes: [
            {
              path: "/discover",
              exact: true,
              render: () => (
                <Redirect to="/discover/recommend"/>
              )
            },
            {
              path: "/discover/recommend",
              component: TFRecommend
            },
            {
              path: "/discover/ranking",
              component: TFRanking
            },
            {
              path: "/discover/songs",
              component: TFSongs
            },
            {
              path: "/discover/djradio",
              exact: true,
              component: TFDjradio
            },
            {
              path: "/discover/artist",
              component: TFArtist
            },
            {
              path: "/discover/album",
              component: TFAlbum
            }
        ]
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
