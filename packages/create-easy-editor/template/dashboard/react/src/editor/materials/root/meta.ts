import type { ComponentMetadata } from '@easy-editor/core'
import configure from './configure'

const meta: ComponentMetadata = {
  componentName: 'Root',
  title: '根容器',
  category: '通用',
  configure,
}

export default meta
