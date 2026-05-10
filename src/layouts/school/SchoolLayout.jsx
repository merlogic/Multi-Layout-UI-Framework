import { Outlet } from 'react-router-dom';

export default function SchoolLayout() {
  return (
    <div>
      {/* Your Sidebar/Navbar here */}
      <Outlet /> {/* <--- THIS IS REQUIRED FOR NESTED ROUTES TO WORK */}
    </div>
  );
}