import CategoryDetails from "@/components/category/CategoryDetails";

interface PageProps {
  params: { id: string };
}

export default async function CategoryPage({ params }: PageProps) {
  const { id } = params;

  console.log("ID de categoría resuelto:", id);

  return <CategoryDetails id={id} />;
}
