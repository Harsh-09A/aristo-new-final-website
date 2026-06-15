
export function slugify(text = "") {
  return text
    .toString()

    // Normalize unicode characters
    .normalize("NFKD")

    // Remove accents
    .replace(/[\u0300-\u036f]/g, "")

    // Convert to lowercase
    .toLowerCase()

    // Trim spaces
    .trim()

    // Replace & with 'and'
    .replace(/&/g, " and ")

    // Remove apostrophes
    .replace(/['’]/g, "")

    // Replace all non-alphanumeric characters with hyphen
    .replace(/[^a-z0-9]+/g, "-")

    // Remove multiple hyphens
    .replace(/-+/g, "-")

    // Remove starting and ending hyphens
    .replace(/^-|-$/g, "");
}

export async function generateUniqueSlug(title: string) {
  const baseSlug = slugify(title);

  let slug = baseSlug;
  let counter = 1;

//   while (true) {
//     const existing = await prisma.project.findUnique({
//       where: { slug },
//       select: { id: true },
//     });

//     if (!existing) break;

//     slug = `${baseSlug}-${counter}`;
//     counter++;
//   }

  return slug;
}