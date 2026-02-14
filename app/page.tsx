import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen flex flex-col bg-rose-50">

      {/* SMALL HEADING */}
      <div className="pt-4 text-center">
        <h1 className="text-lg md:text-xl font-semibold text-rose-600">
          Happy  Day COLLINE ❤️
        </h1>
      </div>

      {/* IMAGE FIT FULLY */}
      <div className="flex-1 relative w-full">
        <Image
          src="/images/us-cartoon2.png"
          alt="Us"
          fill
          priority
          className="object-contain"
        />
      </div>

      {/* BUTTON */}
      <div className="pb-6 flex justify-center">
        <Link href="/choices">
          <button className="px-14 py-4 text-xl font-bold text-white rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 shadow-lg hover:scale-105 transition">
            Vali Vali 💕
          </button>
        </Link>
      </div>

    </main>
  );
}

