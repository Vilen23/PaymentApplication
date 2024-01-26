import { useNavigate } from "react-router-dom"

export function Hero(){
    const navigate = useNavigate()
    return <div className=" w-screen flex justify-center items-center mt-20">
        <div>
            <div className="flex flex-col items-end justify-center">
                <p className="font-bold text-[200px]">Lpay</p>
                <p className="text-[20px] pr10">Your Life Made Easy</p>
            </div>
            <div className="flex justify-center items-center mt-10">
                <button className=" bg-black w-[100px] rounded-full h-[50px] font-bold text-[20px] text-white text-center hover:shadow-xl "
                onClick={()=>{
                    navigate("/signup")
                }}>Sign Up</button>
                <button className="ml-20 bg-black w-[100px] rounded-full h-[50px] font-bold text-[20px] text-white text-center hover:shadow-xl "
                onClick={()=>{
                    navigate("/signin")
                }}>Sign In</button>
            </div>
        </div>
    </div>
}