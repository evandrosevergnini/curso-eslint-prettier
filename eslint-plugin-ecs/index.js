module.exports = {
  rules: {
    'no-template-literals': {
      // eslint-disable-next-line func-names, object-shorthand
      create: function (context) {
        console.log('context', context)
        return {
          TemplateLiteral(node) {
            console.log('node', node)
            if (node.expressions.length === 0) {
              context.report(node, 'Do not use template literals')
            }
          },
        }
      },
    },
  },
}
