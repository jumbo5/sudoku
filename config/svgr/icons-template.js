function template(
  { template },
  opts,
  { imports, interfaces, componentName, props, jsx, exports },
) {
  const plugins = ['jsx']
  if (opts.typescript) {
    plugins.push('typescript')
  }
  const typeScriptTpl = template.smart({ plugins })
  return typeScriptTpl.ast`${imports}

    ${interfaces}

    const ${componentName} = React.memo((${props}:React.SVGProps<SVGSVGElement>) => ${jsx})

    ${exports}
  `
}
module.exports = template
