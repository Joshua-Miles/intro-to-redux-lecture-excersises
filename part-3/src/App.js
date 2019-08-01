import React from 'react';
import { connect } from 'react-redux'

const App = ({ count, incrementCount }) => {
  return (
      <h1 
        style={{ 
          textAlign: 'center',
          position: 'absolute',
          top: '50%',
          transform: 'translate(0, -150%)',
          width: '100%'
        }} 
        onClick={incrementCount} 
      >
        {count}
      </h1>
  )
}

const mapStateToProps = ({ count }) => (
  { count }
)
const mapDispatchToProps = {
  incrementCount: () => ({ type: 'INCREMENT_COUNT'})
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
