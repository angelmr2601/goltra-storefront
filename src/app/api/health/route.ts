export async function GET() {
  return Response.json({ ok: true, service: "goltra-storefront", version: "0.2.0" });
}
