import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
class ResumeEducation extends Component {
  render () {
    return (
      <Grid>
        <Cell col={8}>
          <h4 style={{ marginTop: '0px' }}>
            {this.props.universityName}
            <p>{this.props.degree}</p>
          </h4>

          <p>{this.props.location}</p>
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

export default ResumeEducation
