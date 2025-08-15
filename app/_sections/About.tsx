import React from "react";

const AboutSection = () => {
  return (
    <section className="py-32">
      {/* Header with Japanese-inspired layout */}
      <div className="mb-16">
        <div className="flex items-center space-x-6">
          <div>
            <div className="text-xs lg:text-sm uppercase tracking-[0.3em] text-foreground/80 font-light">
              About Me
            </div>
            <div className="text-xs text-foreground/40 font-light">
              私について
            </div>
          </div>
          <div className="flex-1 h-px bg-foreground/20" />
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Column - Introduction */}
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl lg:text-5xl font-extralight leading-tight tracking-tight mb-4">
              Crafting Digital Experiences
            </h2>
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-8 h-px bg-foreground/40" />
              <p className="text-sm lg:text-lg text-foreground/40 font-light">
                デジタル体験の創造
              </p>
            </div>
          </div>

          <div className="max-w-lg border-l-2 border-foreground/20 pl-4 space-y-6">
            <div className="space-y-3">
              <p className="text-sm lg:text-lg font-light leading-8 text-foreground/80">
                I am{" "}
                <span className="font-medium text-foreground">
                  John Lester Escarlan
                </span>
                , a Computer Science student at University of the Philippines
                Cebu. I build web applications with focus on clean, maintainable
                code.
              </p>
              <p className="text-sm lg:text-base font-light leading-7 text-foreground/40">
                私は
                <span className="font-medium">
                  ジョン・レスター・エスカーラン
                </span>
                で、 フィリピン大学セブ校のコンピュータサイエンス学生です。
                清潔で保守可能なコードに焦点を当てたWebアプリケーションを構築しています。
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-sm lg:text-lg font-light leading-8 text-foreground/80">
                Currently, I work part-time at{" "}
                <span className="font-medium text-foreground">
                  Wind's Gate Philippines
                </span>
                , where I analyze system logs and identify root causes of errors
                — sharpening my debugging skills across the tech stack.
              </p>
              <p className="text-sm lg:text-base font-light leading-7 text-foreground/40">
                現在、
                <span className="font-medium">Wind's Gate Philippines</span>
                でパートタイムで働いており、
                システムログを分析してエラーの根本原因を特定し、
                技術スタック全体でのデバッグスキルを磨いています。
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Philosophy & Skills */}
        <div className="space-y-12 lg:pl-12">
          {/* Philosophy Section */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-8 h-8 border-l border-t border-primary/30" />

            <div className="space-y-6 p-6 border border-foreground/10">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-px bg-foreground/40" />
                <span className="text-xs uppercase tracking-[0.2em] text-foreground/80 font-light">
                  Philosophy
                </span>
              </div>
              <div className="ml-16 text-xs text-foreground/40 font-light mb-6">
                哲学
              </div>

              <blockquote className="text-lg lg:text-xl font-light leading-8 italic text-foreground/90 border-l-2 border-primary/40 pl-4">
                "Clean code is not written by following a set of rules. Clean
                code is written by someone who cares."
              </blockquote>

              <div className="text-sm lg:text-base font-light leading-7 text-foreground/40 border-l-2 border-primary/20 pl-4">
                「綺麗なコードは規則に従って書かれるものではない。
                綺麗なコードは気遣いを持つ人によって書かれる。」
              </div>

              <div className="flex items-center space-x-4 pt-4">
                <div className="w-8 h-px bg-foreground/40" />
                <span className="text-xs text-foreground/40 font-light">
                  My approach to development
                </span>
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-px bg-foreground/40" />
              <span className="text-xs uppercase tracking-[0.2em] text-foreground/80 font-light">
                Technologies
              </span>
            </div>
            <div className="ml-16 text-xs text-foreground/40 font-light mb-6">
              技術
            </div>

            <div className="ml-16 space-y-4">
              <p className="text-sm lg:text-lg font-light leading-8 text-foreground/80">
                I enjoy working with{" "}
                <span className="font-medium text-foreground">Next.js</span> and{" "}
                <span className="font-medium text-foreground">Spring Boot</span>
                , always looking for ways to write code that other developers
                can easily understand and extend.
              </p>
              <p className="text-sm lg:text-base font-light leading-7 text-foreground/40">
                <span className="font-medium">Next.js</span>と
                <span className="font-medium">Spring Boot</span>
                での作業を楽しんでおり、
                他の開発者が簡単に理解し拡張できるコードを書く方法を常に探しています。
              </p>
            </div>
          </div>

          {/* Availability indicator */}
          <div className="flex items-center space-x-4 pt-8">
            <div className="w-2 h-2 bg-primary/80 rounded-full animate-pulse" />
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-foreground/80 font-light">
                Available for collaboration
              </div>
              <div className="text-xs text-foreground/40 font-light">
                コラボレーション対応可能
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative element */}
      <div className="mt-24 flex justify-center">
        <div className="flex items-center space-x-8">
          <div className="w-16 h-px bg-foreground/20" />
          <div className="w-1 h-1 bg-primary/60" />
          <div className="w-16 h-px bg-foreground/20" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
