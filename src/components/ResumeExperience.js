import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';
class ResumeExperience extends Component{
    render(){
        return(
            <Grid>
            <Cell col={4}>
            <p>{this.props.startYear}-{this.props.endYear}</p>
            </Cell>
            <Cell col={8}>
            <h4 style={{marginTop:'0px'}}>{this.props.jobName}
            <p>{this.props.jobTitle}</p>
            </h4>
            </Cell>
            </Grid>
        );
    }
}

export default ResumeExperience;