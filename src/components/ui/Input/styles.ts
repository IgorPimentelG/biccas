import styled from "styled-components";

export const Container = styled.div`
	flex-direction: column;
	width: 100%;
`;

export const Field = styled.input`
	padding: 15px;
	border: none;
	background-color: #FFF;
	border-radius: 10px;
	margin-bottom: 15px;
	color: ${({theme}) => theme.colors.text.secondary};
`;

export const Label = styled.label`
	color: #fff;
	margin: 10px 0 10px 0;
`;
