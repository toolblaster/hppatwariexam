/**
 * Global Tailwind CSS Configuration & Custom Styles
 * ----------------------------------------------------------------------
 * This file serves as the Single Source of Truth for:
 * 1. Typography (Strictly Inter & Poppins)
 * 2. Custom Components (Flip Cards, Tree Lines, Gradient Text)
 * 3. Layout Stability (Nav Height)
 * 4. Animations & Shadows
 * ----------------------------------------------------------------------
 */

tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],    // Primary Font (Body, UI, Numbers)
                heading: ['Poppins', 'sans-serif'], // Heading Font (H1-H6)
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
             * 1. GLOBAL BASE STYLES
             * --------------------------------------------------------- */
            addBase({
                'html': { 
                    scrollBehavior: 'smooth',
                    fontSize: '15px',
                    fontFamily: 'Inter, sans-serif', // Enforce Inter globally
                },
                'body': {
                    fontFamily: 'Inter, sans-serif', // Double enforcement
                },
                'h1, h2, h3, h4, h5, h6': {
                    fontFamily: 'Poppins, sans-serif', // Enforce Poppins for headings
                },
                // Custom Slim Scrollbar
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
             * 2. CUSTOM COMPONENTS
             * --------------------------------------------------------- */
            addComponents({
                // Header/Nav fixed height - Prevents Cumulative Layout Shift (CLS)
                '.nav-height': {
                    height: '3.5rem', // 56px
                    minHeight: '3.5rem',
                    contain: 'layout size',
                },

                // Compact Card Hover Effect - Centralized interaction design
                '.card-hover': {
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '@apply hover:-translate-y-1 hover:shadow-smooth-hover border border-slate-200/60': {}, 
                },

                // GLOBAL GRADIENT TEXT
                // Usage: <span class="gradient-text">...</span>
                '.gradient-text': {
                    backgroundImage: 'linear-gradient(135deg, #1e40af 0%, #2563eb 50%, #06b6d4 100%)',
                    '-webkit-background-clip': 'text',
                    '-webkit-text-fill-color': 'transparent',
                    backgroundClip: 'text',
                    color: 'transparent',
                    fontWeight: '800',
                    display: 'inline-block',
                },

                // Gradient Border Accent (Used on top of feature cards)
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

                // Tree Line (Used in Hierarchy Section)
                '.tree-line': {
                    position: 'relative',
                },
                '.tree-line::before': {
                    content: '""',
                    position: 'absolute',
                    top: '0',
                    bottom: '0',
                    left: '50%',
                    width: '1px', 
                    backgroundColor: '#e2e8f0', 
                    transform: 'translateX(-50%)',
                    zIndex: '0',
                },

                /* -----------------------------------------------------
                 * 3. FLIP CARD COMPONENT (Centralized Animation Logic)
                 * ----------------------------------------------------- */
                '.flip-card': {
                    perspective: '1000px',
                    cursor: 'pointer',
                    height: '11rem', // Fixed compact height
                },
                '.flip-card-inner': {
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    textAlign: 'center',
                    transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    transformStyle: 'preserve-3d',
                },
                // State class to trigger flip via JS
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
                    borderRadius: '0.75rem', 
                    padding: '1rem',
                    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                    borderWidth: '1px',
                },
                
                '.flip-card-front': {
                    backgroundColor: 'white',
                    borderColor: '#f1f5f9',
                },
                
                '.flip-card-back': {
                    backgroundColor: '#0f172a', // Dark Slate
                    color: 'white',
                    borderColor: '#1e293b',
                    transform: 'rotateY(180deg)',
                },
            });
        }
    ]
}
