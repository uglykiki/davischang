import React from "react";
import { useOverrides, Override, Menu, Section } from "@quarkly/components";
import { Text } from "@quarkly/widgets";
const defaultProps = {
	"quarkly-title": "Header"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"margin": "0px 0 24px 0",
			"text-align": "center",
			"font": "normal 300 42px/1.2 --fontFamily-googleMulish",
			"md-font": "--headline3",
			"children": "DAVIS CHANG"
		}
	},
	"menu": {
		"kind": "Menu",
		"props": {
			"display": "flex",
			"justify-content": "center",
			"font": "--base",
			"font-weight": "700",
			"md-flex-direction": "column",
			"md-align-items": "center"
		}
	},
	"menuOverride": {
		"kind": "Override",
		"props": {
			"slot": "link",
			"text-decoration": "none",
			"color": "#202020",
			"padding": "6px 12px",
			"active-color": "#000000",
			"active-font": "800 16px/24px Mulish, sans-serif",
			"hover-color": "#4f8a8b"
		}
	},
	"menuOverride1": {
		"kind": "Override",
		"props": {
			"slot": "link-active",
			"color": "--dark",
			"font": "800 16px/24px Mulish, sans-serif"
		}
	},
	"menuOverride2": {
		"kind": "Override",
		"props": {
			"slot": "item",
			"padding": "6px"
		}
	}
};

const Nav = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Text {...override("text")} />
		<Menu {...override("menu")}>
			<Override {...override("menuOverride")} />
			<Override {...override("menuOverride1")} />
			<Override {...override("menuOverride2")} />
		</Menu>
		{children}
	</Section>;
};

Object.assign(Nav, { ...Section,
	defaultProps,
	overrides
});
export default Nav;