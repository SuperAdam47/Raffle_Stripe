import { Helmet } from 'react-helmet-async';

// import { AppView } from 'src/sections/overview/view';

import { LandingView } from 'src/sections/landing';

// ----------------------------------------------------------------------

export default function AppPage() {
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>

      <LandingView />
    </>
  );
}
