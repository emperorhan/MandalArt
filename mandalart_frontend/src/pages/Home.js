import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'redux/modules/base';
import { MainContainer } from 'components/Base/Main';

class Home extends Component {
    componentWillMount() {
        this.props.BaseActions.setHeaderScrollNecessity(true);
    }

    componentWillUnmount() {
        this.props.BaseActions.setHeaderScrollNecessity(false);
    }

    render() {
        return (
            <MainContainer>
            </MainContainer>
        );
    }
}

export default connect(
    (state) => ({
        
    }),
    (dispatch) => ({
        BaseActions: bindActionCreators(baseActions, dispatch)
    })
)(Home);