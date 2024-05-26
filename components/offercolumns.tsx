/**
 * v0 by Vercel.
 * @see https://v0.dev/t/uBN7bnbBivu
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import React from "react";

type BoltIconProps = React.SVGProps<SVGSVGElement>;

type RocketIconProps = React.SVGProps<SVGSVGElement>;

type SettingsIconProps = React.SVGProps<SVGSVGElement>;

export default function OfferColumns() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid grid-cols-1 gap-8 px-4 md:grid-cols-3 md:gap-12 lg:gap-16">
        <div className="space-y-4 md:space-y-6">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-gray-100 p-3 ">
              <BoltIcon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
              Fast Deployment
            </h3>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            Instantly deploy your application to a global CDN with a single
            click. No more waiting for builds and deployments.
          </p>
        </div>
        <div className="space-y-4 md:space-y-6">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-gray-100 p-3">
              <SettingsIcon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
              Flexible Configuration
            </h3>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            Customize your application with a wide range of configuration
            options. Easily manage your environment variables, build scripts,
            and more.
          </p>
        </div>
        <div className="space-y-4 md:space-y-6">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-gray-100 p-3 ">
              <RocketIcon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
              Blazing Fast
            </h3>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            Our global CDN and optimized infrastructure ensure your application
            loads lightning fast, no matter where your users are located.
          </p>
        </div>
      </div>
    </section>
  );
}

function BoltIcon(props: BoltIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

function RocketIcon(props: RocketIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function SettingsIcon(props: SettingsIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
