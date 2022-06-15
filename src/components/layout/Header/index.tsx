/* eslint-disable @typescript-eslint/no-empty-function */
import { Button } from "@components/ui";
import { Container, ContainerOptions, Link, Logo, Menu, Nav } from "./styles";

const Header = () => {
	return(
		<Container>

			<Logo>Biccas</Logo>

			<Nav>
				<Menu>
					<Link>Home</Link>
					<Link>Product</Link>
					<Link>FAQ</Link>
					<Link>Blog</Link>
					<Link>About Us</Link>
				</Menu>

				<ContainerOptions>
					<Link>Login</Link>
					<Button
						square
						label="Sign Up"
						onClick={() => {}}
					/>
				</ContainerOptions>
			</Nav>
		</Container>
	);
};

export default Header;
