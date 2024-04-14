import Nav from "./components/Nav"
import Statelist from "./components/Statelist.jsx"
export default function Home() {
  return (
    <main>
      <Nav/>
      <section className="padding">
        <Statelist/>
      </section>
    </main>
  )
}