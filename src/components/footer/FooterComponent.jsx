"use client";

import React from "react";
import Link from "next/link";

const FooterComponent = () => {
  return (
    <footer className="bg-light-background dark:bg-dark-background py-8 mt-auto">
      <div className="container mx-auto px-6">
        {/* Footer Sections */}
        <div className="flex flex-wrap justify-between">
          {/* Support Section */}
          <div className="w-full sm:w-1/2 md:w-1/3 mb-4 md:mb-0 text-light-foreground dark:text-dark-foreground">
            <h4 className="text-lg font-semibold mb-2">Support</h4>
            <p>
              If you need any help, feel free to reach out to our technical
              support:
            </p>
            <p className="mt-2">
              <span className="font-semibold">Email:</span>{" "}
              support@yourwebsite.com
            </p>
            <p className="mt-1">
              <span className="font-semibold">Phone:</span> +1 (123) 456-7890
            </p>
          </div>

          {/* Legal Section */}
          <div className="w-full sm:w-1/2 md:w-1/3 mb-4 md:mb-0 text-light-foreground dark:text-dark-foreground">
            <h4 className="text-lg font-semibold mb-2">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:underline">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="w-full sm:w-1/2 md:w-1/3 text-light-foreground dark:text-dark-foreground">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/Members-only" className="hover:underline">
                  Members Only
                </Link>
              </li>
              <li>
                <Link href="/chats" className="hover:underline">
                  Chats
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:underline">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center text-gray-600 dark:text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Ideathon
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;