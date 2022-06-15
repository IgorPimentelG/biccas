import { Container, Field } from "./styles";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useTheme } from "styled-components";

const InputOpacity: React.FC<{
	attributes: object;
}> = ({ attributes }) => {

	const theme = useTheme();

	return(
		<Container>
			<Field {...attributes}/>
			<BsFillArrowRightCircleFill
				fill={theme.colors.main.primary}
				size={30}
			/>
		</Container>
	);
};

export default InputOpacity;
