import * as React from 'react'
const SvgCheck = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      d="M12.207 6.207l-4.5 4.5a1 1 0 01-1.414 0l-2.5-2.5 1.414-1.414L7 8.586l3.793-3.793 1.414 1.414z"
      clipRule="evenodd"
    />
  </svg>
))
export default SvgCheck
