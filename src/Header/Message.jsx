export const Message = () => {
  return (
    <section className="z-50 flex max-w-full">
      <a href="">
      <div className="[background-color:rgba(0,0,0,0.3)] rounded-3xl border border-black font-semibold h-[145px] w-[160px]">
        <svg
          fill="#ffffff"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#ffffff"
          className="w-10 h-10 translate-x-3 translate-y-4"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <title>alt-paper-plane</title>{" "}
            <path d="M0 14.016l4.768 3.584 21.248-11.584-16 16v9.984l5.984-5.984 8 5.984 8-32z"></path>{" "}
          </g>
        </svg>
        <p className="text-white text-5xl translate-x-28 translate-y-[-35px] w-10">
          &gt;
        </p>
        <div className="text-left ml-2">
          <h1 className="text-white text-sm">Message Our Class!</h1>
          <p className="text-gray-600">View more</p>
        </div>
      </div>
      </a>
    </section>
  );
};
