import Image from "next/image";

export default function ComingSoon() {
  return (
    <section className="bg-[#D9D9D9] text-[#414141] h-screen flex items-center justify-center">
      <div className="relative w-1/2 h-1/2 flex items-center justify-center group">
        <div className="absolute flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0 group-hover:pointer-events-none">
          <Image
            width={300}
            height={300}
            src="/images/GoKas Logo.png"
            alt="GoKas Logo"
          />
          <div className="text-center mt-4">
            <h1 className="font-bold text-6xl">GoKas</h1>
            <h1 className="text-4xl">Your treasury bestie</h1>
          </div>
        </div>
        <div className="absolute flex items-center justify-center transition-opacity duration-500 opacity-0 group-hover:opacity-100">
          <h1 className="font-bold text-[100px] text-center leading-[100px]">
            COMING SOON
          </h1>
        </div>
      </div>
    </section>
  );
}
