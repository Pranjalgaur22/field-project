export default function Home() {
  return (
    <main className="bg-black">
      <div className="min-h-screen w-full flex justify-center items-center">
        <div className="flex flex-col gap-6 text-center">
        <h2 className="font-semibold text-7xl z-10 text-white" >A Spiritual Odyssey</h2>
        <h6 className="font-semibold text-4xl z-10 text-white" >Mathura-Vrindavan Adventure</h6>
        </div>
        <button>Explore</button>
      </div>
      <div className="h-screen w-full absolute top-0 overflow-hidden opacity-50">
            <video src="./video1.webm" autoPlay muted loop className="bg-cover" ></video>
      </div>
    </main>
  )
}
