import Sidebar from './components/Sidebar';
import MobileNav from './components/MobileNav';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-72 md:ml-72">
        <MobileNav />
        {/* Your other components here */}
      </div>
    </div>
  );
}
