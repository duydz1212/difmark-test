export default function AboutUS2() {
  return (
    <div className="h-[204px] flex items-center justify-center text-center bg-sky-500 z-50 relative w-full">
      <img
        className="h-full z-10 w-full absolute inset-0 object-cover"
        src="/about-us-2.webp"
        alt="About Us"
      />
      <div className="relative z-20 flex flex-col gap-y-5 text-[#f6f6f6] p-4">
        <h1 className="text-[32px] font-bold">
          Game Keys, Gift Cards &amp; Software — Best Prices on Difmark
        </h1>
        <span className=" text-[18px] text-[#D1D1D1]">
          Buy your favourite games for a low price.
          <br /> Discounts, Prices, Bonuses for Games
        </span>
      </div>
    </div>
  );
}
