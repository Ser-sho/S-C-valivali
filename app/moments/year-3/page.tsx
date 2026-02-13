import Image from "next/image";

export default function YearThree() {
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
          Year 3 ❤️
        </h1>

        {/* FIRST CENTER IMAGE */}
        <div className="flex flex-col items-center mb-16">
          <div className="bg-white rounded-xl shadow-md p-6 w-80 h-80 flex items-center justify-center">
            <Image
              src="/images/year3/photo1.jpeg"
              alt="Memory 1"
              width={260}
              height={260}
              className="object-contain"
            />
          </div>
          <p className="mt-6 text-black text-sm">
            I’ll never forget how worried we were trying to find someone with an iPhone to take our pictures 😂📸. What felt stressful then is now such a sweet memory, because it was us — figuring it out together. That day wasn’t just about the place, it was about our love and the beautiful moments we keep creating 💞✨
          </p>
        </div>

        {/* SECOND ROW */}
        <div className="flex justify-center gap-12 mb-16 flex-wrap">
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-xl shadow-md p-6 w-72 h-72 flex items-center justify-center">
              <Image
                src="/images/year3/photo2.jpeg"
                alt="Memory 2"
                width={240}
                height={240}
                className="object-contain"
              />
            </div>
            <p className="mt-5 text-black text-sm">
              Different look, same love, same smiles, same us 😍📸. I love how even in the simplest moments, we make memories that last forever. 💞
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-white rounded-xl shadow-md p-6 w-72 h-72 flex items-center justify-center">
              <Image
                src="/images/year3/photo3.jpeg"
                alt="Memory 3"
                width={240}
                height={240}
                className="object-contain"
              />
            </div>
            <p className="mt-5 text-black text-sm">
              I love this memory so much, because it wasn’t just about the food… it was about us, sitting together, laughing, talking, and enjoying every moment like it was our own little world. Dates like this remind me that no matter where we are, as long as I’m with you, it’s my favorite place to be 💞✨
            </p>
          </div>
        </div>

        {/* THIRD ROW */}
        <div className="flex justify-center gap-12 flex-wrap">
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-xl shadow-md p-6 w-72 h-72 flex items-center justify-center">
              <Image
                src="/images/year3/photo4.jpeg"
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
                src="/images/year3/photo5.jpeg"
                alt="Memory 5"
                width={240}
                height={240}
                className="object-contain"
              />
            </div>
            <p className="mt-5 text-black text-sm">
              Another beautiful moment from that special day — just us, our smiles, and the love we share. Being there with you made it perfect, because anywhere with you will always feel like my favorite place 💞✨
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}