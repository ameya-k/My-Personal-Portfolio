import React,{Component} from 'react';
import {Tabs,Tab} from 'react-mdl';
class Projects extends Component{

    state={
        activeTab:0
    }

    render(){
        return(
            <div className="project-category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({activeTab:tabId})} ripple>
                    <Tab>Web Development</Tab>
                    <Tab>Mobile Development</Tab>
                    <Tab>Machine Learning and NLP</Tab>
                    <Tab>Information Retrieval</Tab>
                </Tabs>

                <section className="project-display-grid">
                    {this.changeCategories}
                </section>
            </div>
        );
    }
}

export default Projects;