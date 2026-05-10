import { Outlet } from 'react-router-dom';
export default function PortfolioLayout() {
  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <nav className="p-6 text-right">Menu</nav>
      <Outlet />
    </div>
  );
}