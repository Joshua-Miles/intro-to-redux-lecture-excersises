import React from 'react'
import { connect } from 'react-redux'

const _ = result => result => result

const mapStateToProps= state => {
    return {}
}

const mapDispatchToProps = {
    _: _
}

export const Button =  _(mapStateToProps, mapDispatchToProps)(props => (
    <button onClick={props.incrementCount}>Increase Count</button>
))