import styled from "styled-components";

export const RootContainer = styled.div`
	margin: 20px 0 50px 0;
	justify-content: space-around;
`;

export const Label = styled.h4`
	margin-left: 10px;
	font-size: 1.2rem;
	color: ${({theme}) => theme.colors.text.secondary};
`;

export const Icon = styled.img`
	width: 25px;
	height: 25px;
	object-fit: contain;
`;

export const Item = styled.div`
	align-items: center;
	margin: 0 20px;
`;
