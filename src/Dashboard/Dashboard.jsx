import React from 'react';
import ModulDashboard from '../komponents/Modul/ModulDashboard';
import ProgressCardDashboard from '../komponents/ProgressCard/ProgressCardDashboard';
import Ulasan from '../komponents/Ulasan/Ulasan';
import FinalQuis from '../komponents/HomePage/FinalQuis';
// import Pelatihan from '../komponents/HomePage/Pelatihan';

const Dashboard = () => {
  return (
    <div>
      <FinalQuis/>
      {/* <Pelatihan /> */}
      <div className="hero min-h-screen bg-base-200 p-3 m-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <div>
              <ProgressCardDashboard />
              <Ulasan />
            </div>
            <div></div>
          </div>
          <div className="card flex justify-left items-left w-[400px] h-[700px] m-2 ">
            <div className="card-body">
              <div>
                <ModulDashboard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
