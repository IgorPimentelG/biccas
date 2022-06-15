import styled from "styled-components";

export const Container = styled.header`
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	height: min-content;
`;

export const Nav = styled.nav`
	display: flex;
	align-items: center;
`;

export const Menu = styled.div`
	margin-right: 40px;
	align-items: center;
`;

export const ContainerOptions = styled.div`
	align-items: center;
`;

export const Logo = styled.h1`
	font-size: 2.5rem;
	color: ${({theme}) => theme.colors.main.primary};
`;

export const Link = styled.a`
	margin: 0 10px;
	color: ${({theme}) => theme.colors.text.secondary};

	&:hover {
		color: ${({theme}) => theme.colors.text.primary};
	}
`;

