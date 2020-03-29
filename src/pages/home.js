import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Banner from '../components/banner';
import Donate from '../components/donate';
import RequestCodes from '../components/request-codes';
import BusinessSignUp from '../components/business-sign-up';
import Footer from '../components/footer';
import { AuthUserContext } from '../components/auth/Session';
import SignOutButton from '../components/auth/SignOutButton';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    backgroundColor: '#efefef',
  },
  ctas: {
    padding: 16,
    flexGrow: 1,
  },
  spacer: {
    flex: 1,
  },
}));

const LogIn = () => (
  <Link to="/login">Log in</Link>
);

const LogOut = ({user}) => (
  <div>
    {`Logged in as ${user}`}
    <SignOutButton />
  </div>
);

function Home() {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Banner />
      <Container>
        <Grid
          spacing={2}
          container
          className={styles.ctas}
        >
          <Donate />
          <RequestCodes />
          <BusinessSignUp />
        </Grid>
        <div>
          <AuthUserContext.Consumer>
            {authContext => authContext.isAuthenticated ? <LogOut user={authContext.user.email} /> : <LogIn />}
          </AuthUserContext.Consumer>
        </div>
        <div className={styles.spacer} />
        <Footer />
      </Container>
    </div>
  );
}

export default Home;
