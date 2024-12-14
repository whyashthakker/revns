import Footer from "@/components/footer";
import ShowcaseNavbar from "@/components/showcase-navbar";

export function BasicLayout(props: { children: React.ReactNode }) {
  return (
    <div className="bg-white">
      <ShowcaseNavbar />
      <main className="isolate">{props.children}</main>
      <Footer />
    </div>
  );
}
