import React from 'react'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import './App.css'
import Routes from './components/routes'
import { Link } from 'react-router-dom'
function App () {
  return (
    <div className='demo-big-content'>
      <Layout>
        <Header
          className='navbar-style'
          title={
            <Link style={{ textDecoration: 'none', color: 'white' }} to='/'>
              Ameya Kulkarni
            </Link>
          }
          scroll
        >
          <Navigation>
            <Link to='/home'>Home</Link>
            <Link to='/resume'>Resume</Link>

            <Link to='/projects'>Projects</Link>
            <Link to='/contact'>Contact</Link>
          </Navigation>
        </Header>
        <Drawer
          title={
            <Link style={{ textDecoration: 'none', color: 'black' }} to='/'>
              Ameya Kulkarni
            </Link>
          }
        >
          <Navigation>
            <Link to='/home'>Home</Link>
            <Link to='/resume'>Resume</Link>

            <Link to='/projects'>Projects</Link>
            <Link to='/contact'>Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className='page-content' />
          <Routes />
        </Content>
      </Layout>
    </div>
  )
}

export default App
