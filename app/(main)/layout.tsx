import React from 'react'
import Nav from './header';
type Props={
    children:React.ReactNode;
};
const MainLayout = ({
    children,
}:Props) => {
  return (
    <div>
        <Nav/>
      {children}
    </div>
  )
}

export default MainLayout
