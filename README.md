# GOLTRA Storefront

Nueva base de la tienda online de GOLTRA, reconstruida a partir de la demo inicial con foco en descubrimiento de camisetas y navegación de catálogo.

## Estado

**Fase actual: catálogo + ficha de producto.**

El carrito y los pagos quedan deliberadamente fuera de esta iteración para cerrar primero el modelo de producto, las variantes, el stock y el backend.

## Cambios principales

- Navegación real por **Liga → Equipo → Temporada**.
- URLs limpias y preparadas para SEO:
  - `/camisetas/laliga`
  - `/camisetas/laliga/real-betis`
  - `/camisetas/laliga/real-betis/1999-00`
- Buscador funcional desde el header.
- Filtros por liga, equipo, temporada, equipación, versión y talla.
- Filtros encadenados: los equipos dependen de la liga y las temporadas del equipo.
- Ficha de producto con configurador de versión, talla, personalización y parches.
- Precio recalculado en la ficha según extras.
- Diseño responsive para escritorio y móvil.
- Eliminación de reseñas, estadísticas, teléfonos, direcciones y claims ficticios.
- Eliminación del boilerplate PostgreSQL/Drizzle que no se utilizaba.
- Assets visuales autocontenidos: la demo ya no depende de imágenes ausentes del ZIP original.

## Datos de demo

El catálogo vive temporalmente en `src/lib/products.ts`.

Ahí se centralizan:

- ligas;
- equipos;
- temporadas;
- tipos de equipación;
- versiones;
- tallas;
- precios de versión;
- extras de personalización y parches.

Cuando se conecte el backend, este fichero será sustituido por consultas a base de datos/API sin necesidad de rediseñar las pantallas.

## Desarrollo

```bash
npm install
npm run dev
```

Abrir `http://localhost:3000`.

## Comprobaciones

```bash
npm run typecheck
npm run lint
npm run build
```

## Siguiente fase recomendada

1. Definir modelo definitivo de catálogo/stock en Supabase.
2. Subir fotografías reales y logos/escudos donde corresponda.
3. Conectar carrito persistente.
4. Definir gastos y modalidades de envío.
5. Integrar pagos.
6. Crear panel interno para catálogo, pedidos y stock.
