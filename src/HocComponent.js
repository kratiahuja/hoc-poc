import classnames from 'classnames';

function HocComponent(Component, data) {
  console.log(data);
  // instead of the below, you will need to call getHueStyles on the data object
  const hue_class_name = data.class_name;
  return function WrappedComponent(props) {
    const mergedNames = classnames(hue_class_name, props.className);
    if (props.render) {
      return (
        <Component {...props}>{props.render(mergedNames)}</Component>
      )
    } else {
      return (<Component {...props}>{props.children}</Component>);
    }

  }
}

export default HocComponent;