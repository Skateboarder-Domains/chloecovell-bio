import { neon } from '@neondatabase/serverless';

interface Env {
  NEON_DATABASE_URL: string;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  try {
    const sql = neon(context.env.NEON_DATABASE_URL);
    
    const skaters = await sql`
      SELECT * FROM skaters 
      WHERE slug = 'chloecovell' 
      LIMIT 1
    `;
    
    if (skaters.length === 0) {
      return new Response(JSON.stringify({ error: 'Skater not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    return new Response(JSON.stringify(skaters[0]), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    console.error('Error fetching skater:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
