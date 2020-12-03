import React from "react";
import styled from "styled-components";

import config from "../../../config.json";

// components
import FilterBase from "../FilterBase/FilterBase";

import {
  CheckboxFilter,
  TermQuery,
  Select,
  RefinementListFilter,
  SearchkitManager,
} from "searchkit";

// images
import ProcessTypeIcon from "../../../img/processTypeIcon";
import OnHoldIcon from "../../../img/onHoldIcon";

// STYLES

const IconProps = styled.div`
  width: 4rem;
  margin: 2rem 2.4rem auto 0;
  cursor: pointer;
`;

const Value = styled.div`
  font-size: 1.2rem;
  margin: auto 0 auto 0;
  text-transform: uppercase;
  width: 88%;
  text-align: left;
`;

const FilterOptionDiv = styled.div`
  cursor: pointer;
  width: 100%;
  height: 6.4rem;
  display: flex;
  padding-left: ${(props) => props.padding};
  -webkit-transition: all 500ms ease;
  -moz-transition: all 500ms ease;
  -ms-transition: all 500ms ease;
  -o-transition: all 500ms ease;
  transition: all 500ms ease;
  color: var(--greyish-brown);

  :hover {
    background-color: var(--ice-blue);
    border: none;
    border-left: solid 4px var(--ocean-blue);
    padding-left: 4.5rem;
    color: var(--ocean-blue);
    g {
      stroke: var(--ocean-blue);
    }
    .line {
      display: none;
    }
  }
`;

const OnHold = ({ children, classNameFilter, showing }) => {
  return (
    <div>
      <FilterOptionDiv padding="38px" className={classNameFilter}>
        <IconProps className="btn_hide">
          {" "}
          <OnHoldIcon width="25px" height="24px" color="var(--greyish-brown)" />
        </IconProps>
        {showing ? <Value>ON HOLD</Value> : null}
        {showing ? (
          <CheckboxFilter
            id={config.filters.onHold.id}
            field={config.filters.onHold.fields}
            showCount={false}
            orderDirection="desc"
            filter={TermQuery("ON_HOLD_ORDER_AND_LOCKED_FLAG", "1")}
          />
        ) : null}
      </FilterOptionDiv>

      <div className="content"></div>
    </div>
  );
};

export default OnHold;
