import { generateMedia } from "styled-media-query";

// set here your custom media queries
const customMedia = generateMedia({
	desktop: "78em",
	tablet: "60em",
	mobile: "400px"
})

export default customMedia;

// const Box = styled.div`
//   background: black;

//   ${customMedia.lessThan("mobile")`
//     /* screen width is less than 768px (mobile) */
//     background: red;
//   `}

//   ${customMedia.between("mobile", "desktop")`
//     /* screen width is between 768px (mobile) and 1170px (desktop) */
//     background: green;
//   `}

//   ${customMedia.greaterThan("desktop")`
//     /* screen width is greater than 1170px (desktop) */
//     background: blue;
//   `}
// `;
// How to use media - Example with custom media


