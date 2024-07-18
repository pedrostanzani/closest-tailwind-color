import Container from "@/components/Container";
import PageHeading from "@/components/PageHeading";
import ColorApp from "./color-app";

export default function Home() {
  return (
    <Container className="mt-4">
      <PageHeading />
      <ColorApp />
    </Container>
  );
}
