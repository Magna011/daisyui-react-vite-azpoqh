import FinalQuis from "../../komponents/HomePage/FinalQuis";
import ProgressCardFinalQuis from "../../komponents/ProgressCard/ProgressCardFinalQuis";
import UlasanFinalQuis from "../../komponents/Ulasan/UlasanFinalQuis";

const HomePageFinalQuis = () => {
  return (
    <div>
      <FinalQuis/>
      <div className="hero min-h-screen bg-base-200 p-3 m-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <div>
              <ProgressCardFinalQuis />
              <UlasanFinalQuis/>
            </div>
            <div></div>
          </div>
          <div className="card flex justify-left items-left w-[400px] h-[700px] m-2 ">
            <div className="card-body">
              <div>
                {/* <Modul1 /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageFinalQuis;