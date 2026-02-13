import Image from "next/image";

export default function YearTwo() {
  return (
    <main
      className="min-h-screen py-16 px-6 text-center relative bg-cover bg-center"
      style={{ backgroundImage: "url('/images/heart-wallpaper.jpg')" }}
    >

      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content Wrapper */}
      <div className="relative z-10">

        {/* HEADING */}
        <h1 className="text-3xl font-bold text-black mb-16">
          Year 2 ❤️
        </h1>

        {/* FIRST CENTER IMAGE */}
        <div className="flex flex-col items-center mb-16">
          <div className="bg-white rounded-xl shadow-md p-6 w-80 h-80 flex items-center justify-center">
            <Image
              src="/images/year2/photo1.jpeg"
              alt="Memory 1"
              width={260}
              height={260}
              className="object-contain"
            />
          </div>
          <p className="mt-6 text-black text-sm">
          Our first of many pictures — we sat down, coordinated our outfits, and marched together in perfect colors.
          </p>
        </div>

        {/* SECOND ROW */}
        <div className="flex justify-center gap-12 mb-16 flex-wrap">
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-xl shadow-md p-6 w-72 h-72 flex items-center justify-center">
              <Image
                src="/images/year2/photo2.jpeg"
                alt="Memory 2"
                width={240}
                height={240}
                className="object-contain"
              />
            </div>
            <p className="mt-5 text-black text-sm">
             The spark of our journey ❤️ the first of many moments, marked by the matching shirts you chose, and the beginning of us stepping out side by side❤️.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-white rounded-xl shadow-md p-6 w-72 h-72 flex items-center justify-center">
              <Image
                src="/images/year2/photo3.jpeg"
                alt="Memory 3"
                width={240}
                height={240}
                className="object-contain"
              />
            </div>
            <p className="mt-5 text-black text-sm">
              Laughing and smiling together 😊
            </p>
          </div>
        </div>

        {/* THIRD ROW */}
        <div className="flex justify-center gap-12 flex-wrap">
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-xl shadow-md p-6 w-72 h-72 flex items-center justify-center">
              <Image
                src="/images/year2/photo4.jpeg"
                alt="Memory 4"
                width={240}
                height={240}
                className="object-contain"
              />
            </div>
            <p className="mt-5 text-black text-sm">
                Jack Botes Park — the place where our story found its rhythm. Every picture here became more than a memory; it was how we bonded, how we grew, and how it all began. 🌳📸❤️
            
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-white rounded-xl shadow-md p-6 w-72 h-72 flex items-center justify-center">
              <Image
                src="/images/year2/photo5.jpeg"
                alt="Memory 5"
                width={240}
                height={240}
                className="object-contain"
              />
            </div>
            <p className="mt-5 text-black text-sm">
              One of our fun moments at Mall of the North 🎮 — just playing games, laughing, and building a connection that grew into something greater: our love ❤️
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}