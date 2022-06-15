import styled from "styled-components";

export const Container = styled.button<any>`
	padding: 10px;
	width: 100%;
	${({theme, isSquare}) => `
		background-color: ${theme.colors.main.primary};
		border-radius: ${isSquare ? "5px" : "50px"}
	`};
`;

export const Label = styled.span`
	color: #fff;
`;
