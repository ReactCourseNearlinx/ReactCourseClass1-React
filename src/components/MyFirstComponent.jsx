const MyFirstComponent = (props) => {
  
  const handleChange = () => alert('Told ya');
  
  return <>
    <h1>Hello {props.name}</h1>
    <button onClick={handleChange}>Don't click me</button>
  </>;
}

export default MyFirstComponent;