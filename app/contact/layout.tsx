import { BasicLayout } from "../blog/components/basic-layout";

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <BasicLayout>{children}</BasicLayout>;
}