import { Container } from "@/components/container";

export function Header({ title, subtitle }) {
  return (
    <div className="mb-5 bg-gray-100 py-20">
      <Container>
        <h2 className="mb-2 text-3xl font-bold tracking-tight text-foreground">
          {title}
        </h2>
        <p className="text-lg leading-8 text-muted-foreground">{subtitle}</p>
      </Container>
    </div>
  );
}
