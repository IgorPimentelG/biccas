import { Icon, Item, Label, RootContainer } from "./styles";

const CardCompanies = () => {
	return(
		<RootContainer>
			<Item>
				<Icon src={require("../../../assets/icons/unsplash.png")}/>
				<Label>Unsplash</Label>
			</Item>

			<Item>
				<Icon src={require("../../../assets/icons/notion.png")}/>
				<Label>Notion</Label>
			</Item>

			<Item>
				<Icon src={require("../../../assets/icons/intercom.png")}/>
				<Label>INTERCOM</Label>
			</Item>

			<Item>
				<Icon src={require("../../../assets/icons/descript.png")}/>
				<Label>descript</Label>
			</Item>

			<Item>
				<Icon src={require("../../../assets/icons/grammarly.png")}/>
				<Label>grammarly</Label>
			</Item>
		</RootContainer>
	);
};

export default CardCompanies;
