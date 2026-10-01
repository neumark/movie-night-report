import type { ComponentType } from 'react'

function Include({ component: Component }: { component: ComponentType }) {
  return <Component />
}

export default Include
