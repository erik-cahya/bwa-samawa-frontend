import Header from "@/components/Header";
import PropsWeddingPakcageWrapper from "@/components/WeddingPakcages";

export default function Home() {
   return (
      <main className="flex flex-col gap-y-16">
         <Header />
         <section className="">
            <PropsWeddingPakcageWrapper show="popular" type="slider" />
         </section>
      </main>
   );
}
