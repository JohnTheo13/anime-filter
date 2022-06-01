/**
 * @jest-environment jsdom
 */
import ListItem from "./list-item";
import { render } from "@testing-library/react";

describe("<ListItem/>", () => {
  it("Should highlight 1 word given One Piece", () => {
    const { container } = render(
      <ListItem match="one" title="One Piece" onClick={() => {}} />
    );
    expect(container.getElementsByTagName("strong")).toHaveLength(1);
  });
  it("Should highlight 2 words given regex One piece one", () => {
    const { container } = render(
      <ListItem match="one" title="One Piece one" onClick={() => {}} />
    );
    expect(container.getElementsByTagName("strong")).toHaveLength(2);
  });
});
