import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { App } from '../../ui/layouts/app.jsx';
import { Index } from '../../ui/components/index.jsx';

import { Traits } from '../../ui/pages/traits.jsx'

import learningContainer from '../../ui/pages/learning.jsx'
import humilityContainer from '../../ui/pages/humility.jsx'
import opennessContainer from '../../ui/pages/openness.jsx'
import toleranceContainer from '../../ui/pages/tolerance.jsx'
import Answers from '../../ui/pages/answers.jsx'

import { NotFound } from '../../ui/pages/not-found.jsx'

function requireAuth(nextState, replace) {
  if (!Meteor.user()) {
    replace({
      pathname: '/'
    })
  }
}

Meteor.startup( () => {
  render(
    <Router history={ browserHistory }>
      {/* <Route path="/welcome" component={ Welcome }/> */}
      <Route path="/" component={ App }>
        <IndexRoute component={ Index } />
        <Route path="/traits" component={ Traits }></Route>
        <Route path="/answers" component={ answersContainer } />
        <Route path="/t/learning" component={ learningContainer } onEnter={requireAuth} />
        <Route path="/t/humility" component={ humilityContainer } onEnter={requireAuth} />
        <Route path="/t/openness" component={ opennessContainer } onEnter={requireAuth} />
        <Route path="/t/tolerance" component={ toleranceContainer } onEnter={requireAuth} />
      </Route>
      <Route path="*" component={ NotFound } />
    </Router>,
    document.getElementById( 'render-target' )
  );
});
