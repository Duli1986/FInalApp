import React, { Component } from 'react';
import 'react-dates/initialize';

import Layout from './hoc/Layout';
import RoomAvailability from './hoc/RoomAvailability';

const styles = theme => ({
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
        <div>
          <Layout>
            <RoomAvailability />
          </Layout>
        </div>
    );
  }
}

export default App;
