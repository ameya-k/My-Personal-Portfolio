import React from 'react';
import Homepage from './Homepage'
import Contact from './Contact'
import Projects from './Projects'
import AboutMe from './AboutMe'
import Resume from './Resume'
import {Switch,Route} from 'react-router-dom';

const Routes= ()=>(
    <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/home" component={Homepage} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
        <Route path="/projects" component={Projects} />
        
    </Switch>
)

export default Routes;