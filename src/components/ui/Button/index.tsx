import { Container, Label } from "./styles";

const Button: React.FC<{
	label: string;
	square?: boolean;
	onClick: () => void;
}> = ({ label, square, onClick }) => {
	return(
		<Container isSquare={square} onClick={onClick}>
			<Label>{label}</Label>
		</Container>
	);
};

export default Button;
