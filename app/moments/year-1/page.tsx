import Image from "next/image";

export default function YearOne() {
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
          Year 1 ❤️
        </h1>

        {/* FIRST CENTER IMAGE */}
        <div className="flex flex-col items-center mb-16">
          <div className="bg-white rounded-xl shadow-md p-6 w-80 h-80 flex items-center justify-center">
            <Image
              src="/images/year1/photo1.jpeg"
              alt="Memory 1"
              width={260}
              height={260}
              className="object-contain"
            />
          </div>
          <p className="mt-6 text-black text-sm">
           One year down, forever to go. That milestone showed me that love isn’t just about time—it’s about depth, laughter, and the way you make my soul feel at home. You are my greatest gift, and every anniversary is a reminder that we are unstoppable together. ❤️
          </p>
        </div>

        {/* SECOND ROW */}
        <div className="flex justify-center gap-12 mb-16 flex-wrap">
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-xl shadow-md p-6 w-72 h-72 flex items-center justify-center">
              <Image
                src="/images/year1/photo2.jpeg"
                alt="Memory 2"
                width={240}
                height={240}
                className="object-contain"
              />
            </div>
            <p className="mt-5 text-black text-sm">
             🌳 One of our many beautiful dates at Jack Botes Park…
              a place that always felt like peace and joy because I was with you.
               Every walk, every laugh,
                every quiet moment there reminded me how much I love being by your side.
                 💕 That memory will forever be one of my favorites,
                  because it wasn’t just a date it was us,
                   living our love in the simplest and most perfect way. ❤️✨
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-white rounded-xl shadow-md p-6 w-72 h-72 flex items-center justify-center">
              <Image
                src="/images/year1/photo3.jpeg"
                alt="Memory 3"
                width={240}
                height={240}
                className="object-contain"
              />
            </div>
            <p className="mt-5 text-black text-sm">
              This was one of those sacrifices—the long rides and risks you took just to come and see me.
               I will never forget the effort,
                the love, and the dedication behind every journey you made.
                 💕 It showed me how much I truly mean to you, and it’s a memory
                  I’ll always cherish because it proves that our love is worth every mile,
                   every moment, every risk. ❤️✨
            </p>
          </div>
        </div>

        {/* THIRD ROW */}
        <div className="flex justify-center gap-12 flex-wrap">
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-xl shadow-md p-6 w-72 h-72 flex items-center justify-center">
              <Image
                src="/images/year1/photo4.jpeg"
                alt="Memory 4"
                width={240}
                height={240}
                className="object-contain"
              />
            </div>
            <p className="mt-5 text-black text-sm">
              🌆 I’ll never forget this moment—just the day before we had a misunderstanding,
               yet the very next day you invited me to town. 💕 
               That gesture showed me how strong our love is,
                how we always find our way back to each other. 
                It reminded me that no matter what, we choose us, again and again. ❤️✨
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-white rounded-xl shadow-md p-6 w-72 h-72 flex items-center justify-center">
              <Image
                src="/images/year1/photo5.jpeg"
                alt="Memory 5"
                width={240}
                height={240}
                className="object-contain"
              />
            </div>
            <p className="mt-5 text-black text-sm">
             🚶‍♂️ This picture is a symbol of one of the many walks we used to take—me walking you home. 💕 Not gonna lie, those moments were just as special as any big memory, because they were simple, real, and full of love. Every step reminded me how lucky I am to have you by my side, and how even the smallest things with you mean the world to me. ❤️
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}