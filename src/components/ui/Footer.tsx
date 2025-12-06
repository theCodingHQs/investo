"use client";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#2f3437] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16">
          {/* Left column: logo + description */}
          <div className="flex flex-col gap-6">
            {/* Logo (replace src with your real logo) */}
            <div className="w-[160px]">
              {/* simple inline svg to approximate the provided mark */}
              <img src="/logo.png" alt="InvestoXpert Logo" className="w-full" />
            </div>

            <p className="text-[15px] leading-7 text-gray-200 max-w-sm">
              InvestoXpert is one of the fastest-growing companies in the real
              estate arena, offering comprehensive real estate solutions to
              fulfill myriad customer requirements.
            </p>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="text-gray-200 text-[15px] leading-7">
              <p>C-67,2nd Floor, Sector 63, Noida, Uttar Pradesh 201301(U.P)</p>
              <p className="mt-3">CALL US: 9880083870</p>
              <p className="mt-1">MAIL US: info@investoxpert.com</p>
            </div>
          </div>

          {/* Menu column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Menu</h3>
            <ul className="space-y-3 text-[15px] text-gray-200">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3 text-[15px] text-gray-200">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom tiny border line to match provided design */}
      <div className="h-[1px] bg-black/20" />
    </footer>
  );
}
