import Link from "next/link";

export default function Choices() {
  return (
    <main 
      className="h-screen flex flex-col bg-pink-50 relative bg-cover bg-center"
      style={{backgroundImage: "url('/images/heart-wallpaper.jpg')" }} // heart wallpaper
    >

      {/* OVERLAY FOR SOFTNESS */}
      <div className="absolute inset-0 bg-pink-50/30"></div>

      {/* HEADING */}
      <div className="pt-10 text-center z-10 relative">
        <h1 className="text-3xl md:text-4xl font-bold text-rose-600">
          A Special Surprise For You ❤️
        </h1>
      </div>

      {/* CENTER HEART BUTTON */}
      <div className="flex-1 flex items-center justify-center z-10 relative">
        <Link href="/valentine">
          <button className="relative w-52 h-52 flex items-center justify-center">

            {/* Heart shape */}
            <div className="absolute w-32 h-32 bg-red-500 rotate-45 rounded-lg"></div>
            <div className="absolute w-32 h-32 bg-red-500 rounded-full -top-8"></div>
            <div className="absolute w-32 h-32 bg-red-500 rounded-full -left-8"></div>

            {/* Text */}
            <span className="relative text-white font-bold text-lg text-center px-6">
              Happy Valentines Mama ❤️
            </span>

          </button>
        </Link>
      </div>

    </main>
  );
}