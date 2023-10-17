import React from 'react';
import Loading from '../../Components/loading';
import Error from '../../Components/error';

interface LayoutProps {
  loading: Boolean;
  error: string | null;
  children: React.ReactNode;
}

function Layout({ loading, error, children }: LayoutProps) {
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return <div>{children}</div>;
}

export default Layout;