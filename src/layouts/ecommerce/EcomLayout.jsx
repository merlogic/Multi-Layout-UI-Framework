import { Outlet } from 'react-router-dom';
export default function EcomLayout() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="p-4 border-b border-slate-200">E-Com Store Header</header>
      <main><Outlet /></main>
    </div>
  );
}