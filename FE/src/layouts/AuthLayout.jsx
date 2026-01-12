import SideBar from '../components/Layout/SideBar';
import { Outlet } from 'react-router';
import HeaderWapper from '../components/Layout/HeaderWapper';
export default function AuthLayout() {
  const login = true;
  return (
    <>
      <div className="h-screen w-screen bg-blue-100 flex flex-col">
        {/* Global Header */}
        <HeaderWapper />
        {/* Main Area */}
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <aside className="w-64 overflow-y-auto">
            {login && (
              <ul className="p-4 space-y-4 ">
                <SideBar />
              </ul>
            )}
          </aside>
          {/* Right Content Area */}
          <main className="flex-1 bg-white rounded-2xl m-1 p-4 overflow-y-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
