import { Megalo } from 'https://deno.land/x/megalo/mod.ts';

new Megalo()
	.get('/', () => new Response("Hello, Bench!", { status: 200 }))
  .serve({ port: 8000 });
