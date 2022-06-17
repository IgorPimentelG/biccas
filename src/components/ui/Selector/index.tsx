import { useState } from "react";
import { Button, Container, Label } from "./styles";

const Selector: React.FC<{
	option1: string;
	option2: string;
}> = ({ option1, option2 }) => {

	const [selectedOption, setSelectedOption] = useState(0);

	function changeHandler() {
		setSelectedOption((currentState) => {
			if(currentState === 1) {
				return 0;
			}

			return 1;
		});
	}

	function isSelected(index: number) {
		return index === selectedOption;
	}

	return(
		<Container>
			<Button onClick={changeHandler} isSelected={isSelected(0)}>
				<Label isSelected={isSelected(0)}>
					{option1}
				</Label>
			</Button>

			<Button onClick={changeHandler} isSelected={isSelected(1)}>
				<Label isSelected={isSelected(1)}>
					{option2}
				</Label>
			</Button>
		</Container>
	);
};

export default Selector;
