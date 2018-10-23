export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/vue-turbolinks.iife.js',
      format: 'iife',
      name: 'TurbolinksAdapter',
      sourceMap: 'inline'
    },
    {
      file: 'dist/vue-turbolinks.js',
      format: 'umd',
      name: 'TurbolinksAdapter',
      sourceMap: 'inline'
    }
  ],
}