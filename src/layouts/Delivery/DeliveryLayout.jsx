import { Outlet } from 'react-router-dom';
export default function DeliveryLayout() {
  return (
    <div className="min-h-screen bg-emerald-900 text-white">
      <div className="max-w-md mx-auto min-h-screen bg-slate-900"><Outlet /></div>
    </div>
  );
}