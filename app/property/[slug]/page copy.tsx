import { getPropertyBySlug } from "@/services/property-service";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PropertySinglePage({
  params,
}: Props) {
  const { slug } = await params;

  const property = await getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  return (
    <div className="container">
      <h1>{property.title}</h1>

      <p>{property.location}</p>

      <p>{property.description}</p>

      <h3>Configurations</h3>

      {property.configurations.map((config) => (
        <div key={config.id}>
          {config.value} {property.configurationUnit}
        </div>
      ))}
    </div>
  );
}