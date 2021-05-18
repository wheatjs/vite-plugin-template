import type { Plugin } from 'vite'
import type { Options } from './types'

export default function VitePluginMyPlugin(options: Options = {}): Plugin {
  return {
    name: 'vite-plugin-my-plugin',
    enforce: 'post',
    transform(code, id) {
      return code
    },
  }
}
