'use client'
import Navbar from "@/components/navbar"
import Billboard from "@/components/billboard"
import MovieList from "@/components/movielist"
export default function Home() {
  return (
   <>
   <Navbar />
   <Billboard />
   <div className="pb-40">
      <MovieList />
   </div>
   </>
  )
}
