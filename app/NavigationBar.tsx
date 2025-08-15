"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Menu, X, Github, Linkedin } from "lucide-react";

const SECTIONS = [
  { id: "about", label: "About Me", jp: "私について" },
  { id: "tech-stacks", label: "Tech Stacks", jp: "技術" },
  { id: "credentials", label: "Credentials", jp: "資格" },
  { id: "featured-projects", label: "Featured Projects", jp: "プロジェクト" },
  { id: "contact-me", label: "Contact Me", jp: "連絡" },
];

const NAV_HEIGHT = "15vh";
const CLOSE_FADE_DURATION = 400;

const NavigationBar = () => {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const originalOverflow = useRef<string>("");

  const handleToggle = () => {
    if (!mounted) {
      setMounted(true);
      requestAnimationFrame(() => requestAnimationFrame(() => setOpen(true)));
    } else {
      setOpen(false);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => {
        setMounted(false);
      }, CLOSE_FADE_DURATION);
    }
  };

  const closeMenu = () => {
    if (!mounted) return;
    setOpen(false);
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(
      () => setMounted(false),
      CLOSE_FADE_DURATION
    );
  };

  useEffect(() => {
    if (originalOverflow.current === "")
      originalOverflow.current = document.body.style.overflow || "";
    if (mounted) document.body.style.overflow = "hidden";
    else document.body.style.overflow = originalOverflow.current || "";
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      document.body.style.overflow = originalOverflow.current || "";
    };
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mounted]);

  const panelBase = "lg:hidden fixed left-0 right-0";
  const panelStyle: React.CSSProperties = {
    top: NAV_HEIGHT,
    height: `calc(100% - ${NAV_HEIGHT})`,
    zIndex: 40,
  };

  const panelClasses = [
    panelBase,
    "bg-white border-t border-gray-200",
    "transform transition-[transform,opacity] duration-500 ease-in-out",
    mounted
      ? open
        ? "translate-y-0 opacity-100"
        : "translate-y-0 opacity-0"
      : "-translate-y-full opacity-0",
  ].join(" ");

  return (
    <>
      {/* Japanese-inspired navigation */}
      <nav className="px-8 lg:px-24 h-[15vh] flex max-w-7xl mx-auto justify-between items-center relative z-50 border-b border-gray-200 bg-white">
        {/* Logo with Japanese aesthetic */}
        <div className="flex items-center space-x-4">
          <div className="w-2 h-2 bg-black"></div>
          <Link href="/" className="flex items-center space-x-3">
            <span className="text-lg font-light tracking-[0.15em] text-black">
              LESTER
            </span>
            <div className="w-px h-4 bg-gray-400"></div>
            <span className="text-xs uppercase tracking-[0.3em] text-gray-500 font-light">
              Portfolio
            </span>
          </Link>
        </div>

        {/* Desktop Navigation - Japanese minimalist style */}
        <div className="hidden lg:flex items-center space-x-12">
          <ul className="flex items-center space-x-8">
            {SECTIONS.map((item, index) => (
              <li key={item.id} className="group">
                <Link
                  href={`#${item.id}`}
                  className="flex flex-col items-center space-y-1 py-2"
                >
                  <span className="text-sm font-light tracking-wide text-gray-700 group-hover:text-black transition-colors">
                    {item.label}
                  </span>
                  <span className="text-xs text-gray-400 font-light">
                    {item.jp}
                  </span>
                  <div className="w-0 group-hover:w-6 h-px bg-black transition-all duration-300"></div>
                </Link>
              </li>
            ))}
          </ul>

          {/* Resume button */}
          <div className="flex items-center space-x-4">
            <div className="w-8 h-px bg-gray-300"></div>
            <button className="group relative border border-gray-300 px-6 py-2 hover:border-black transition-colors">
              <span className="text-xs uppercase tracking-[0.2em] font-light">
                Resume
              </span>
              <div className="absolute top-1 right-1 w-1 h-1 bg-black opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Button - Fixed clickability */}
        <button
          onClick={handleToggle}
          className="lg:hidden p-4 z-[60] relative bg-white border border-gray-200 rounded"
          style={{ minWidth: "48px", minHeight: "48px" }}
        >
          {mounted && open ? (
            <X size={20} className="text-black mx-auto" />
          ) : (
            <div className="flex flex-col space-y-1 items-center">
              <div className="w-5 h-0.5 bg-black"></div>
              <div className="w-5 h-0.5 bg-black"></div>
              <div className="w-5 h-0.5 bg-black"></div>
            </div>
          )}
        </button>
      </nav>

      {/* Mobile Panel - Japanese aesthetic */}
      {mounted && (
        <aside
          id="mobile-menu"
          role="region"
          className={panelClasses}
          style={panelStyle}
        >
          <div className="w-full h-full bg-white relative">
            {/* Subtle background elements */}
            <div className="absolute top-20 right-8 w-16 h-16 border border-gray-100"></div>
            <div className="absolute bottom-40 left-8 w-px h-20 bg-gray-200"></div>

            <div className="flex flex-col h-full relative z-10">
              {/* Main navigation area */}
              <main className="flex-1 flex flex-col justify-center px-8 space-y-8">
                {SECTIONS.map((item, index) => (
                  <div key={item.id} className="group">
                    <Link
                      href={`#${item.id}`}
                      className="flex items-center space-x-6 py-3"
                      onClick={closeMenu}
                    >
                      <div className="flex items-center space-x-4">
                        <span className="text-xs text-gray-400 w-8">
                          0{index + 1}
                        </span>
                        <div className="w-8 h-px bg-gray-300 group-hover:bg-black transition-colors"></div>
                      </div>
                      <div className="flex-1">
                        <div className="text-2xl font-light tracking-wide text-black group-hover:translate-x-2 transition-transform">
                          {item.label}
                        </div>
                        <div className="text-sm text-gray-400 font-light mt-1">
                          {item.jp}
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}

                {/* Resume button */}
                <div className="pt-8">
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-4">
                      <span className="text-xs text-gray-400 w-8">06</span>
                      <div className="w-8 h-px bg-gray-300"></div>
                    </div>
                    <button
                      className="group border border-gray-300 px-8 py-3 hover:border-black transition-colors"
                      onClick={closeMenu}
                    >
                      <span className="text-sm uppercase tracking-[0.2em] font-light">
                        Resume
                      </span>
                      <div className="w-0 group-hover:w-12 h-px bg-black mt-2 transition-all duration-300"></div>
                    </button>
                  </div>
                </div>
              </main>

              {/* Footer */}
              <footer className="px-8 py-8 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-light">
                      Portfolio 2025
                    </p>
                    <div className="w-16 h-px bg-gray-300"></div>
                  </div>

                  <div className="flex items-center space-x-6">
                    <Link href="#" className="group p-2" aria-label="GitHub">
                      <Github
                        size={18}
                        className="text-gray-400 group-hover:text-black transition-colors"
                      />
                    </Link>
                    <Link href="#" className="group p-2" aria-label="LinkedIn">
                      <Linkedin
                        size={18}
                        className="text-gray-400 group-hover:text-black transition-colors"
                      />
                    </Link>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </aside>
      )}
    </>
  );
};

export default NavigationBar;
