import React from 'react'
import { Card, List } from "antd";
import {graphql, compose} from 'react-apollo'
import "./SectorsContainer.scss"
import lodash from 'lodash';
import { LoadingComponent, renderWhileLoadingOrError } from "./helpers";
import { getCompanies, getSectors } from "./Page.queries";

// import fintechIcon from 'svg-react-loader?name=fintechIcon!./assets/ico_fintech.svg'
import insuretechIcon from "./assets/ico_insurtech.svg"
import iotIcon from "./assets/ico_iot.svg"
import roboIcon from "./assets/ico_roboadvisory.svg"

const iconMap = {
  // "Fintech": fintechIcon,
  "IOT": iotIcon,
  "Roboadvisory": roboIcon,
  "Insuretech": insuretechIcon
};


const SectorsContainer = props => {
  const data = props.sectors.sector.map(sector => ({
    count: lodash.filter(props.companies.company, company => (company.sector === sector)).length,
    name: sector,
    icon: iconMap[sector]
  }))
  console.log(props);
  console.log(data);
  return (
    <Card title="COMPANIES BY SECTORS">
      <List
        grid={{xs: 4}}
        dataSource={data}
        renderItem={item => (
          <List.Item key={item.name} styleName="list-item">
            <span styleName="count">{item.count}</span>
            <span styleName="name">{item.name}</span>
            <img styleName="icon" src={item.icon} alt="" />
          </List.Item>
        )}
      />
    </Card>
  )
};

export default compose(
  graphql(getSectors, {name: 'sectors'}),
  graphql(getCompanies, {name: 'companies'}),
  renderWhileLoadingOrError(LoadingComponent, LoadingComponent, ['sectors', 'companies'])
)(SectorsContainer);
