import {css} from "@emotion/css";


export const form = css`
   background: white;
  color: var(--color2);
  font-family: "Courier New", Courier, monospace;
  margin: 0 50px 25px;
  padding: 10px 25px 25px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 5px 15px gray;
  transform: scale(1);
  transition: transform 0.4s;

  &:hover {
    transform: scale(1.2);
  }
`;

export const button = css`
  background: var(--color2);
  border: 1px solid transparent;
  border-radius: 5px;
  color: var(--bg);
  padding: 5px 10px;
  margin: 0 5px;
  transition: border 0.15s;

  &:hover {
    border: 1px solid var(--color2);
    cursor: pointer;
  }

  &[disabled] {
    background: var(--bg);
    border: 1px solid var(--color2);
    color: var(--color2);
  }
`;