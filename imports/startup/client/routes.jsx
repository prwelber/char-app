import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { App } from '../../ui/layouts/app.jsx';
import { Index } from '../../ui/components/index.jsx';
// import { Welcome } from '../../ui/components/welcome.jsx'

import { Traits } from '../../ui/pages/traits.jsx'

import { One } from '../../ui/pages/one.jsx';
import { Two } from '../../ui/pages/two.jsx';
import qaContainer from '../../ui/pages/qa.jsx'

import { NotFound } from '../../ui/pages/not-found.jsx'

Meteor.startup( () => {
  render(
    <Router history={ browserHistory }>
      {/* <Route path="/welcome" component={ Welcome }/> */}
      <Route path="/" component={ App }>
        <IndexRoute component={ Index } />
        <Route path="/traits" component={ Traits }>
          <Route path="/one" component={ One } />
          <Route path="/two" component={ Two } />
        </Route>
        <Route path="/t/:name" component={ qaContainer } />
      </Route>
      <Route path="*" component={ NotFound } />
    </Router>,
    document.getElementById( 'render-target' )
  );
});
