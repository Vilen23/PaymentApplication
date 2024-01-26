import { useNavigate } from "react-router-dom";

export function Homenav() {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="bg-black h-[80px] w-screen flex ">
        <div className="flex items-center text-white justify-between w-screen">
          <p
            className="text-white font-extrabold text-[40px] ml-20 cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            Lpay
          </p>
          <p className="mr-20 font-sans text-lg">Made your life easy</p>
        </div>
      </nav>
    </div>
  );
}
