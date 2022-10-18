import styled from "styled-components";

const StyledToggle = styled.div`
  margin: 2.5rem 0rem;
  display: flex;
  align-items: center;

  .toggle-container {
    width: 4.5rem;
    background-image: linear-gradient(hsl(236, 72%, 79%), hsl(237, 63%, 64%));
    display: flex;
    align-items: center;
    height: 2.5rem;
    cursor: pointer;
    border-radius: 1.5rem;
    position: relative;

    &:hover {
      opacity: 0.5;
    }
  }

  .toggle {
    width: 2rem;
    border-radius: 50%;
    height: 2rem;
    background-color: white;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    position: absolute;
    left: 0.25rem;
    transition: left 0.4s ease-out;
  }

  .toggle.active {
    left: 2.25rem;
  }

  .toggle-text {
    color: hsl(234, 14%, 74%);
  }

  .toggle-text:first-child {
    margin-right: 1.2rem;
  }

  .toggle-text:last-child {
    margin-left: 1.2rem;
  }
`;

export default StyledToggle;
