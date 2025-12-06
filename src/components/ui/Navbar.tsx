"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, MapPin } from "lucide-react";
import { useUserLocation } from "@/hooks/useUserLocation";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { city, region, country, error } = useUserLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const locationText = error
    ? "Location unavailable"
    : city
    ? `${city}${region ? `, ${region}` : ""}${country ? `, ${country}` : ""}`
    : "Detecting...";

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-gradient-to-b from-black/70 to-transparent backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
        style={{
          WebkitBackdropFilter: scrolled
            ? "saturate(120%) blur(6px)"
            : undefined,
        }}
      >
        {/* Desktop / Tablet bar */}
        <nav className="hidden md:flex w-full max-w-7xl mx-auto items-center justify-between py-6 px-6">
          {/* Left: Logo */}
          <div className="flex items-center gap-4">
            <div className="relative w-36 h-10">
              <Image
                src="/logo.png"
                alt="InvestoXpert"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>

          {/* Center: pill nav */}
          <div className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 shadow-inner flex items-center gap-8">
            <Link
              href="/"
              className="text-white text-base font-medium hover:opacity-90"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="text-white text-base font-medium hover:opacity-90"
            >
              About Us
            </Link>
            <Link
              href="/careers"
              className="text-white text-base font-medium hover:opacity-90"
            >
              Careers
            </Link>
            <Link
              href="/blogs"
              className="text-white text-base font-medium hover:opacity-90"
            >
              Blogs
            </Link>
          </div>

          {/* Right: location + CTA */}
          <div className="flex items-center gap-4">
            {/* <div className="hidden lg:flex items-center gap-2 text-sm text-white/90 px-4 py-2 rounded-full bg-white/5">
              <MapPin className="w-4 h-4" />
              <span className="max-w-[180px] truncate">{locationText}</span>
            </div> */}

            <Link
              href="/contact"
              className="inline-block px-6 py-3 rounded-full bg-white text-black font-medium shadow hover:opacity-95 transition"
            >
              Contact Us
            </Link>
          </div>
        </nav>

        {/* Mobile bar */}
        <nav
          className="md:hidden w-full flex items-center justify-between px-4 py-3"
          style={{ backgroundColor: "#222129" }}
        >
          <div className="flex items-center gap-3">
            <div className="relative w-28 h-8">
              <Image
                src="/logo.png"
                alt="InvestoXpert"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-sm text-white/90 mr-2">
              <MapPin className="w-4 h-4" />
              <span className="hidden sm:inline-block text-sm">
                {city ? city : "Detecting..."}
              </span>
            </div>

            <button
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="p-2 rounded-md bg-white/5 hover:bg-white/10"
            >
              {open ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-16 z-40 transform origin-top transition-transform duration-300 ${
          open
            ? "translate-y-0 opacity-100"
            : "-translate-y-2 -translate-y-full opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "#222129" }}
      >
        <div className="px-6 py-6">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="text-white text-lg font-semibold py-3 px-2 rounded-md hover:bg-white/5"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              onClick={() => setOpen(false)}
              className="text-white text-lg font-semibold py-3 px-2 rounded-md hover:bg-white/5"
            >
              About Us
            </Link>
            <Link
              href="/careers"
              onClick={() => setOpen(false)}
              className="text-white text-lg font-semibold py-3 px-2 rounded-md hover:bg-white/5"
            >
              Careers
            </Link>
            <Link
              href="/blogs"
              onClick={() => setOpen(false)}
              className="text-white text-lg font-semibold py-3 px-2 rounded-md hover:bg-white/5"
            >
              Blogs
            </Link>

            <div className="pt-4 border-t border-white/6" />

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center w-full rounded-full py-3 text-sm font-semibold bg-white text-black"
            >
              Contact Us
            </Link>

            <div className="mt-4 flex items-center gap-3 text-sm text-white/90">
              <div>
                <div className="text-sm font-medium">
                  {city ?? "Detecting..."}
                </div>
                <div className="text-xs text-white/60">
                  {region || country
                    ? `${region ?? ""}${region && country ? ", " : ""}${
                        country ?? ""
                      }`
                    : ""}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
