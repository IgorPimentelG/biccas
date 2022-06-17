/* eslint-disable @typescript-eslint/no-empty-function */
import { CardCompanies, CardPlan, Footer, Header } from "@components/layout";
import { benefinits, plans } from "@data";
import { Button, Selector } from "@components/ui";
import { AiOutlinePlayCircle, AiFillCheckCircle } from "react-icons/ai";
import { useTheme } from "styled-components";
import {
	ContainerBenifits,
	ContainerCompanies,
	ContainerInfoHome,
	ContainerOptionsHome,
	ContainerPlans,
	ContentHome,
	Section,
	ItemBenefit,
	Label,
	Line,
	MediumImage,
	RootContainer,
	Subtitle,
	Title,
	ListPlans
} from "./styles";

const Home = () => {

	const theme = useTheme();

	return(
		<RootContainer>

			<Section>
				<Header/>

				<ContentHome>

					<ContainerInfoHome>
						<Title>
							We{"'"}re here to<br/>
							Increase your<br/>
							Productivity
						</Title>

						<Line src={require("../../assets/icons/bow.png")}/>

						<Label>
							Let{"'"}s make your work more organize and easily using<br/>
							the Taskio Dashboard with many of the latest<br/>
							featuresin managing work every day.
						</Label>

						<ContainerOptionsHome>
							<div>
								<Button
									label="Try free trial"
									onClick={() => {}}
								/>
							</div>

							<AiOutlinePlayCircle size={30} style={{ marginRight: 10, marginLeft: 40 }}/>
							<Label>View Demo</Label>

						</ContainerOptionsHome>
					</ContainerInfoHome>

					<MediumImage src={require("../../assets/images/person_with_credit_card.png")}/>
				</ContentHome>

				<ContainerCompanies>
					<Subtitle>More than 25,000 teams use Collabs</Subtitle>
					<CardCompanies/>
				</ContainerCompanies>
			</Section>

			<Section>
				<ContentHome>
					<ContainerInfoHome>
						<Subtitle>What Benifit Will<br/>You Get</Subtitle>

						<ContainerBenifits>
							{benefinits.map((item, index) => (
								<ItemBenefit key={index}>
									<AiFillCheckCircle
										fill={theme.colors.main.primary}
										style={{ marginRight: 10 }}
										size={25}/>
									<Label>{item}</Label>
								</ItemBenefit>
							))}
						</ContainerBenifits>
					</ContainerInfoHome>

					<MediumImage src={require("../../assets/images/computer.png")}/>
				</ContentHome>

				<ContainerPlans>
					<Subtitle textAlign="center" margin="20">
						Choose Plan<br/>That{"'"}s Right For You
					</Subtitle>

					<Label textColor={theme.colors.text.secondary}>
						Choose plan that works best for you, feel free to contact us
					</Label>

					<Selector
						option1="Bil Monthly"
						option2="Bil Yearly"
					/>

					<ListPlans>
						{plans.map((item, index) => (
							<CardPlan
								key={index}
								plan={{
									...item,
									labelRedirect: item.label_redirect,
									highlighted: index === 1
								}}
							/>
						))}
					</ListPlans>
				</ContainerPlans>


			</Section>

			<Footer/>

		</RootContainer>
	);
};

export default Home;
