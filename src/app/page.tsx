import Header from "@/components/Header";
import PropsWeddingPakcageWrapper from "@/components/WeddingPakcages";
import Thumbsup from "@/assets/images/thumbsup.svg";
import Calendar from "@/assets/images/calendar.svg";
import HomeIcon from "@/assets/images/home.svg";
import Link from "next/link";
import Cities from "@/components/Cities";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-16">
      <Header />
      <section className="">
        <PropsWeddingPakcageWrapper show="popular" type="slider" />
      </section>
      <section className="container mx-auto flex flex-col">
        <h2 className="text-3xl font-bold max-w-md mx-auto text-center mb-8">Alasan Mereka Memilih Wedding Package Samawa</h2>
        <div className="grid grid-cols-3 gap-10">
          <div className="flex flex-col border rounded-3xl p-8 gap-y-5 items-start">
            <span className="text-color2">
              <Thumbsup />
            </span>
            <span className="flex flex-col gap-y-2">
              <h6 className="font-bold text-xl">Dipercaya Sejak 1970</h6>
              <p className="">Lorem ipsum dolor si amet nikah berkah dunia akhirat nantinya</p>
            </span>
            <Link href="#" className="text-color2 hover:underline">
              Learn More
            </Link>
          </div>
          <div className="flex flex-col border rounded-3xl p-8 gap-y-5 items-start">
            <span className="text-color2">
              <Calendar />
            </span>
            <span className="flex flex-col gap-y-2">
              <h6 className="font-bold text-xl">Dipercaya Sejak 1970</h6>
              <p className="">Lorem ipsum dolor si amet nikah berkah dunia akhirat nantinya</p>
            </span>
            <Link href="#" className="text-color2 hover:underline">
              Learn More
            </Link>
          </div>

          <div className="flex flex-col border rounded-3xl p-8 gap-y-5 items-start">
            <span className="text-color2">
              <HomeIcon />
            </span>
            <span className="flex flex-col gap-y-2">
              <h6 className="font-bold text-xl">Dipercaya Sejak 1970</h6>
              <p className="">Lorem ipsum dolor si amet nikah berkah dunia akhirat nantinya</p>
            </span>
            <Link href="#" className="text-color2 hover:underline">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto flex flex-col">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold max-w-sm">Our Latest & Best Wedding Packages</h2>
          <Link href="/weddings.html" className="border border-dark1 px-5 py-3 text-center rounded-full font-semibold">
            Explore All
          </Link>
        </div>

        <PropsWeddingPakcageWrapper show="popular" type="grid" />
      </section>

      <section className="bg-light2 py-16">
        <div className="container px-32 mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold max-w-sm">Browse Packages City Recomendation</h2>
            <Link href={`${process.env.HOST_APP}/cities`} className="border border-dark1 px-5 py-3 text-center rounded-full font-semibold">
              Explore All
            </Link>
          </div>
        </div>

        <Cities />
      </section>
    </main>
  );
}
