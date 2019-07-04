import React, { Component } from 'react'
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText
} from 'react-mdl'
class Projects extends Component {
  state = {
    activeTab: 0
  }

  changeCategories () {
    if (this.state.activeTab == 0) {
      return (
        <div>
          <Card shadow={5} style={{ minWidth: '440', margin: 'auto' }}>
            <CardTitle
              style={{
                color: 'black',
                height: '176px',
                background:
                  'url(https://marketing-prod.global.ssl.fastly.net/sites/default/files/inline-images/Code_Write_Brackets_Hand_Open.jpg) center/cover'
              }}
            >
              Angular Based Ebay Product Seacrh Application
            </CardTitle>

            <CardText>
              Ebay product search application created as a part of CSCI 571 Web
              tech course
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
          </Card>
        </div>
      )
    } else if (this.state.activeTab == 1) {
      return (
        <div>
          <h1>This is mobile</h1>
        </div>
      )
    } else if (this.state.activeTab == 2) {
      return (
        <div>
          <h1>This is ML</h1>
        </div>
      )
    } else if (this.state.activeTab == 3) {
      return (
        <div>
          <h1>This is Info</h1>
        </div>
      )
    }
  }

  render () {
    return (
      <div className='project-category-tabs'>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Web Development</Tab>
          <Tab>Mobile Development</Tab>
          <Tab>Machine Learning and NLP</Tab>
          <Tab>Information Retrieval</Tab>
        </Tabs>

        <section className='project-display-grid'>
          <Grid className='projects-display-grid'>
            <Cell col={12}>
              <div className='project-content'>{this.changeCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    )
  }
}

export default Projects
