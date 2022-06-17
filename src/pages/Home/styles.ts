import styled from "styled-components";

export const RootContainer = styled.main`
	display: flex;
	flex-direction: column;
	flex: 1;
	height: 100vh;
`;

export const Section = styled.section`
	width: 100%;
	display: flex;
	flex-direction: column;
	background-image: linear-gradient(
		to right bottom, rgba(84,189,149,0.2), #fff, #fff, rgba(84,189,149,0.2)
	);
`;

export const ItemBenefit = styled.div`
	margin: 10px 0;
	align-items: center;
`;

export const ContentHome = styled.div`
	margin-top: 50px;
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

export const Label = styled.p<any>`
	font-size: 0.8rem;
	color: ${({textColor}) => textColor};
`;

export const ContainerCompanies = styled.div`
	flex-direction: column;
	margin: 50px 0;
	width: 100%;
	align-items: center;
`;

export const Subtitle = styled.h2<any>`
	font-size: 1.8rem;
	text-align: ${({textAlign}) => textAlign};
	margin: ${({margin}) => margin + "px"};
`;

export const ContainerBenifits = styled.div`
	margin: 30px 0;
	flex-direction: column;
`;

export const ContainerPlans = styled.div`
	width: 100%;
	margin: 40px 0;
	flex-direction: column;
	align-items: center;
`;

export const ListPlans = styled.div`
	margin: 40px 0;
	justify-content: space-around;
`;
