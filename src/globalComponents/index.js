export default function(app) {
  const requireComponent = require.context('./comp', false, /\.vue$/);
  requireComponent.keys().forEach(item => {
    const comp = requireComponent(item).default;
    const name = comp.name ?? comp.__name; // vue3组合式写法，自定义组件内没有name
    app.component(name, comp);
  })
}