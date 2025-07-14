import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href={"/"}>Home</Link>
      <Link href={"/"}>About</Link>
      <Link href={"/"}>...</Link>
      <button>Payment</button>
    </div>
  );
}
