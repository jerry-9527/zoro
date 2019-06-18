import babel from 'rollup-plugin-babel'
import nodeResolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'

const pkg = require('./package.json')

const replaceOption = {
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
}

export default {
  input: 'src/index.ts',
  output: [
    { file: pkg.main, format: 'umd', name: 'zoro', exports: 'named' },
    { file: pkg.module, format: 'es', exports: 'named' },
  ],
  plugins: [
    nodeResolve({
      mainFields: ['module', 'main', 'jsnext'],
    }),
    typescript(),
    replace(replaceOption),
    commonjs(),
  ],
}