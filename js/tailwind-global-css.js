/**
 * Global Tailwind CSS Configuration & Custom Styles
 * Focus: High-Density, Space-Efficient, Gradient Accents, Smooth Shadows
 */

tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            boxShadow: {
                'smooth': '0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
                'smooth-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025)',
                'glow': '0 0 15px rgba(59, 130, 246, 0.15)',
            },
            animation: {
                'subtle-pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }
        }
    },
    plugins: [
        function({ addBase, addComponents, addUtilities }) {
            
            /* ---------------------------------------------------------
             * 1. GLOBAL BASE STYLES (Ultra-Slim Scrollbar)
             * --------------------------------------------------------- */
            addBase({
                'html': { 
                    scrollBehavior: 'smooth',
                    fontSize: '15px', // Slightly condensed base font size for higher density
                },
                '::-webkit-scrollbar': { 
                    width: '6px',
                    height: '6px'
                },
                '::-webkit-scrollbar-track': { 
                    background: 'transparent' 
                },
                '::-webkit-scrollbar-thumb': { 
                    background: '#cbd5e1', 
                    borderRadius: '10px' 
                },
                '::-webkit-scrollbar-thumb:hover': { 
                    background: '#94a3b8' 
                },
            });

            /* ---------------------------------------------------------
             * 2. CUSTOM COMPONENTS (High Density & Visuals)
             * --------------------------------------------------------- */
            addComponents({
                // Compact Card Hover Effect
                '.card-hover': {
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '@apply hover:-translate-y-1 hover:shadow-smooth-hover border border-slate-200/60': {}, 
                },

                // Vivid Gradient Text
                '.gradient-text': {
                    backgroundImage: 'linear-gradient(135deg, #1e40af 0%, #2563eb 50%, #06b6d4 100%)',
                    '-webkit-background-clip': 'text',
                    '-webkit-text-fill-color': 'transparent',
                    backgroundClip: 'text',
                    color: 'transparent',
                    fontWeight: '800',
                },

                // Gradient Border Accent (Top of cards)
                '.gradient-border-top': {
                    position: 'relative',
                    overflow: 'hidden',
                },
                '.gradient-border-top::before': {
                    content: '""',
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '3px',
                    background: 'linear-gradient(90deg, #3b82f6, #06b6d4)',
                },

                // Tree Line (Hierarchy) - Thinner & Lighter
                '.tree-line': {
                    position: 'relative',
                },
                '.tree-line::before': {
                    content: '""',
                    position: 'absolute',
                    top: '0',
                    bottom: '0',
                    left: '50%',
                    width: '1px', // Thinner line
                    backgroundColor: '#e2e8f0', // Lighter slate
                    transform: 'translateX(-50%)',
                    zIndex: '0',
                },

                /* -----------------------------------------------------
                 * 3. COMPACT FLIP CARDS
                 * ----------------------------------------------------- */
                '.flip-card': {
                    perspective: '1000px',
                    cursor: 'pointer',
                    height: '11rem', // Reduced height for density (was 14rem)
                },
                '.flip-card-inner': {
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    textAlign: 'center',
                    transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    transformStyle: 'preserve-3d',
                },
                '.flip-card-inner.is-flipped': {
                    transform: 'rotateY(180deg)',
                },
                
                '.flip-card-front, .flip-card-back': {
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '0.75rem', // Slightly smaller radius
                    padding: '1rem',          // Reduced padding
                    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                    borderWidth: '1px',
                },
                
                '.flip-card-front': {
                    backgroundColor: 'white',
                    borderColor: '#f1f5f9',
                },
                
                '.flip-card-back': {
                    backgroundColor: '#0f172a', // Darker slate
                    color: 'white',
                    borderColor: '#1e293b',
                    transform: 'rotateY(180deg)',
                },
            });
        }
    ]
}