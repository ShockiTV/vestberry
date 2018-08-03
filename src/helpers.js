import React from "react";
import { branch, renderComponent, compose, withProps } from "recompose";

const getFailedQueries = (props, propNames) => propNames.map(prop => props[prop]).filter(prop => prop.error);

export const renderWhileLoadingOrError = (componentLoading, componentError, propNames = ["data"]) =>
  branch(
    props => propNames.some(query => props[query] && (props[query].loading)),
    renderComponent(componentLoading),
    branch(
      props => propNames.some(query => props[query] && props[query].error),
      compose(
        withProps(props => ({
          queries: getFailedQueries(props, propNames),
        })),
        renderComponent(componentError),
      ),
    ),
  );

export const LoadingComponent = () => (<span>Loading data...</span>);
