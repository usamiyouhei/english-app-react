import  Link  from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <Link href="/word-app">English word app →</Link>
    </main>
  )
}