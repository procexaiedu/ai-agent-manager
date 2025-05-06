import Image from "next/image";
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/dashboard');

  // This part is technically unreachable but good practice for component structure
  return null; 
}
