import { useNavigate } from "react-router-dom";

export function Homenav() {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="bg-black h-[80px] w-screen flex ">
        <div className="flex items-center text-white justify-between w-screen">
          <p
            className="text-white font-extrabold text-[40px] sm:ml-20 ml-4 cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            Lpay
          </p>
          <p className="sm:mr-20 mr-4 font-sans text-lg">Made your life easy</p>
        </div>
      </nav>
    </div>
  );
}
