/* eslint-disable @typescript-eslint/no-empty-function */
import { Button, Input } from "@components/ui";
import { Container, Icon, Label, Title, Link, ContainerLink } from "./styles";

const Form = () => {
	return(
		<Container>
			<Icon src={require("../../../assets/icons/coin.png")}/>
			<Title>Get Started</Title>

			<Input
				label="Email"
				attributes={{
					placeholder: "Enter your email"
				}}
			/>

			<Input
				label="Message"
				attributes={{
					placeholder: "What are you say ?"
				}}
			/>

			<Button
				square
				label="Request Demo"
				onClick={() => {}}
			/>

			<ContainerLink>
				<Label>or</Label>
				<Link>Start Free Trial</Link>
			</ContainerLink>
		</Container>
	);
};

export default Form;
