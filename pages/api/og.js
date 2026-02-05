import { ImageResponse } from 'next/og';

export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
          position: 'relative',
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'rgba(59, 130, 246, 0.1)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-150px',
            left: '-150px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'rgba(139, 92, 246, 0.1)',
          }}
        />

        {/* Logo */}
        <img
          src="https://weviaconsulting.com/logo_wev_ia.png"
          alt="WevIA Logo"
          width="200"
          height="200"
          style={{
            marginBottom: '30px',
          }}
        />

        {/* Title */}
        <div
          style={{
            display: 'flex',
            fontSize: '60px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '15px',
            textAlign: 'center',
          }}
        >
          WevIA Consulting
        </div>

        {/* Subtitle */}
        <div
          style={{
            display: 'flex',
            fontSize: '28px',
            color: '#94a3b8',
            textAlign: 'center',
            maxWidth: '800px',
          }}
        >
          Sites web qui rapportent | Automatisation IA
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            width: '200px',
            height: '4px',
            background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
            borderRadius: '2px',
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
