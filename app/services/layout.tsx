import { BasicLayout } from "../blog/components/basic-layout";

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <BasicLayout>{children}</BasicLayout>;
}