import Image from "next/image";
import FadeIn from '../components/ui/FadeIn';

export default function Home() {
  const nama = "Kaka Agastyaa"
  return (
    <section className="text-center py-20">
      <FadeIn>
      <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
      </FadeIn>
      <FadeIn>
      <p className="text-gray-600 mt-4">
        I'm a web developer passionate about building modern web applications.
      </p>
      </FadeIn>
    </section>
  );
}
