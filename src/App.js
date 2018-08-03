import React from 'react'
import {ApolloProvider} from 'react-apollo'
import Page from './Page'
import client from './apollo'
import 'App.scss'

const App = () =>
  <div styleName="main">
    <div styleName="header">
      VESTBERRY TEST ASSIGNMENT
    </div>
    <div styleName="content">
      <ApolloProvider client={client}>
        <Page />
      </ApolloProvider>
    </div>
  </div>

export default App
