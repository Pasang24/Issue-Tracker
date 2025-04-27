import Container from "@/components/Container";
import Navbar from "@/components/Navbar";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <Container>{children}</Container>
    </div>
  );
}

export default MainLayout;
