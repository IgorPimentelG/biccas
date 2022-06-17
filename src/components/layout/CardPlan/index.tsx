import { Plan } from "@shared/types/plan";
import { AiFillCheckCircle } from "react-icons/ai";
import { useTheme } from "styled-components";
import {
	Container,
	Subtitle,
	Content,
	Button,
	Benefit,
	Label,
	LabelButton,
	LabelPrice,
	ContainerPromo,
	LabelPromo
} from "./styles";

const CardPlan: React.FC<{ plan: Plan }> = ({ plan }) => {

	const theme = useTheme();

	return(
		<Container isHighlighted={plan.highlighted}>
			<h1>{plan.name}</h1>
			<Subtitle>
				{plan.description}
			</Subtitle>

			<LabelPrice><sup>$</sup>{plan.price}</LabelPrice>

			{ plan.promo && (
				<ContainerPromo>
					<LabelPromo>{plan.promo}</LabelPromo>
				</ContainerPromo>
			) }

			<Content>
				{plan.benefits.map((item: string, index: number) => (
					<Benefit key={index}>
						<AiFillCheckCircle
							fill={theme.colors.main.primary}
							style={{ marginRight: 10 }}
							size={25}/>
						<Label>{item}</Label>
					</Benefit>
				))}

				<Button>
					<LabelButton>
						{plan.labelRedirect}
					</LabelButton>
				</Button>
			</Content>
		</Container>
	);
};

export default CardPlan;
