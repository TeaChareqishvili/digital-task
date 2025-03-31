import { ReactNode } from "react";

type HeaderLayoutProps = {
  children: ReactNode;
};

export default function HeaderLayout({ children }: HeaderLayoutProps) {
  return <div className="header-container">{children}</div>;
}
