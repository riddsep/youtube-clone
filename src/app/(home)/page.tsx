import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image
        className="dark:invert"
        src="/logo.svg"
        alt="Next.js logo"
        width={50}
        height={50}
        priority
      />
      <p className="font-semibold text-xl tracking-tight">WeTube</p>
    </div>
  );
}
