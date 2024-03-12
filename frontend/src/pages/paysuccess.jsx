import { Helmet } from 'react-helmet-async';

import { PaysuccessView } from 'src/sections/paysuccess';

// ----------------------------------------------------------------------

export default function PaySuccessPage() {
  return (
    <>
      <Helmet>
        <title> Successfully Paid! </title>
      </Helmet>

      <PaysuccessView />
    </>
  );
}
