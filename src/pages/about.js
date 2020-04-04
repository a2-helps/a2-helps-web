import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Mission from '../components/mission';
import Wrapper from '../components/wrapper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '50px auto',
    maxWidth: '900px',
    color: '#3D3B39',
    [theme.breakpoints.up('md')]: {
      marginBottom: '10px',
      marginTop: '100px',
    },
  },
  subtitle: {
    fontSize: '24px',
    marginTop: '10px',
    marginBottom: '50px',
    maxWidth: '700px',
    fontWeight: 600,
    color: '#719F20',
  },
  cahoots: {
    color: '#719F20',
    textDecoration: 'none',
    borderBottom: '2px #719F20 solid',

  },
  h2: {
    fontWeight: 300,
    fontSize: '30px',
    [theme.breakpoints.up('md')]: {
      fontSize: '42px',
    },
  },
  h3: {
    fontSize: '20px',
    marginTop: '30px',
    marginBottom: '15px',
    color: 'primary',
  },
  body: {
    marginBottom: '12px',
  },
  imgDesktop: {
    display: 'none',
    width: '100%',
    maxWidth: '900px',
    margin: '0 auto',
    marginTop: '40px',
    marginBottom: '70px',
    [theme.breakpoints.up('md')]: {
      display: 'block',
      maxWidth: '850px',
      marginTop: '70px',
      marginBottom: '150px',
    },
  },
  imgMobile: {
    display: 'block',
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
    marginBottom: '50px',
    marginTop: '40px',
    marginBottom: '70px',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },

  teamSection: {
    marginBottom: '70px',
   },
  headshot: {
    maxWidth: '170px',
    borderRadius: '3px',
    boxShadow: '0px 0px 10px 1px rgba(0,0,0,0.18)',
  },
  teamCall: {
    width: '100%',
    boxShadow: '0px 0px 20px 1px rgba(0,0,0,0.33)',
    borderRadius: '3px 3px 0px 0px',
  },
  left: {
    maxWidth: '300px',
  },
  right: {
    maxWidth: '450px',
  },
  person: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  teammate: {
    fontSize: '20px',
    marginTop: '10px',
    color: 'primary',
    fontWeight: 600,
    marginBottom: '5px',
  },
  role: {
    fontSize: '14px',
    lineHeight: '17px',
    color: '#719F20',
  },
  company: {
    fontSize: '14px',
    margin: '5px 0',
    opacity: '.6',
    
  },
}));

