import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store';
import { Provider } from 'react-redux';
import App from './App.js';
import Homescreen from './screens/Homescreen.js';
 import LoginScreen from './screens/LoginScreen.js';
import RegisterScreen from './screens/RegisterScreen.js';
import ProfileScreen from './screens/ProfileScreen.js';
import PrivateRoute from './components/PrivateRoute.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
       <Route index={true} path='/' element={<Homescreen />} />
       <Route path='/login' element={<LoginScreen />} />
       <Route path='/register' element={<RegisterScreen />} />
       <Route path='' element={<PrivateRoute />}>
         <Route path='/profile' element={<ProfileScreen />} />
      </Route> 
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);