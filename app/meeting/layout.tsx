import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function MeetingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}