type Props = {
  searchParams: Promise<{
    category?: string;
    type?: string;
    search?: string;
    location?: string;
    bhk?: string;
    min_price?: string;
    max_price?: string;
    status?: string;
    developer?: string;
  }>;
};

export default async function ListingsPage({
  searchParams,
}: Props) {
  const params = await searchParams;

  return (
    <div>
      <p>Category: {params.category}</p>
      <p>Type: {params.type}</p>
      <p>Search: {params.search}</p>
      <p>Location: {params.location}</p>
      <p>BHK: {params.bhk}</p>

      <pre>{JSON.stringify(params, null, 2)}</pre>
    </div>
  );
} 