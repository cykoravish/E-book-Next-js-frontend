import Banner from "@/app/(Home)/components/Banner";
import BookList from "./components/BookList";
import { Suspense } from "react";
import Loading from "@/components/Loading";

export default function Home() {
  return (
    <>
      <Banner />
      <Suspense fallback={<Loading/>}>
        <BookList />
      </Suspense>
    </>
  );
}
