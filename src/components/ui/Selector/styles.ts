import styled from "styled-components";

export const Container = styled.div`
	border-radius: 10px;
	padding: 5px;
	margin: 20px;
	box-shadow: 1px 1px 10px #D8D8D8;
`;

export const Button = styled.button<any>`
	padding: 15px;
	border-radius: 10px;
	background-color: ${({theme, isSelected}) => isSelected ? theme.colors.main.primary : "#FFF"};
`;

export const Label = styled.span<any>`
	text-transform: capitalize;
	${({isSelected}) => isSelected && `
		color: #FFF;
	`};
`;
