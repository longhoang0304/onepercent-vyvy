import { children as childrenResolver, type ParentComponent } from "solid-js"

export const HeaderWrapper: ParentComponent = ({ children }) => {
  const resolvedChildren = childrenResolver(() => children)
  return (
    <div id="1p-header">
      {resolvedChildren()}
    </div>
  )
}

export default HeaderWrapper