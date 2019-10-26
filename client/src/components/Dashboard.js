import React, { Fragment } from "react";
import { Grid, Header } from "semantic-ui-react";
const Dashboard = () => {
  return (
    <Fragment>
      <Grid
        textAlign="center"
        style={{ height: "50vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            Connecté!
          </Header>
        </Grid.Column>
      </Grid>
    </Fragment>
  );
};

export default Dashboard;
