import HeroSection from "@/components/HeroSection"

const TEMP_API_KEY = ""

export default function Home() {
  return (
    <>
      <HeroSection />

      <div className="flex flex-col m-10 mt-0 ">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-alabaster mb-3">
            Popular Right Now
          </h2>
          <p className="text-lg text-santas-gray">
            Explore what everyone is watching
          </p>
        </div>
      </div>
    </>
  )
}
