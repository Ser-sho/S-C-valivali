import Image from "next/image";

export default function YearFour() {
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
          Year 4 ❤️
        </h1>

        {/* FIRST CENTER IMAGE */}
        <div className="flex flex-col items-center mb-16">
          <div className="bg-white rounded-xl shadow-md p-6 w-80 h-80 flex items-center justify-center">
            <Image
              src="/images/year4/photo1.jpeg"
              alt="Memory 1"
              width={260}
              height={260}
              className="object-contain"
            />
          </div>
          <p className="mt-6 text-black text-sm">
            That day will forever live in my heart 🎓❤️
            My graduation was special on its own, but your presence made it unforgettable. The fact that you put everything aside just to be there for me did something to my heart that I can’t even fully explain. Even now, I get emotional thinking about it. It wouldn’t have been the same without you — your support, your love, your pride in me. Having you there meant more than the achievement itself 💞✨
          </p>
        </div>

        {/* SECOND ROW */}
        <div className="flex justify-center gap-12 mb-16 flex-wrap">
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-xl shadow-md p-6 w-72 h-72 flex items-center justify-center">
              <Image
                src="/images/year4/photo2.jpeg"
                alt="Memory 2"
                width={240}
                height={240}
                className="object-contain"
              />
            </div>
            <p className="mt-5 text-black text-sm">
              Our first time at RocoMamas 🍔❤️
             I’ll never forget that day — my birthday, our first time there, and how special you made it feel. It wasn’t just about the food, it was about the love, the laughter, and the way you turned that moment into a memory I’ll always treasure. That day will always have a special place in my heart because I got to celebrate it with you 💞🎉
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-white rounded-xl shadow-md p-6 w-72 h-72 flex items-center justify-center">
              <Image
                src="/images/year4/photo3.jpeg"
                alt="Memory 3"
                width={240}
                height={240}
                className="object-contain"
              />
            </div>
            <p className="mt-5 text-black text-sm">
             This picture reminds me how, after Jack Botes Park, Mall of the North became our next little spot 🤍✨

That’s where we found more quality time, more bonding, more laughter — just us growing closer in the simplest moments. It wasn’t about the place, it was about the connection we kept building every time we were together 💞
            </p>
          </div>
        </div>

        {/* THIRD ROW */}
        <div className="flex justify-center gap-12 flex-wrap">
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-xl shadow-md p-6 w-72 h-72 flex items-center justify-center">
              <Image
                src="/images/year4/photo4.jpeg"
                alt="Memory 4"
                width={240}
                height={240}
                className="object-contain"
              />
            </div>
            <p className="mt-5 text-black text-sm">
              Every moment felt magical 💫
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-white rounded-xl shadow-md p-6 w-72 h-72 flex items-center justify-center">
              <Image
                src="/images/year4/photo5.jpeg"
                alt="Memory 5"
                width={240}
                height={240}
                className="object-contain"
              />
            </div>
            <p className="mt-5 text-black text-sm">
              Movie night at Mall of the North 🎬🍿❤️

I had so much fun that day — laughing, enjoying the moment, and just being there with you. It wasn’t just a movie night, it was another beautiful memory of us, filled with joy and love. Days like that mean everything to me 💞✨
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}