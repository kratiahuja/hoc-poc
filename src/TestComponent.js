function TestComponent(props) {
  console.log(props);
  return (
    <p {...props}>
      Hello World! {props.children}
    </p>
  );
}

export default TestComponent;