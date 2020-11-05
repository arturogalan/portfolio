module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    enabled: false
  },
  theme: {
    extend: {
      textColor: {
        default: 'var(--color-text-default)',
        soft: 'var(--color-text-soft)',
        strong: 'var(--color-text-strong)'
      },
      backgroundColor: {
        default: 'var(--color-bg-default)',
        soft: 'var(--color-bg-soft)',
        softer: 'var(--color-bg-softer)',
        strong: 'var(--color-bg-strong)',
        'inline-code': 'var(--color-bg-inline-code)'
      },
      fontFamily: {
        'Ranchers': ['Ranchers', 'sans-serif'],
        'Comfortaa': ['Comfortaa', 'serif'],
        'Nunito': ['Nunito Sans', 'serif'],
        sans: ['Nunito Sans'],
      },
    }
  },
  variants: {},
  plugins: []
}
