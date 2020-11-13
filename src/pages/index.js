import React from "react";
import theme from "theme";
import { Theme, Link, Text } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Section, Override, SocialMedia } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.Nav />
		<Section background="#010101 url(https://uploads.quarkly.io/5faecbd479530b001fd268a2/images/the-nation22.png?v=2020-11-13T18:23:01.700Z) center/Cover" padding="96px 0 96px 0" quarkly-title="TheNation">
			<Text color="#ffffff" font="300 64PX sans-serif" text-align="center" letter-spacing="10px">
				THE NATION
			</Text>
		</Section>
		<Section quarkly-title="Gap" padding="4px 0 4px 0" />
		<Section background="#010101 url(https://uploads.quarkly.io/5faecbd479530b001fd268a2/images/binary6.jpeg?v=2020-11-13T18:38:38.118Z) center/Cover" padding="96px 0 96px 0" quarkly-title="Binary">
			<Text font="300 64PX sans-serif" color="#ffffff" text-align="center" letter-spacing="10px">
				BINARY
			</Text>
		</Section>
		<Section padding="60px 0" sm-padding="40px 0" quarkly-title="Footer">
			<SocialMedia
				facebook="https://www.facebook.com/quarklyapp/"
				twitter="https://twitter.com/quarklyapp"
				youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw"
				vkontakte="https://vk.com/quarklyapp"
				telegram="https://t.me/joinchat/DqSYDhS0R9nMRvOtFbIxrQ"
			>
				<Override
					slot="link"
					border-radius="50%"
					color="--dark"
					margin="0 8px"
					hover-background="--color-greyD1"
					background="#ffffff"
				/>
			</SocialMedia>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});