module.exports = {
      theme: {
        extend: {
          colors: {
            canvas: '#080D17',
            midnight: '#111C2C',
            'text-primary': '#F4F7FC',
            'text-muted': '#A8B7CB',
            'icy-cyan': '#8BE7F0',
            'soft-blue': '#719EFF',
            'sunset-amber': '#EAA56D',
          },
          fontFamily: {
            heading: ['"Space Grotesk"', 'sans-serif'],
            body: ['"DM Sans"', 'sans-serif'],
            mono: ['"JetBrains Mono"', 'monospace'],
          },
          spacing: { '4':'4px', '6':'6px', '10':'10px', '12':'12px', '80':'80px',
            '8': '0.5rem',
            '16': '1rem',
            '24': '1.5rem',
            '32': '2rem',
            '48': '3rem',
            '64': '4rem',
            '96': '6rem',
            '128': '8rem',
          },
          maxWidth: {
            'site': '1200px',
          },
          borderRadius: {
            'card': '24px',
            'btn': '12px',
          },
          transitionDuration: {
            '250': '250ms',
          }
        }
      }
    }
module.exports.content = ['./dist/index.html'];

