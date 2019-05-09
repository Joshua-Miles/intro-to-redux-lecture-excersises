import React from 'react'
import { connect } from 'react-redux'
const _ = undefined

const mapStateToProps = state => {
    return {
        _: _
    }
}

const mapDispatchToProps = {}

export const Header = connect(_, _)(props => (
    <h1>The Count is: {props.count}</h1>
))