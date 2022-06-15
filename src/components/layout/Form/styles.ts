import styled from "styled-components";

export const Container = styled.div`
	padding: 30px 50px 40px 50px;
	width: 30%;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${({theme}) => theme.colors.background.secondary};
	border-radius: 10px;
	box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
`;

export const ContainerLink = styled.div`
	width: 100%;
	justify-content: flex-end;
	align-items: center;
	margin-top: 10px;
`;

export const Title = styled.h5`
	font-size: 1.5rem;
	color: #fff;
`;

export const Icon = styled.img`
	object-fit: contain;
	width: 50px;
	margin: 10px;
`;

export const Link = styled.a`
	color: #FFF;
	font-size: 0.9rem;
`;

export const Label = styled.p`
	color: ${({theme}) => theme.colors.text.secondary};
	font-size: 0.8rem;
	margin-right: 3px;
`;


