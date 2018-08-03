import React from 'react'
import PropTypes from 'prop-types'
import { compose } from "recompose"
import { LoadingComponent, renderWhileLoadingOrError } from "./helpers";
import pageQueries from './Page.queries'

export const Page = ({data: {company, loading}}) => {

  return (
    <table>
      <tr>
        <th>COMPANY NAME</th>
        <th>STAGE</th>
        <th>SECTOR</th>
        <th>INVESTMENT SIZE</th>
      </tr>
      {
        company.map((company, i) =>
          <tr key={i}>
            <td>{company.name}</td>
            <td>{company.stage}</td>
            <td>{company.sector}</td>
            <td>{company.investmentSize}</td>
          </tr>
        )
      }
    </table>
  )
}

Page.propTypes = {
  data: PropTypes.shape({
    company: PropTypes.array.isRequired,
  })
}

export default compose(
  pageQueries,
  renderWhileLoadingOrError(LoadingComponent)
)(Page)
