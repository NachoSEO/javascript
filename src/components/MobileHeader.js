import PropTypes from "prop-types";
import React from "react";
import { MobileHeaderButton } from "../components/Button";
import styled from "styled-components";
import logout from "../icons/logout.svg";
import angleLeft from "../icons/angle-left.svg";
import questionCircle from "../icons/question-circle.svg";
import colors from "yoast-components/style-guide/colors.json";
import { Logo } from "../components/Logo";
import { injectIntl, defineMessages, FormattedMessage } from "react-intl";
import defaults from "../config/defaults.json";

const messages = defineMessages( {
	signOut: {
		id: "mobileheader.signout",
		defaultMessage: "Sign out",
	},
	needHelp: {
		id: "mobileheader.needhelp",
		defaultMessage: "Need help?",
	},
} );

const FixedMobileHeader = styled.div`
	display: inline-block;
	position: fixed;
	z-index: 1;
	width: 100%;
	height: 48px;
	top: 0;
	background-color: ${ colors.$color_pink_dark };
`;

export const BackHeaderButton = styled( MobileHeaderButton )`
	top: 0;
	left: 0;
	margin-left:200px;

	@media screen and ( max-width: ${ defaults.css.breakpoint.mobile }px ) {
		width: 56px;
		padding-right: 0px;
	}
`;

export const LogoutHeaderButton = styled( MobileHeaderButton )`
	top: 0;
	left: 0;
	margin-left:400px;

	@media screen and ( max-width: ${ defaults.css.breakpoint.mobile }px ) {
		width: 56px;
		padding-right: 0px;
	}
`;

export const BeaconHeaderButton = styled( MobileHeaderButton )`
	top: 0;
	right: 0;

	@media screen and ( max-width: ${ defaults.css.breakpoint.mobile }px ) {
		width: 36px;
	}
`;

/**
 * Gets the actions related to the clicked button
 *
 * @param {Object} props Component props.
 * @returns {func} The function of the action.
 */
function getAction( props ) {
	if( props.detailPage ) {
		return props.onBackClick;
	}
	return props.onLogoutClick;
}

/**
 * Gets the icon.
 *
 * @param {Object} props Its props.
 * @returns {*} The icon to be rendered.
 */
function getIcon( props ) {
	if( props.detailPage ) {
		return angleLeft;
	}
	return logout;
}

/**
 * Renders the FixedMobileHeader component.
 *
 * @param {Object} props Component props.
 * @returns {ReactElement} A react component.
 */
function MobileHeader( props ) {
	console.log( "mobileheader:", props );
	return (
		<FixedMobileHeader role="banner">
			<MobileHeaderButton type="button" onClick={ getAction( props ) } iconSource={ getIcon( props ) } iconSize="24px">
				setMessage
			</MobileHeaderButton>

			<BackHeaderButton type="button" onClick={ props.onBackClick } iconSource={ angleLeft } iconSize="24px">
				Back
			</BackHeaderButton>
			<LogoutHeaderButton type="button" onClick={ props.onLogoutClick } iconSource={ logout } iconSize="24px">
				<FormattedMessage
					id={ messages.signOut.id }
					defaultMessage={ messages.signOut.defaultMessage }
				/>
			</LogoutHeaderButton>
			<Logo context="header" size="88px"/>
			<BeaconHeaderButton type="button" onClick={ props.onBeaconClick } iconSource={ questionCircle } iconSize="24px">
				<FormattedMessage
					id={ messages.needHelp.id }
					defaultMessage={ messages.needHelp.defaultMessage }
				/>
			</BeaconHeaderButton>
		</FixedMobileHeader>
	);
}

export default injectIntl( MobileHeader );

MobileHeader.propTypes = {
	onLogoutClick: PropTypes.func.isRequired,
	onBeaconClick: PropTypes.func.isRequired,
	onBackClick: PropTypes.func,
};
