// React 
import React, {useEffect} from 'react';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';

// Layouts
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';

// Others
import AOS from 'aos';

// Components
import About from './pages/About';
import Home from './pages/Home';
import PageNotFound from './pages/404';

// Action
import { getUserProfile } from '../actions/auth/authAction';


function App() {

  // Get currentUser from redux
  // const { currentUser } = useSelector(state => state.authenticationState)
  const getCurrentUser = localStorage.token.id;

  console.log(getCurrentUser)

  useEffect(() => {

    // Initialize AOS animation
    AOS.init({
      duration : 2000
    });
console.log('HOME');
    // If there's a user in redux
    // if(currentUser){
      // Revoke function to get the user profile
      // getUserProfile(staffID)
    // }
  }, []);



  return (
    <>
      <main className="container">
        <Navbar />
          <Switch>
            <Route exact path="/about" component = {About} />
            <Route exact path="/" component = {Home} />
            <Route component = {PageNotFound} />
          </Switch>
      </main>
        <Footer />
    </>
  )
}


export default App;