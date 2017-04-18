import React from 'react';
import { Navigation } from '../components/navigation.jsx';



export const App = ( { children } ) => (
  <div>
    <Navigation />
    <div className='main-background'>
      { children }
    </div>
  </div>
)
