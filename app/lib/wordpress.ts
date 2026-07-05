const BASE_URL = process.env.WORDPRESS_API_URL;

// ---------------------------------------------------------------------------
// Raw WordPress REST API types
// ---------------------------------------------------------------------------

interface WPFeaturedMedia {
  source_url: string;
  alt_text: string;
  media_details: {
    sizes: Record<string, { source_url: string }>;
  };
}

interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  acf: Record<string, unknown>;
  featured_media: number;
  _embedded?: {
    "wp:featuredmedia"?: WPFeaturedMedia[];
  };
}

// ---------------------------------------------------------------------------
// Application-facing types
// ---------------------------------------------------------------------------

export interface Coach {
  id: number;
  slug: string;
  name: string;
  nameEn: string;
  bio: string;
  position: string;
  message: string;
  specialties: string[];
  imageUrl: string | null;
  imageAlt: string;
}

export interface GalleryItem {
  id: number;
  slug: string;
  title: string;
  caption: string;
  category: string;
  imageUrl: string | null;
  imageAlt: string;
}

// ---------------------------------------------------------------------------
// Internal fetch helper
// ---------------------------------------------------------------------------

async function fetchWP<T>(endpoint: string): Promise<T> {
  if (!BASE_URL) {
    console.error("WORDPRESS_API_URL is not defined");
    return [] as unknown as T;
  }

  const url = `${BASE_URL}/${endpoint}`;

  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });

    if (!res.ok) {
      console.error(`WordPress API error: ${res.status} ${res.statusText} (${url})`);
      return [] as unknown as T;
    }

    return res.json() as Promise<T>;
  } catch (err) {
    console.error(`WordPress API fetch failed (${url}):`, err);
    return [] as unknown as T;
  }
}

// ---------------------------------------------------------------------------
// Shape helpers
// ---------------------------------------------------------------------------

function extractImageUrl(post: WPPost): string | null {
  const media = post._embedded?.["wp:featuredmedia"]?.[0];
  if (!media?.source_url) return null;
  // Encode URI to handle Japanese filenames safely
  return encodeURI(decodeURI(media.source_url));
}

function extractImageAlt(post: WPPost): string {
  return post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text ?? "";
}

function asString(value: unknown): string {
  return typeof value === "string" ? value : "";
}

function splitSpecialties(raw: string): string[] {
  if (!raw.trim()) return [];
  return raw.split(",").map((s) => s.trim()).filter(Boolean);
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

export async function getCoaches(): Promise<Coach[]> {
  const posts = await fetchWP<WPPost[]>("coaches?_embed");

  return posts.map((post) => ({
    id: post.id,
    slug: post.slug,
    name: post.title.rendered,
    nameEn: asString(post.acf.name_en),
    bio: post.content.rendered,
    position: asString(post.acf.position),
    message: asString(post.acf.message),
    specialties: splitSpecialties(asString(post.acf.specialties)),
    imageUrl: extractImageUrl(post),
    imageAlt: extractImageAlt(post),
  }));
}

export async function getGalleryItems(): Promise<GalleryItem[]> {
  const posts = await fetchWP<WPPost[]>("gallery?_embed");

  return posts.map((post) => ({
    id: post.id,
    slug: post.slug,
    title: post.title.rendered,
    caption: post.content.rendered,
    category: asString(post.acf.category),
    imageUrl: extractImageUrl(post),
    imageAlt: extractImageAlt(post),
  }));
}
