import { Navbar } from "./Navbar/navbar";
import Sidebar from "./AppLayout/sidebar/Sidebar";
import Header from "./Navbar/Header";

export default function Page() {
  return (
    <div className="h-screen flex flex-col">

      
      <Navbar />

      <div className="flex flex-1">

        
        <Sidebar />

        
        <div className="flex-1 bg-gray-100 p-6">

          <Header />

          
          

        </div>

      </div>
    </div>
  );
}
