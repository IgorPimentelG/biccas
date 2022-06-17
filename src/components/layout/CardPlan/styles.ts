import styled, { css } from "styled-components";

export const Benefit = styled.div`
	margin: 10px 0;
`;

export const Content = styled.div<any>`
	flex-direction: column;
	background-color: #F9FAFB;
	border-radius: 10px;
	padding: 20px;
`;

export const LabelPrice = styled.h1`
	margin: 10px 0;
	font-size: 2rem;

	> sup {
		font-size: 0.9rem;
		font-weight: normal;
		color: ${({theme}) => theme.colors.text.secondary};
	}
`;

export const Subtitle = styled.p<any>`
	color: ${({theme}) => theme.colors.text.secondary};
	font-size: 0.9rem;
	margin: 10px;
	width: 60%;
	text-align: center;
`;

export const Label = styled.p`
	font-weight: bold;
	font-size: 0.9rem;
`;

export const Button = styled.button<any>`
	padding: 15px;
	box-shadow: 1px 1px 10px #D8D8D8;
	border-radius: 15px;
	margin-top: 20px;
	background-color: #FFF;
`;

export const LabelButton = styled.span`
	color: ${({theme}) => theme.colors.main.primary};
	font-weight: bold;
`;

export const Container = styled.div<any>`
	border-radius: 15px;
	padding: 20px 0;
	margin: 0 20px;
	align-items: center;
	flex-direction: column;
	box-shadow: 1px 1px 10px #D8D8D8;
	width: 50%;

	${({theme, isHighlighted}) => isHighlighted && css`
		background-color: ${theme.colors.main.primary};
		transform: scale(1.1);

		${Button} {
			background-color: ${theme.colors.main.primary};
		}

		${LabelButton}, ${Subtitle}, > h1  {
			color: #FFF;
		}

		${LabelPrice} {
			> sup {
				color: #FFF;
			}
		}
	`}
`;

export const ContainerPromo = styled.div`
	padding: 10px 20px;
	border-radius: 10px;
	margin-bottom: 20px;
	background-color: ${({theme}) => theme.colors.main.secondary};
`;

export const LabelPromo = styled.p`
	color: #fff;
	font-size: 0.8rem;
`;
