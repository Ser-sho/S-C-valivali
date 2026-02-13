"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Valentine() {
  const [showGift, setShowGift] = useState(false);

  return (
    <main
      className="h-screen flex flex-col px-6 relative bg-cover bg-center"
      style={{ backgroundImage: "url('/images/heart-wallpaper.jpg')" }}
    >

      {/* SOFT OVERLAY */}
      <div className="absolute inset-0 bg-pink-100/40 backdrop-blur-sm"></div>

      {/* HEADING TOP */}
      <div className="pt-10 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-red-600 drop-shadow-lg">
          My Beautiful Love ❤️
        </h1>
      </div>

      {/* CENTER PARAGRAPH SQUARE */}
      <div className="flex-1 flex items-center justify-center relative z-20">
  <div className="w-80 h-80 md:w-96 md:h-96 
    bg-white 
    rounded-3xl 
    shadow-2xl 
    border-2 border-pink-300
    p-8 
    flex items-center justify-center 
    text-center">

    <p className="text-blue leading-relaxed">
      Mama ❤️

It has been a journey four years going on five,
 and honestly, that still feels crazy to say. 
 I never imagined I could share something this deep, 
 this real, and this beautiful with someone, 
 but I was definitely wrong… because then there was you.
  You are the most incredible woman I have ever known,
   and loving you has been the greatest blessing of my life. 
   Thank you for your patience, your strength, your softness, 
   and the way you love me so purely. 
   I don’t want to ruin the moment with too many words,
    I just want to say Happy Valentine’s Day, 
    my love 💌🌹 Even though we’ve never really celebrated it before,
     today feels special because it gives us a reason to pause and truly cherish what we have 
      something so rare, so unique, and so amazing. From the very first day we met, 
      you brought light into my life ✨ Every smile, every laugh,
       every memory we’ve created means more to me than I could ever explain.
        You are my peace, my happiness, my safe place, and my forever.
         I love you more than yesterday and less than tomorrow ❤️ S&C always and forever ♾️💞

    </p>

  </div>
</div>
      

      {/* BUTTONS BOTTOM */}
      <div className="pb-10 flex flex-col items-center gap-4 relative z-10">

        <button
          onClick={() => setShowGift(true)}
          className="bg-red-500 text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-red-600 transition"
        >
          Your Gift 🎁
        </button>

        <Link href="/moments">
          <button className="bg-pink-500 text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-pink-600 transition">
            Take the time to explore our journey 💕
          </button>
        </Link>

      </div>

      {/* GIFT POPUP CENTERED */}
      {showGift && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-3xl shadow-2xl">
            <Image
              src="/images/gift.jpeg"
              alt="Gift"
              width={350}
              height={350}
              className="rounded-2xl object-cover"
            />
            <div className="text-center mt-4">
              <button
                onClick={() => setShowGift(false)}
                className="text-red-500 font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}