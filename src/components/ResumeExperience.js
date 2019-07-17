import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
class ResumeExperience extends Component {
  render () {
    return (
      <Grid>
        <Cell col={8}>
          <h4 style={{ marginTop: '0px' }}>{this.props.jobName}</h4>
          <p>{this.props.location}</p>
          <p><strong>{this.props.jobTitle}</strong></p>
          <p>
            -Developed the job search module for the India Clap Web Application
            which is an online learning and job search portal for Medium and
            small scale industrie
          </p>
          <p>
            -Used React.js and bootstrap to develop the frontend of the job
            search module
          </p>
          <p>
            -Incorporated the Google Jobs API to provide relevant results based
            on the search term and location of the user
          </p>
          <p>
            -Implemented a resilient API in Node.js to fetch results from the
            Google Jobs API and perform JSON response error handling.
          </p>
        </Cell>
        <Cell col={4}>
          <p>
            {this.props.startYear}-{this.props.endYear}
          </p>
        </Cell>

   
      </Grid>
    )
  }
}

export default ResumeExperience
