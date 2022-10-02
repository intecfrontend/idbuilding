import styled from "styled-components";

function Orangebutton({ text }) {
  const OrangeBtn = styled.div`
    background:white;
    font-size: 22px!important;
  text-align: center;
  letter-spacing: 1px;
    border: orange 1px solid;
    width: 100px;
    height: 40px;
  padding-top: 3px;
    font-weight: 800;
    color: orange;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 1px 1px 2px 1px;
    font-family: "ShadowsIntoLight";
    transition: all 0.5s;
    &:hover
  {
    box-shadow: rgba(100, 100, 111, 0.2) 1px 1px 2px 3px;
    cursor: pointer;
  }
  `;
  return (
    <div>
      <OrangeBtn>{text}</OrangeBtn>
    </div>
  );
}

export default Orangebutton;
