interface DashboardLayoutProps {
  children: React.ReactNode;
  modal?: React.ReactNode;
}

export default function DashboardLayout({ children, modal }: DashboardLayoutProps) {
  return (
    <div>
      {children}
      {modal}
    </div>
  );
}

