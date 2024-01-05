import foto from "../img/mainImg.jpg";
import { Instagram } from "./Instagram";
import { Message} from "./Message";
import { Tiktok } from "./Tiktok";

const Header = () => {
  return (
    <header className="image-box font-mono">
      <div className="z-50 absolute left-0 right-0 m-auto">
        {/* Welcome */}
        <h1 className=" text-sm pt-5 font-medium">Hi, Visitor!</h1>
        <h1 className="font-extrabold mb-10 text-lg">Welcome!</h1>
        <h1 className="text-4xl judul mb-14">XI AK 1</h1>

        {/* Jumlah Siswa */}
        <div className="border border-black min-[500px]:w-[350px] min-[350px]:w-[80vw] m-auto text-5xl py-2 rounded-full flex justify-evenly font-semibold siswa">
          <span className="text-blue-700 jumlahSiswaB">06</span>
          <span>
            <span className="text-blue-700 jumlahSiswaB">3</span>
            <span className="text-red-600 jumlahSiswaM">7</span>
          </span>
          <span className="text-red-600 jumlahSiswaM">31</span>
        </div>

        {/* Other */}
        <aside className="flex justify-evenly m-auto min-[500px]:w-[500px]">
          <Instagram />
          <div className="flex flex-col">
          <Tiktok />
          <Message />
          </div>
        </aside>
      </div>
      <img src={foto} alt="" className="image" />
    </header>
  );
};

export default Header;
