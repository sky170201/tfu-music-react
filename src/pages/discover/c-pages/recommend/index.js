import React, { memo, useEffect } from 'react'
import { connect } from 'react-redux'

import { getTopBannerAction } from './store/actionCreators'

function TFRecommend(props) {
    const {getBanners} = props
    
    useEffect(() => {
        getBanners()
    }, [getBanners])

    return (
        <div>
            <h2>TFRecommend</h2>
        </div>
    )
}

const mapStateToProps = state => ({
  topBanners: state.recommend.topBanners
});

const mapDispatchToProps = dispatch => ({
  getBanners: () => {
    dispatch(getTopBannerAction())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(memo(TFRecommend))