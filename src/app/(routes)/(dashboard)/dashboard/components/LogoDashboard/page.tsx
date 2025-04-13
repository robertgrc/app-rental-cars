import Image from "next/image";
import Link from "next/link";



export default function LogoDashboard() {
  return (
    <Link href="/" className="flex items-center h-20 gap-2 border-b cursor-pointer min-h-20 px-6">
        <Image src="/logo.svg" alt="Logo" width="80" height="80" />
        <h1 className="text-2xl">Tarrecars</h1>
    </Link>
  )
}
