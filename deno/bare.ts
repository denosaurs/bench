const body = new TextEncoder().encode("Hello, Bench!");

const p1 = [];

for await (const conn of Deno.listen({ port: 8000 })) {
  p1.push(
    (async () => {
      const p2 = [];
      for await (const { respondWith } of Deno.serveHttp(conn)) {
        p2.push(respondWith(new Response(body)));
      }
      await Promise.all(p2);
    })(),
  );
}

await Promise.all(p1);
