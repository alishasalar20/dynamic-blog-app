import BlogCard from "@/components/BlogCards";
// import Nav from "@/components/Nav";
import CommentSection from "@/components/CommentSection";
import Image from "next/image";

export default function Home() {
  return (
  <div>
    {/* <Nav /> */}
    <BlogCard />
    <CommentSection />
  </div>
  );
}
