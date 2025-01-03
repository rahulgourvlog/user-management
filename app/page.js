"use client"
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/users/1"); // Redirect to the first page
}