const AboutContent = () => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Typography variant="h2" className={styles.h2}>
        About A2 Helps
      </Typography>
      <Typography variant="body1" className={styles.subtitle}>
        Brought together by <a target="_blank" href="https://cahoots.com/" className={styles.cahoots}>Cahoots</a>, we’re an organization designed to help our local businesses and healthcare professionals.
      </Typography>

      <Typography variant="h3" className={styles.h3}>
        Why did we start A2 Helps?
      </Typography>
      <Typography variant="body1" className={styles.body}>
       This pandemic is unprecedented. The uncertainty that our community now faces is incredibly taxing, both emotionally, and financially.
      </Typography>
      <Typography variant="body1" className={styles.body}>
        Small businesses are being impacted with a rapid decline in operating cash to support their teams, pay their overhead and ensure their long term survival.
      </Typography>
      <Typography variant="body1" className={styles.body}>
      <Typography variant="body1" className={styles.body}>
       Small businesses are being impacted with a rapid decline in operating cash to support their teams, pay their overhead and ensure their long term survival.
      </Typography>
      </Typography>
      <Typography variant="body1" className={styles.body}>
        Meanwhile, there are people who are risking their lives every day to ensure we are well taken care of and stocked with food and other necessities. We started A2 Helps to provide a token of our gratitude for their service.
      </Typography>

      <Typography variant="h3" className={styles.h3}>
        How do we operate?
      </Typography>
      <Typography variant="body1" className={styles.body}>
        A2 Helps receives donations from the community to purchase gift cards from local restaurants and retail stores. These gift cards are then electronically distributed to healthcare professionals, in partnership with St. Joe’s Hospital and The University of Michigan Hospital.  
      </Typography>
      <img className={styles.imgDesktop} src={"diagramDesktop.png"} alt="A2Cares" />
      <img className={styles.imgMobile} src={"diagramMobile.png"} alt="A2Cares" />
      
      <Grid
        container
        className={styles.teamSection}
        justify='center'
        alignItems='center'
        spacing={4}
        >
        <Grid item xs={12} md={6} className={styles.left}>
        <Typography variant="h3" className={styles.h3}>
          Meet the Team
        </Typography>
        <Typography variant="body1" className={styles.body}>
          We couldn’t have built A2 helps without our amazing volunteers. Brought together by Cahoots, we have over 10 volunteer engineers, designers, and marketers dedicated to launching this organization and supporting healthcare professionals and local businesses.
        </Typography>
        </Grid>
        <Grid item xs={12} md={6} className={styles.right}>
          <img className={styles.teamCall} src={"headshots/team-call.png"} alt="Team Zoom Call" />
        </Grid>
      </Grid>

       <Grid
        container
        className={styles.team}
        >
        
        <Grid item xs={6} md={3} className={styles.person}>
          <img className={styles.headshot} src={"headshots/joe-malcoun.png"} alt="Joe Malcoun headshot" />
          <Typography variant="h4" className={styles.teammate}>
          Joe Malcoun
          </Typography>
          <Typography variant="body1" className={styles.role}>
            Founder
          </Typography>
          <Typography variant="body1" className={styles.company}>
            Cahoots
          </Typography>
        </Grid>

         <Grid item xs={6} md={3} className={styles.person}>
          <img className={styles.headshot} src={"headshots/alison-todak.png"} alt="Alison Todak headshot" />
          <Typography variant="h4" className={styles.teammate}>
            Alison Todak
          </Typography>
          <Typography variant="body1" className={styles.role}>
            Operations
          </Typography>
          <Typography variant="body1" className={styles.company}>
            Cahoots
          </Typography>
        </Grid>

         <Grid item xs={6} md={3} className={styles.person}>
          <img className={styles.headshot} src={"headshots/kristen-gray.png"} alt="Kristen Gray headshot" />
          <Typography variant="h4" className={styles.teammate}>
            Kristen Gray
          </Typography>
          <Typography variant="body1" className={styles.role}>
            Communications &
          </Typography>
          <Typography variant="body1" className={styles.role}>
            Community Outreach
          </Typography>
          <Typography variant="body1" className={styles.company}>
            Nutshell
          </Typography>
        </Grid>


         <Grid item xs={6} md={3} className={styles.person}>
          <img className={styles.headshot} src={"headshots/patrick-mccarren.png"} alt="Patrick McCarren headshot" />
          <Typography variant="h4" className={styles.teammate}>
            Patrick McCarren
          </Typography>
          <Typography variant="body1" className={styles.role}>
            App Development
          </Typography>
          <Typography variant="body1" className={styles.company}>
            Cumulative & Wedge
          </Typography>
        </Grid>

         <Grid item xs={6} md={3} className={styles.person}>
          <img className={styles.headshot} src={"headshots/emma-furlong.png"} alt="Emma Furlong headshot" />
          <Typography variant="h4" className={styles.teammate}>
            Emma Furlong
          </Typography>
          <Typography variant="body1" className={styles.role}>
            Marketing
          </Typography>
          <Typography variant="body1" className={styles.company}>
            Clinc
          </Typography>
        </Grid>

        <Grid item xs={6} md={3} className={styles.person}>
          <img className={styles.headshot} src={"headshots/austin-psychas.png"} alt="Austin Psychas headshot" />
          <Typography variant="h4" className={styles.teammate}>
            Austin Psychas
          </Typography>
          <Typography variant="body1" className={styles.role}>
            Communications &
          </Typography>
          <Typography variant="body1" className={styles.role}>
            Community Outreach
          </Typography>
          <Typography variant="body1" className={styles.company}>
            DaySmart Software
          </Typography>
        </Grid>


        <Grid item xs={6} md={3} className={styles.person}>
          <img className={styles.headshot} src={"headshots/jim-hall.png"} alt="Jim-Hall headshot" />
          <Typography variant="h4" className={styles.teammate}>
            Jim Hall
          </Typography>
          <Typography variant="body1" className={styles.role}>
            App Development
          </Typography>
          <Typography variant="body1" className={styles.company}>
            Dynamo Metrics & Brooklet
          </Typography>
        </Grid>

         <Grid item xs={6} md={3} className={styles.person}>
          <img className={styles.headshot} src={"headshots/jack-virag.png"} alt="Jack Virag headshot" />
          <Typography variant="h4" className={styles.teammate}>
            Jack Virag
          </Typography>
          <Typography variant="body1" className={styles.role}>
            Marketing
          </Typography>
          <Typography variant="body1" className={styles.company}>
            Nutshell
          </Typography>
        </Grid>

         <Grid item xs={6} md={3} className={styles.person}>
          <img className={styles.headshot} src={"headshots/dylan-goings.png"} alt="Dylan Goings headshot" />
          <Typography variant="h4" className={styles.teammate}>
            Dylan Goings
          </Typography>
          <Typography variant="body1" className={styles.role}>
            App Development
          </Typography>
          <Typography variant="body1" className={styles.company}>
            Atomic Object
          </Typography>
          </Grid>

        <Grid item xs={6} md={3} className={styles.person}>
          <img className={styles.headshot} src={"headshots/hana-coon.png"} alt="Kristen Gray headshot" />
          <Typography variant="h4" className={styles.teammate}>
            Hana Coon
          </Typography>
          <Typography variant="body1" className={styles.role}>
            Design &
          </Typography>
          <Typography variant="body1" className={styles.role}>
            Web Development
          </Typography>
          <Typography variant="body1" className={styles.company}>
            Student
          </Typography>
        </Grid>

        </Grid>
        </div>

      
  )
}

function About() {
  return (
    <Wrapper>
      <AboutContent />
    </Wrapper>
  );
}

export default About;
