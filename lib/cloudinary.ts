const CLOUD = "dj95v7mro";
const BASE = `https://res.cloudinary.com/${CLOUD}/image/upload`;

export function cdnThumb(publicId: string): string {
	if (publicId.startsWith("/")) return publicId;
	return `${BASE}/q_40,w_600,f_webp/${publicId}`;
}

export function cdnAvatar(publicId: string): string {
	if (publicId.startsWith("/")) return publicId;
	return `${BASE}/q_auto,w_128,f_webp/${publicId}`;
}

export function cdnFull(publicId: string): string {
	if (publicId.startsWith("/")) return publicId;
	return `${BASE}/q_auto,f_auto/${publicId}`;
}
