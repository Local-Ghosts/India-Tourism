import './index.css'

const Typography = (props) => {
	const style = {
		"padding-top" : props.padding
	}
	return (
		<h1 style={style}>{props.description}</h1>
	);
}	

export default Typography;