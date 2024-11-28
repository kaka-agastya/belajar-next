import Image from "next/image";

export default function Home() {
  const nama = "Kaka"
  return (
    <section className="text-center py-20">
      <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
      <p className="text-gray-600 mt-4">
        I'm a web developer passionate about building modern web applications.
      </p>
    </section>
  );
}
