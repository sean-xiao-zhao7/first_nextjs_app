import Link from 'next/link'

const Index = () => (
  <div>
    <h1>First NextJS</h1>
    <nav>
      <Link href='/about'>About</Link>
    </nav>
    <main>
      Welcome to the first Next.js app.
    </main>
  </div>
)

export default Index
