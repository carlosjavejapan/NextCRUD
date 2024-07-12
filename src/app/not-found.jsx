import Link from "next/link"

function NotFound() {
  return (
    <section className="flex h-[calc(100vh-7rem)] justify-center items-center">
      <div>
        <h1 className="text-6xl font-bold">Not Found</h1>
        <Link href="/">Volver al inicio</Link>
      </div>
    </section>
  )
}

export default NotFound
