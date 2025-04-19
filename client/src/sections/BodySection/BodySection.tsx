import { LuBookOpen } from "react-icons/lu";
import { LuTarget } from "react-icons/lu";
import { LuChartBarDecreasing } from "react-icons/lu";

const BodySection = () => {
  return (
    <section className="md:mt-50 py-15 px-10 flex flex-col text-center">
      <p className="text-4xl font-bold tracking-tighter">
        Everything you need to succeed
      </p>

      <p className="mt-6 text-xl tracking-wide">
        Built with features that founders actually need. No fluff, just pure
        productivity.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center mt-10 space-x-5 space-y-4 md:space-y-0 px-8">
        <div className="card">
          <div className="card-icon-box">
            <LuBookOpen className="card-icon" />
          </div>
          <p className="card-title">Structured Note-Taking</p>
          <p className="card-body">
            Organize your thoughts with <br /> our founder-focused templates{" "}
            <br /> and structure.
          </p>
        </div>

        <div className="card">
          <div className="card-icon-box">
            <LuTarget className="card-icon" />
          </div>
          <p className="card-title">Goal Tracking</p>
          <p className="card-body">
            Set, track and achieve your <br /> startup goals with our <br />
            integrated tracking system.
          </p>
        </div>

        <div className="card">
          <div className="card-icon-box">
            <LuChartBarDecreasing className="card-icon" />
          </div>
          <p className="card-title">Progress Analytics</p>
          <p className="card-body">
            Visualize your journey with <br /> detailed analytics and <br />{" "}
            progress tracking.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BodySection;
