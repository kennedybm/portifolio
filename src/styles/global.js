import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font-family: Nunito;
	vertical-align: baseline;
}
:root{
	--black: #000;
	--white: #fefff9;
	--primary: #121212;
	--second: #392c41;
	--decor: #00eb58;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
button{
	cursor: pointer;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
h1 h2 h3 p span{
	font-family: 'Poppins', sans-serif;
}
html{
	scroll-behavior: smooth;
	
}
body{
	&::-webkit-scrollbar {
    width: 15px;
	background-color: var(--primary);
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--second);
    border-radius: 3px;
  }
}
`;

export default GlobalStyle;
