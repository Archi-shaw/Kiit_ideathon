import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="relative w-full">
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[700px]">
        <Image
          src="/assests/alumni_pic_3.jpg"
          layout="fill"
          objectFit="cover"
          alt="alumni"
          className="opacity-50"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 gap-2 px-4">
          <p className="text-lg md:text-xl lg:text-2xl font-bold">
            Get to Know KAA
          </p>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold">
            We&apos;re Here For You
          </h1>
          <p className="text-sm md:text-lg lg:text-xl font-medium max-w-[90%] md:max-w-[85%] lg:max-w-[80%]">
            From connecting you with 300,000+ alumni worldwide to bringing you
            the latest Stanford stories, KAA helps you keep Stanford close
            wherever you are.
          </p>
        </div>
      </div>

      <div className="relative flex flex-col gap-4 justify-center items-center mt-8 p-4">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold max-w-[70vw]">
          About KIIT Alumni Network
        </h1>
        <span className="text-sm md:text-base lg:text-lg max-w-[90%] text-left">
          We're more than a university. We're a community. KIIT alumni and
          networks is the hub for the KIIT alumni, parents, families, students,
          and friends who help set our University apart through their engagement
          and career support. This site is where we can come together to find
          inspiring stories, share information and resources, keep our community
          in the know, celebrate the impact of giving, and stay connected to one
          another.
        </span>
        <span className="text-sm md:text-base lg:text-lg max-w-[90%] text-left">
          Our Alumni Network fosters a dynamic connection between past and
          present students. Through this platform, alumni and students can
          collaborate, access valuable resources, and explore career-building
          opportunities. Students can connect with experienced alumni for
          mentorship, gain insights into various industries, and find guidance
          on their career paths. Alumni, in turn, have the opportunity to share
          job openings, support new graduates, and contribute to a growing
          professional community that keeps the spirit of our institution alive.
          With events, resources, and a commitment to lifelong networking, our
          Alumni Network ensures that support and opportunity are never far away
        </span>
      </div>
      <div className="relative mt-4 border-t-1 p-6">
        <h2 className="text-2xl font-bold text-center mb-2">Contact Us</h2>
        <p className="text-center text-lg mb-4">
          Have questions or need help? Feel free to reach out!
        </p>
        <div className="max-w-md mx-auto text-center flex flex-col gap-4">
          <div>
            <h3 className="text-lg font-semibold">Phone</h3>
            <p>+1 (123) 456-7890</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Email</h3>
            <p>info@kiit.edu</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Address</h3>
            <p>KIIT University, Campus 1, Bhubaneswar, Odisha, India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
