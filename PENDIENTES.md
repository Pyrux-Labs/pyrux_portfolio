# Pendientes de producción

## SEO / Social
- **Creator OG image**: cuando se comparte el link de un creador en WhatsApp/LinkedIn/Twitter, mostrar la foto del creador en vez del logo genérico de Pyrux.
  - Archivo: `app/[locale]/creator/[id]/page.tsx` — `openGraph.images`

## Accesibilidad
- **`<section>` sin `aria-label`**: todas las secciones de la landing carecen de `aria-label` o `aria-labelledby`. Impacta lectores de pantalla.
  - Archivo: `components/ui/Section.tsx`
- **Heading "Nuestros clientes" debajo del carousel**: posición intencional por estética, pero semánticamente incorrecto para lectores de pantalla. Evaluar si vale cambiar en el futuro.

## Resiliencia
- **Error boundaries**: ningún componente tiene `ErrorBoundary`. Un dato roto (ej. tech ID inexistente) causa pantalla en blanco. Wrappear al menos los modales y page-level clients.

## Performance / Imágenes
- **Apple touch icon como SVG**: iOS no soporta SVG como icono de pantalla de inicio. Agregar `public/apple-touch-icon.png` (180×180 PNG) y actualizar `icons.apple` en `app/layout.tsx`.
- **OG image sin `type` declarado**: agregar `type: "image/png"` al objeto de imagen en los metadatos. Opcional: convertir a WebP para reducir peso (~30%).
  - Archivos: `app/layout.tsx`, `app/[locale]/page.tsx`
- **Imágenes en modales sin blur placeholder**: en conexiones lentas se ve espacio en blanco. Agregar `placeholder="blur"` o skeleton.
  - Archivo: `components/modals/ProjectModal.tsx`
