import dynamic from "next/dynamic";

const TextFade = dynamic(() => import("@/app/components/TextFade"), {
  ssr: false,
});

export default function Hero() {
  return (
    <section className="hero">
      <TextFade trigger={false}>
        <h1>Unleashing Construction Marvels: Igniting Innovation</h1>
        <p>
          We are a premier construction solutions provider with a focus on
          excellence, innovation and customer satisfaction. We bring your
          visions to life.
        </p>
      </TextFade>
    </section>
  );
}
