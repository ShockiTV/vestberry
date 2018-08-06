import { Card, Col, Row } from "antd";
import PropTypes from 'prop-types';
import React from 'react';
import { compose, graphql } from 'react-apollo';
import { withPropsOnChange } from "recompose";
import { VictoryLabel, VictoryLegend, VictoryPie } from "victory";
import { LoadingComponent, renderWhileLoadingOrError } from "./helpers";
import { getCompanies } from "./Page.queries";

const colorScale = [
  "#3993BB",
  "#8BC34A",
  "#A767DD",
  "#23649E",
  "#FFC700",
  "#F000FF",
  "#ED3445",
  "#00A651"
]

const InvestmentContainer = ({ graphData }) => (
  <Card title="COMPANIES BY INVESTMENT SIZE">
    <Row>
      <Col span={12}>
        <Row
          type="flex"
          justify="center"
          align="top"
        >
          <svg viewBox="0 0 400 400" style={{width: "80%", margin: "-35px"}}>
            <VictoryPie
              standalone={false}
              width={400} height={400}
              data={graphData}
              innerRadius={100}
              colorScale={colorScale}
              labels={() => null}
            />
            <VictoryLabel
              textAnchor="middle"
              style={{ fontSize: 20 }}
              x={200} y={200}
              text={[`${graphData.length}`, "COMPANIES"]}
            />
          </svg>
        </Row>
      </Col>
      <Col span={12}>
        <Row
          type="flex"
          justify="center"
          align="top"
        >
          <VictoryLegend
            orientation="horizontal"
            itemsPerRow={2}
            colorScale={colorScale}
            data={graphData}
          />
        </Row>
      </Col>
    </Row>
  </Card>
)

InvestmentContainer.propTypes = {
  graphData: PropTypes.arrayOf(PropTypes.shape({
    x: PropTypes.string.isRequired,
    y: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }))
}

export default compose(
  graphql(getCompanies),
  renderWhileLoadingOrError(LoadingComponent),
  withPropsOnChange(
    ["data.company"],
    props => ({ graphData: (
      props.data.company &&
      props.data.company.map(company => ({
        name: company.name,
        x: company.name,
        y: company.investmentSize
      })
      )) || []
    })
  )
)(InvestmentContainer)
