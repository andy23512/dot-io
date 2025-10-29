import React, {useState} from "../../snowpack/pkg/react.js";
import {usePopper} from "../../snowpack/pkg/react-popper.js";
import styled from "../../snowpack/pkg/styled-components.js";
export default function usePopover(text) {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const [isShowing, setIsShowing] = useState(false);
  const parentElementProps = {
    onMouseOver: () => setIsShowing(true),
    onMouseOut: () => setIsShowing(false),
    ref: setReferenceElement
  };
  const {styles, attributes} = usePopper(referenceElement, popperElement, {
    modifiers: [
      {name: "arrow", options: {element: arrowElement, padding: 6}},
      {
        name: "offset",
        options: {
          offset: [0, 10]
        }
      }
    ]
  });
  const tt = text.split("\n");
  function re() {
    const tf = [];
    for (let i = 0; i < tt.length; i++) {
      tf.push(tt[i]);
      tf.push(/* @__PURE__ */ React.createElement("br", null));
    }
    return tf;
  }
  return {
    parentProps: parentElementProps,
    Popper: /* @__PURE__ */ React.createElement(PopperContainer, {
      ref: setPopperElement,
      style: styles.popper,
      isOpen: isShowing || false,
      ...attributes.popper
    }, re(), /* @__PURE__ */ React.createElement(Arrow, {
      ref: setArrowElement,
      style: styles.arrow
    }))
  };
}
const Arrow = styled.div.attrs({
  className: `arrow z-10 absolute -top-1`
})``;
const PopperContainer = styled.div.attrs({
  className: `z-10 relative text-gray-800 pointer-events-none font-normal text-base normal-case`
})`
  ${(props) => !props.isOpen ? "opacity: 0;" : "opacity: 100;"}
  transition: opacity 0.1s;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background-color: white;
  padding: 10px 20px;
  text-align: center;
  max-width: 400px;

  .arrow {
    position: absolute;
    width: 10px;
    height: 10px;

    &:after {
      content: ' ';
      position: absolute;
      top: 0px; // we account for the PopperContainer padding
      left: 0;
      transform: rotate(45deg);
      width: 10px;
      height: 10px;
      background-color: white;
      box-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
    }
  }

  &[data-popper-placement^='top'] > .arrow {
    bottom: -4px;
    top: unset;
    :after {
      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
    }
  }
`;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvZG90LWlvL2RvdC1pby9zcmMvaG9va3MvdXNlUG9wb3Zlci50c3giXSwKICAibWFwcGluZ3MiOiAiQUFBQTtBQUNBO0FBQ0E7QUFFQSxtQ0FBbUMsTUFJakM7QUFDQSxRQUFNLENBQUMsa0JBQWtCLHVCQUF1QixTQUFTO0FBQ3pELFFBQU0sQ0FBQyxlQUFlLG9CQUFvQixTQUFTO0FBQ25ELFFBQU0sQ0FBQyxjQUFjLG1CQUFtQixTQUFTO0FBQ2pELFFBQU0sQ0FBQyxXQUFXLGdCQUFnQixTQUFTO0FBQzNDLFFBQU0scUJBQXFCO0FBQUEsSUFDekIsYUFBYSxNQUFNLGFBQWE7QUFBQSxJQUNoQyxZQUFZLE1BQU0sYUFBYTtBQUFBLElBQy9CLEtBQUs7QUFBQTtBQUVQLFFBQU0sQ0FBRSxRQUFRLGNBQWUsVUFBVSxrQkFBa0IsZUFBZTtBQUFBLElBQ3hFLFdBQVc7QUFBQSxNQUNULENBQUUsTUFBTSxTQUFTLFNBQVMsQ0FBRSxTQUFTLGNBQWMsU0FBUztBQUFBLE1BQzVEO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixTQUFTO0FBQUEsVUFDUCxRQUFRLENBQUMsR0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS3BCLFFBQU0sS0FBSyxLQUFLLE1BQU07QUFDdEIsZ0JBQWM7QUFDWixVQUFNLEtBQUs7QUFDWCxhQUFTLElBQUksR0FBRyxJQUFJLEdBQUcsUUFBUSxLQUFLO0FBQ2xDLFNBQUcsS0FBSyxHQUFHO0FBQ1gsU0FBRyxLQUFLLG9DQUFDLE1BQUQ7QUFBQTtBQUVWLFdBQU87QUFBQTtBQUdULFNBQU87QUFBQSxJQUNMLGFBQWE7QUFBQSxJQUNiLFFBQ0Usb0NBQUMsaUJBQUQ7QUFBQSxNQUVFLEtBQUs7QUFBQSxNQUNMLE9BQU8sT0FBTztBQUFBLE1BQ2QsUUFBUSxhQUFhO0FBQUEsU0FDakIsV0FBVztBQUFBLE9BRWQsTUFFRCxvQ0FBQyxPQUFEO0FBQUEsTUFBTyxLQUFLO0FBQUEsTUFBd0IsT0FBTyxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBTTFELE1BQU0sUUFBUSxPQUFPLElBQUksTUFBTTtBQUFBLEVBQzdCLFdBQVc7QUFBQTtBQU9iLE1BQU0sa0JBQWtCLE9BQU8sSUFBSSxNQUFhO0FBQUEsRUFDOUMsV0FBVztBQUFBO0FBQUEsSUFFVCxDQUFDLFVBQVcsQ0FBQyxNQUFNLFNBQVMsZ0JBQWdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
