/* eslint-disable @typescript-eslint/no-empty-function */
import { CardCompanies, Footer, Header } from "@components/layout";
import { Button } from "@components/ui";
import { AiOutlinePlayCircle } from "react-icons/ai";
import {
	ContainerCompanies,
	ContainerInfoHome,
	ContainerOptionsHome,
	ContentHome,
	HomeSection,
	Label,
	Line,
	MediumImage,
	RootContainer,
	Subtitle,
	Title
} from "./styles";

const Home = () => {
	return(
		<RootContainer>

			<HomeSection>
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

			</HomeSection>

			<Footer/>

		</RootContainer>
	);
};

export default Home;
