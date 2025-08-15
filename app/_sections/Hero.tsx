import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <header className="relative min-h-screen flex items-center">
      {/* Subtle geometric background elements */}
      <div className="absolute top-20 right-10 w-24 h-24 border border-gray-200 opacity-30"></div>
      <div className="absolute bottom-32 right-20 w-1 h-16 bg-gray-900"></div>
      <div className="absolute top-1/2 left-0 w-px h-40 bg-gray-300"></div>

      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Content Section - Left Side */}
          <div className="space-y-12 lg:pt-12">
            {/* Greeting with Japanese-style layout */}
            <div className="space-y-6">
              <div className="flex items-center space-x-6">
                <div className="w-2 h-2 bg-black"></div>
                <div className="flex flex-col space-y-1">
                  <span className="text-sm uppercase tracking-[0.3em] text-gray-500 font-light">
                    Hello, I am
                  </span>
                  <span className="text-xs text-gray-400 font-light">
                    はじめまして
                  </span>
                </div>
                <div className="flex-1 h-px bg-gray-300"></div>
              </div>

              {/* Main Name - Large, minimal with Japanese */}
              <div className="relative">
                <h1 className="text-6xl lg:text-7xl font-extralight leading-none tracking-tight text-gray-900">
                  John Lester
                  <br />
                  <span className="relative">
                    Escarlan
                    <div className="absolute -bottom-2 left-0 w-20 h-px bg-gray-900"></div>
                  </span>
                </h1>
                {/* Japanese name */}
                <div className="mt-4 flex items-center space-x-4">
                  <div className="w-8 h-px bg-gray-400"></div>
                  <p className="text-lg text-gray-600 font-light">
                    ジョン・レスター・エスカーラン
                  </p>
                </div>
              </div>
            </div>

            {/* Role/Title with Japanese */}
            <div className="flex items-start space-x-8">
              <div className="w-px h-24 bg-gray-900 mt-1"></div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h2 className="text-lg font-light text-gray-700 tracking-wide">
                    Software Engineer
                  </h2>
                  <p className="text-sm text-gray-500 font-light">
                    ソフトウェアエンジニア
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm uppercase tracking-[0.2em] text-gray-500 font-light">
                    Computer Science Student
                  </p>
                  <p className="text-xs text-gray-400 font-light">
                    計算機科学学生
                  </p>
                </div>
              </div>
            </div>

            {/* Description with Japanese translation */}
            <div className="max-w-lg space-y-6">
              <div className="w-12 h-px bg-gray-400"></div>
              <div className="space-y-4">
                <p className="text-lg font-light leading-8 text-gray-700">
                  A software engineer with strong foundation in mathematics and
                  computer science, building web applications with focus on
                  clean, maintainable code.
                </p>
                <p className="text-sm font-light leading-7 text-gray-500 border-l-2 border-gray-200 pl-4">
                  数学とコンピュータサイエンスの強固な基盤を持つソフトウェアエンジニアとして、
                  清潔で保守可能なコードに焦点を当てたWebアプリケーションを構築しています。
                </p>
              </div>
            </div>

            {/* Contact/Action area with Japanese */}
            <div className="flex items-center space-x-8 pt-8">
              <button className="group relative border border-gray-300 px-8 py-3 hover:border-gray-900 transition-colors duration-300">
                <div className="space-y-1">
                  <span className="block text-sm uppercase tracking-[0.2em] font-light">
                    View Work
                  </span>
                  <span className="block text-xs text-gray-500 font-light">
                    作品を見る
                  </span>
                </div>
                <div className="absolute top-2 right-2 w-1 h-1 bg-gray-900 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>

              <div className="flex items-center space-x-4">
                <div className="w-8 h-px bg-gray-400"></div>
                <div className="space-y-1">
                  <span className="block text-xs uppercase tracking-[0.2em] text-gray-500 font-light">
                    Available for projects
                  </span>
                  <span className="block text-xs text-gray-400 font-light">
                    プロジェクト対応可能
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section - Right Side */}
          <div className="relative lg:pl-12">
            {/* Image container with Japanese-inspired framing */}
            <div className="relative">
              {/* Corner accent elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-l border-t border-gray-900"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r border-b border-gray-900"></div>

              {/* Main image */}
              <div className="relative overflow-hidden">
                <Image
                  src="/hero-image.jpg"
                  width={500}
                  height={600}
                  alt="John Lester Escarlan's Profile Picture"
                  className="w-full h-auto object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                  priority
                />

                {/* Overlay geometric element */}
                <div className="absolute top-8 right-8 w-16 h-16 border border-white/30"></div>
              </div>

              {/* Image caption with Japanese */}
              <div className="absolute -bottom-12 left-0 space-y-2">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-px bg-gray-400"></div>
                  <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-light">
                    Portfolio 2025
                  </span>
                </div>
                <div className="flex items-center space-x-4 ml-16">
                  <span className="text-xs text-gray-400 font-light">
                    ポートフォリオ 2025
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator with Japanese */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2">
        <div className="flex items-center space-x-3 mb-8">
          <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-light rotate-90 origin-center">
            Scroll
          </span>
          <span className="text-xs text-gray-400 font-light rotate-90 origin-center">
            スクロール
          </span>
        </div>
        <div className="w-px h-16 bg-gray-300"></div>
        <div className="w-1 h-1 bg-gray-900"></div>
      </div>
    </header>
  );
};

export default HeroSection;
