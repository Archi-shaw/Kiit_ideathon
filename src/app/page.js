<<<<<<< HEAD
"use client"
import FooterComponent from "@/components/footer/FooterComponent";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import Carousel from "@/components/caraousel/Caraousel";
export default function Home() {
  return (
    <>
    
      {/* <div></div> */}
        
        <Carousel/>
      
     
=======
import Link from "next/link";


export default function Home() {
  return (
    <>
      <div className="h-auto flex flex-row max-lg:gap-2 lg:gap-5 max-lg:m-2 lg:m-4 p-4 max-w-full ">
        <div className="w-1/4 flex flex-col max-lg:gap-1 lg:gap-2">
          <Link href="/chats" className=" rounded-md cursor-pointer border-light-accent dark:border-white max-lg:my-1 lg:my-2 p-2 bg-[#e8e4df] text-black hover:bg-blue-600 hover:text-white dark:bg-dark-primary dark:text-dark-foreground dark:hover:bg-teal-600 dark:hover:text-white font-semibold">Chats</Link>
          <Link href="/resources" className=" rounded-md cursor-pointer border-light-accent dark:border-white max-lg:my-1 lg:my-2 p-2 bg-[#e8e4df] text-black hover:bg-blue-600 hover:text-white dark:bg-dark-primary dark:text-dark-foreground dark:hover:bg-teal-600 dark:hover:text-white font-semibold">Resources</Link>
          <Link href="/post" className=" rounded-md cursor-pointer border-light-accent dark:border-white max-lg:my-1 lg:my-2 p-2 bg-[#e8e4df] text-black hover:bg-blue-600 hover:text-white dark:bg-dark-primary dark:text-dark-foreground dark:hover:bg-teal-600 dark:hover:text-white font-semibold">Post</Link>
          <Link href="/members" className=" rounded-md cursor-pointer border-light-accent dark:border-white max-lg:my-1 lg:my-2 p-2 bg-[#e8e4df] text-black hover:bg-blue-600 hover:text-white dark:bg-dark-primary dark:text-dark-foreground dark:hover:bg-teal-600 dark:hover:text-white font-semibold">Members Only</Link>
        </div>
        <div className="w-3/4"> Tasks</div>
      </div>
>>>>>>> 7f46447206d724507539315b9121d2b51b5dfa89
    </>
  );
}
