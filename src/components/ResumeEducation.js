import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';
class ResumeEducation extends Component{
    render(){
        return(
            <Grid>
            <Cell col={4}>
            <p>{this.props.startYear}-{this.props.endYear}</p>
            </Cell>
            <Cell col={6}>
            <h4 style={{marginTop:'0px'}}>{this.props.universityName}
            <p>{this.props.degree}</p>
            </h4>
            </Cell>
            <Cell col={2}>
            <p>{this.props.location}</p>
            </Cell>
            </Grid>
        );
    }
}

export default ResumeEducation;