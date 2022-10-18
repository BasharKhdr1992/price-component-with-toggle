import styled from "styled-components";

const StyledPriceComponent = styled.div`
  display: flex;
  width: 70%;
  justify-content: center;
  align-items: center;
  height: 70vh;

  .price-card {
    text-align: center;
    width: 33%;
    border-radius: 0.65rem;
    background-color: white;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  }

  .basic,
  .master {
    padding: 2rem 1.5rem;
  }

  .professional {
    padding: 3.4rem 1.5rem 2rem 1.5rem;
  }

  .basic .card-title,
  .master .card-title {
    color: hsl(234, 14%, 74%);
    text-transform: capitalize;
  }

  .professional .card-title {
    color: hsl(240, 78%, 98%);
  }

  .professional {
    height: 100%;
  }

  .basic,
  .master {
    height: 90%;
  }

  .price {
    margin-top: 0.5rem;
    font-size: 3rem;
  }

  .basic .price,
  .master .price {
    color: hsl(232, 13%, 33%);
  }

  .features {
    margin-top: 2.5rem;
  }

  .feature-line {
    padding: 1rem;
    text-align: center;
  }

  .basic .feature-line,
  .master .feature-line {
    color: hsl(233, 13%, 49%);
    border-top: 0.04rem solid hsl(234, 14%, 74%);
  }

  .basic .feature-line:last-child,
  .master .feature-line:last-child {
    border-bottom: 0.04rem solid hsl(234, 14%, 74%);
  }

  .professional .feature-line:last-child {
    border-bottom: 0.04rem solid hsl(240, 78%, 98%);
  }

  .professional .feature-line {
    color: hsl(240, 78%, 98%);
    border-top: 0.04rem solid hsl(240, 78%, 98%);
  }

  .professional .price {
    color: hsl(240, 78%, 98%);
  }

  .price-card.professional {
    background-image: linear-gradient(hsl(236, 72%, 79%), hsl(237, 63%, 64%));
  }

  button {
    width: 100%;
    text-align: center;
    padding: 0.75rem 0rem;
    border-radius: 0.3rem;
    margin-top: 2rem;
    cursor: pointer;
    border: none;
  }

  .btn-text {
    text-transform: uppercase;
    font-weight: 700;
  }

  .basic button,
  .master button {
    background-image: linear-gradient(hsl(236, 72%, 79%), hsl(237, 63%, 64%));

    &:hover {
      background-image: linear-gradient(white, white),
        linear-gradient(hsl(236, 72%, 79%), hsl(237, 63%, 64%));
      border: transparent;
      border-width: 0.1rem;
      border-style: solid;
      background-origin: border-box;
      background-repeat: no-repeat;
      background-clip: padding-box, border-box;

      &:hover .btn-text {
        background: linear-gradient(hsl(236, 72%, 79%), hsl(237, 63%, 64%));
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }

  .basic .btn-text,
  .master .btn-text {
    background: linear-gradient(white, white);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .professional button {
    background-color: white;

    &:hover {
      border: 0.1rem solid white;
      background-image: linear-gradient(hsl(236, 72%, 79%), hsl(237, 63%, 64%));
    }

    &:hover .btn-text {
      background: linear-gradient(white, white);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .professional .btn-text {
    background: linear-gradient(hsl(236, 72%, 79%), hsl(237, 63%, 64%));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
    width: 90%;
    height: auto;
    .price-card {
      width: 100%;
      margin-bottom: 1.5rem;
    }

    .feature-line {
      padding: 1.75rem;
    }

    button {
      padding: 1.5rem 0rem;
    }

    .master,
    basic,
    professional {
      height: max-content;
    }
  }
`;

export default StyledPriceComponent;
