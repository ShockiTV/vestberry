import React from 'react'
import PropTypes from 'prop-types'
import { compose } from "recompose"
import { LoadingComponent, renderWhileLoadingOrError } from "./helpers";
import pageQueries from './Page.queries'
import SectorsContainer from "./SectorsContainer";

export const Page = () => (
  <React.Fragment>
    <SectorsContainer />
  </React.Fragment>
)

Page.propTypes = {
}

export default Page;
