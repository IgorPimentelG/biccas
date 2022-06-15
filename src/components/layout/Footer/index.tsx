import Form from "../Form";
import { InputOpacity } from "@components/ui";
import { IoPlayCircleOutline } from "react-icons/io5";
import {
	Container,
	ContainerInfo,
	ContainerProfiles,
	Content,
	Title,
	Label,
	Icon,
	Image,
	ContainerContact,
	Logo,
	ContainerOptions,
	TitleLink,
	Link,
	Space,
} from "./styles";

const Footer = () => {
	return(
		<Container>
			<Content>

				<ContainerInfo>
					<Title>
						People are Saying<br/>
						About DoWhith
					</Title>
					<Label>
						Everything you need to accept to payment and grow<br/>
						your money of manage anywhere on planet
					</Label>

					<Icon src={require("../../../assets/icons/quotation_marks.png")}/>

					<Label>
					I am very helped by this E-wallet application , my<br/>
					days are very easy to use this application and its very<br/>
					helpful in my life , even I can pay a short time 😍<br/><br/><br/>

					_Aria Zinanrio
					</Label>

					<ContainerProfiles>
						<Image src={require("../../../assets/images/user_01.png")}/>
						<Image src={require("../../../assets/images/user_02.png")}/>
						<Image src={require("../../../assets/images/user_03.png")}/>
						<Image src={require("../../../assets/images/user_04.png")}/>
						<IoPlayCircleOutline color="white" size={50}/>
					</ContainerProfiles>
				</ContainerInfo>

				<Form/>
			</Content>

			<Space/>

			<Content>
				<ContainerContact>
					<Logo>Biccas</Logo>
					<Label>Get started noew try our product</Label>
					<InputOpacity attributes={{ placeholder: "Enter your email here" }}/>
				</ContainerContact>

				<div>
					<ContainerOptions>
						<TitleLink>Support</TitleLink>
						<Link>Help centre</Link>
						<Link>Account information</Link>
						<Link>About</Link>
						<Link>Contact us</Link>
					</ContainerOptions>

					<ContainerOptions>
						<TitleLink>Help and Solution</TitleLink>
						<Link>Talk to support</Link>
						<Link>Support docs</Link>
						<Link>System status</Link>
						<Link>Covid responde</Link>
					</ContainerOptions>

					<ContainerOptions>
						<TitleLink>Product</TitleLink>
						<Link>Update</Link>
						<Link>Security</Link>
						<Link>Beta test</Link>
						<Link>Pricing product</Link>
					</ContainerOptions>
				</div>
			</Content>
		</Container>
	);
};

export default Footer;
