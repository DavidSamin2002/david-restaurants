import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from '../commponens/home';
import Page404 from '../commponens/Page404';

const AppRoutes = () => {
  return (
    <Router>
        <Routes>

            <Route path='/' element={<Home/>}>


                <Route/>
                <Route path='*' element={<Page404/>}/>
            </Route>




        </Routes>


    </Router>
  )
}

export default AppRoutes