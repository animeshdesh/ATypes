import Image from "next/image";
import { Appbar } from "./components/Appbar";

export default function Home() {
  return (
    <main className="">
      <Appbar />
      <div>
        <h1 className="text-4xl text-center">Welcome to Next.js</h1>
      </div>
    </main>
  );
}
