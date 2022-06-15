import { Container, Field, Label } from "./styles";

const Input: React.FC<{
	label: string;
	attributes: object;
}> = ({ label, attributes }) => {
	return(
		<Container>
			<Label>{label}</Label>
			<Field {...attributes}/>
		</Container>
	);
};

export default Input;
