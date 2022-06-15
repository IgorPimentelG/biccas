import styled from "styled-components";

export const RootContainer = styled.main`
	display: flex;
	flex-direction: column;
	flex: 1;
	height: 100vh;
`;

export const HomeSection = styled.section`
	width: 100%;
	display: flex;
	flex-direction: column;
	background-image: linear-gradient(
		to right bottom, rgba(84,189,149,0.2), #fff, #fff, rgba(84,189,149,0.2)
		);
`;

export const ContentHome = styled.div`
	margin-top: 50px;
	align-items: center;
	justify-content: space-around;
`;

export const ContainerOptionsHome = styled.div`
	margin-top: 40px;
	align-items: center;
`;

export const ContainerInfoHome = styled.div`
	flex-direction: column;
`;

export const Title = styled.h1`
	font-size: 4rem;
`;

export const MediumImage = styled.img`
	object-fit: contain;
	height: 450px;
`;

export const Line = styled.img`
	object-fit: contain;
	width: 80%;
	margin: 20px 0  40px 0;
`;

export const Label = styled.p`
	font-size: 0.8rem;
	color: #000;
`;

export const ContainerCompanies = styled.div`
	flex-direction: column;
	margin: 50px 0;
	width: 100%;
	align-items: center;
`;

export const Subtitle = styled.h3`
	font-size: 1.5rem;
`;
