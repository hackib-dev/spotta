interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="bg-[#F5F5F5] min-h-screen">{children}</div>
    </>
  );
}
