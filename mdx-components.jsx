import { MDXComponents } from '@/components/MDXComponents'

export function useMDXComponents(components) {
  return {
    ...components,
    ...MDXComponents,
  }
}
