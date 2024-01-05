// import Swiper from "swiper";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const swiper = new Swiper(".swiper", {
//   direction: "vertical",
//   loop: true,
// });

import { register } from "swiper/element/bundle";
register();

import { Slider } from "./Slider";

export const Gallery = () => {
  return (
    <section className="galeri mt-10 mb-5">
      <Slider />
    </section>
  );
};
