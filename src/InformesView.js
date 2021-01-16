import './App.css';
import * as React from 'react';
import { Component } from 'react';
import InformesViewData from './Datatables/InformesViewData';


class InformesView extends Component {
  render() {
    return (<React.Fragment>
      <InformesViewData />
    </React.Fragment>
    );
  }

}

export default InformesView;