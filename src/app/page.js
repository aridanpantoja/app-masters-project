import FetchData from "@/components/FetchData";
import Loading from "@/components/FetchData/loading";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-dark-purple">
      <Header/>

      <main className="w-full max-w-7xl px-4">
        <Suspense fallback={<Loading />}>
          <FetchData />
        </Suspense>
      </main>
      
      <Footer />
    </div>
 )
}
