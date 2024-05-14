import { HiArrowRight } from "react-icons/hi2";
import { Link} from "react-router-dom";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        to="/work"
        className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group cursor-pointer"
      >
        <img
          src="/rounded-text.png"
          width={141}
          height={148}
          alt=""
          className="animate-spin-slow h-full max-w-[141px] max-h-[148px]"
        />
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
