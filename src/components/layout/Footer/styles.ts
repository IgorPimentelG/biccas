import styled from "styled-components";

export const Container = styled.footer`
	display: flex;
	flex-direction: column;
	padding: 50px;
	bottom: 0;
	right: 0;
	left: 0;
	background-color: ${({theme}) => theme.colors.background.primary};
`;

export const Content = styled.div`
	justify-content: space-around;
`;

export const ContainerContact = styled.div`
	flex-direction: column;
`;

export const ContainerInfo = styled.div`
	flex-direction: column;
`;

export const Title = styled.h3`
	color: #fff;
	font-size: 2rem;
	letter-spacing: 3px;
	margin-bottom: 20px;
`;

export const Label = styled.p`
	color: ${({theme}) => theme.colors.text.secondary};
	font-size: 0.8rem;
	line-height: 20px;
`;

export const Icon = styled.img`
	object-fit: contain;
	width: 40px;
	height: 40px;
	margin: 30px 0;
`;

export const ContainerProfiles = styled.div`
	margin-top: 40px;
`;

export const Image = styled.img`
	object-fit: contain;
	width: 50px;
	height: 50px;
	margin-right: 10px;
`;

export const Logo = styled.h3`
	font-size: 2rem;
	margin-bottom: 20px;
	color: ${({theme}) => theme.colors.main.primary};
`;

export const TitleLink = styled.h5`
	color: #fff;
	margin-bottom: 20px;
`;

export const ContainerOptions = styled.div`
	flex-direction: column;
	margin: 0 30px;
`;

export const Link = styled.a`
	margin: 10px 0;
	color: ${({theme}) => theme.colors.text.secondary};

	&:hover {
		color: #FFF;
	}
`;

export const Space = styled.span`
	margin: 50px;
`;
