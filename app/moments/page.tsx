import Link from "next/link";
import Image from "next/image";

const years = [1, 2, 3, 4, 5];

export default function Moments() {
  return (
    <main
      className="min-h-screen py-12 px-6 text-center relative bg-cover bg-center"
      style={{ backgroundImage: "url('/images/heart-wallpaper.jpg')" }}
    >

      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative z-10">

        <h1 className="text-3xl font-bold text-black mb-10">
          Our Journey Together ❤️
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {years.map((year) => (
            <Link key={year} href={`/moments/year-${year}`}>
              <div className="bg-white rounded-2xl shadow-lg p-6 w-64 cursor-pointer hover:scale-105 transition">

                {/* Image */}
                <div className="flex items-center justify-center bg-white rounded-xl h-56 w-56 mx-auto">
                  <Image
                    src={`/images/year${year}/photo1.jpeg`}
                    alt={`Year ${year}`}
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>

                {/* YEAR TEXT NOW BLACK */}
                <h2 className="mt-4 text-lg font-semibold text-black">
                  Year {year} ❤️
                </h2>

              </div>
            </Link>
          ))}
        </div>

      </div>

    </main>
  );
}