import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';

export default {
  input: `${__dirname}/src/index.js`,
  output: {
    name: 'Selected',
    file: `${__dirname}/lib/index.js`,
    format: 'umd',
    globals: {
      react: 'React',
      'prop-types': 'PropTypes'
    }
  },
  external: ['react', 'prop-types'],
  plugins: [
    babel({
      presets: [['env', { modules: false }], 'react'],
      plugins: ['external-helpers', 'transform-class-properties', 'transform-object-rest-spread']
    }),
    uglify({}, minify)
  ]
};
