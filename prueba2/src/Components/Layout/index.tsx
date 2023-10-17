import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <div className='flex flex-col items-center mt-20'>
      {children}
    </div>
  );
};

export default Layout;
