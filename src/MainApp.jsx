import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import FallbackSpinner from './components/FallbackSpinner';
import NavBarWithRouter from './components/NavBar';
import Home from './components/Home';

const data = {
  sections: [
    {
      component: 'About',
      path: '/portfolio.github.io/about',
      headerTitle: 'About',
    },
    {
      component: 'Skills',
      path: '/portfolio.github.io/skills',
      headerTitle: 'Skills',
    },
    {
      component: 'Education',
      path: '/portfolio.github.io/education',
      headerTitle: 'Education',
    },
    {
      component: 'Experience',
      path: '/portfolio.github.io/experience',
      headerTitle: 'Experience',
    },
    {
      component: 'Projects',
      path: '/portfolio.github.io/projects',
      headerTitle: 'Projects',
    },
  ],
};

function MainApp() {
  return (
    <div className="MainApp">
      <NavBarWithRouter />
      <main className="main">
        <Switch>
          <Suspense fallback={<FallbackSpinner />}>
            <Route exact path="/portfolio.github.io" component={Home} />
            {data.sections.map((route) => {
              const SectionComponent = React.lazy(() => import('./components/' + route.component));
              return (
                <Route
                  key={route.headerTitle}
                  path={route.path}
                  component={() => (
                    <SectionComponent header={route.headerTitle} />
                  )}
                />
              );
            })}
          </Suspense>
        </Switch>
      </main>
    </div>
  );
}

export default MainApp;
