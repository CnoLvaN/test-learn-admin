import { ReactNode } from "react";

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  //TODO check if authorised

  return <>{children}</>;
}
