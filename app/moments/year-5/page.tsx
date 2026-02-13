import Image from "next/image";

export default function YearFive() {
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
          Year 5 ❤️
        </h1>

        {/* FIRST CENTER IMAGE */}
        <div className="flex flex-col items-center mb-16">
          <div className="bg-white rounded-xl shadow-md p-6 w-80 h-80 flex items-center justify-center">
            <Image
              src="/images/year5/photo1.jpeg"
              alt="Memory 1"
              width={260}
              height={260}
              className="object-contain"
            />
          </div>
          <p className="mt-6 text-black text-sm">
            I’ll never forget this date in Bloemfontein, Free State 🌸 — our 4‑year anniversary. Every second was joy, every moment a celebration of the love we’ve built ❤️
          </p>
        </div>

        {/* SECOND ROW */}
        <div className="flex justify-center gap-12 mb-16 flex-wrap">
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-xl shadow-md p-6 w-72 h-72 flex items-center justify-center">
              <Image
                src="/images/year5/photo2.jpeg"
                alt="Memory 2"
                width={240}
                height={240}
                className="object-contain"
              />
            </div>
            <p className="mt-5 text-black text-sm">
              This day in Gauteng, Rosebank 🌆 — part of our December trip — was truly something else. At first I was hesitant 🤔, but the moment I saw what you had planned, excitement filled me 💫. I enjoyed it beyond words, a memory forever tied to our love ❤️
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-white rounded-xl shadow-md p-6 w-72 h-72 flex items-center justify-center">
              <Image
                src="/images/year5/photo3.jpeg"
                alt="Memory 3"
                width={240}
                height={240}
                className="object-contain"
              />
            </div>
            <p className="mt-5 text-black text-sm">
              Gold Reef City 🎢✨ — just wow. This day was something else, filled with laughter, thrills, and pure joy. Truly one of the best days ever ❤️
            </p>
          </div>
        </div>

        {/* THIRD ROW */}
        <div className="flex justify-center gap-12 flex-wrap">
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-xl shadow-md p-6 w-72 h-72 flex items-center justify-center">
              <Image
                src="/images/year5/photo4.jpeg"
                alt="Memory 4"
                width={240}
                height={240}
                className="object-contain"
              />
            </div>
            <p className="mt-5 text-black text-sm">
              Rosebank, Gauteng 🌆 — this day felt unreal. Exploring the scene, soaking in the energy, and sharing a moment that turned into pure excitement and love ❤️
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-white rounded-xl shadow-md p-6 w-72 h-72 flex items-center justify-center">
              <Image
                src="/images/year5/photo5.jpeg"
                alt="Memory 5"
                width={240}
                height={240}
                className="object-contain"
              />
            </div>
            <p className="mt-5 text-black text-sm">
              Rosebank 🌧️ — just as we were about to leave, the rain poured down. Instead of rushing, we chose adventure: a taxi ride to downtown 🚕. That moment turned into one of those unforgettable memories of us, choosing joy together
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}