import React from 'react';
import {
  Header as WebsiteHeader,
  Segment,
  Icon,
  Grid,
} from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';

const Header = ({ handleLogout, history: { goBack }, visibleGoBack }) => {
  return (
    <Segment clearing>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column>
            {visibleGoBack && (
              <WebsiteHeader floated="left">
                <Icon
                  style={{ cursor: 'pointer' }}
                  name="arrow left"
                  onClick={goBack}
                />
              </WebsiteHeader>
            )}
          </Grid.Column>
          <Grid.Column>
            <WebsiteHeader
              className="header"
              as={Link}
              to="/"
              floated="right"
              onClick={handleLogout}
            >
              Log Out
            </WebsiteHeader>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default withRouter(Header);
