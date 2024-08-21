import React from "react";
import "./Flex.css";
export default function Flex(props) {
  return (
    <div
    id={props.key}
    onMouseOver={props.onMouseOver}
    onMouseLeave={props.onMouseLeave}
      className={`${props.className}`}
      style={{
        width: `${props.width}`,
        height: `${props.height}`,
        minHeight: `${props.minHeight}`,
        display: `${props.display}`,
        justifyContent: `${props.justifyContent}`,
        position: `${props.position}`,
        alignItems: `${props.alignItems}`,
        marginLeft: `${props.marginLeft}`,
        flexDirection: `${props.flexDirection}`,
        flexWrap: `${props.flexWrap}`,
        color: `${props.color}`,
        opacity: `${props.opacity}`,
        textAlign: `${props.textAlign}`,
        alignItems: `${props.alignItems}`,
        gap: `${props.gap}`,
        padding: `${props.padding}`,
        margin: `${props.margin}`,
        marginTop: `${props.marginTop}`,
        marginBottom: `${props.marginBottom}`,
        paddingBottom: `${props.paddingBottom}`,
        paddingLeft: `${props.paddingLeft}`,
        background: `${props.background}`,
        boxShadow: `${props.boxShadow}`,
        transform: `${props.transform}`,
        backgroundColor: `${props.backgroundColor}`,
        marginRight: `${props.marginRight}`,
      }}
    >
      {props.children}
    </div>
  );
}
