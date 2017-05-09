import React from "react";
import colors from "yoast-components/style-guide/colors.json";
import styled from "styled-components";
import searchIcon from "../icons/search.svg";
import { defineMessages, injectIntl, intlShape } from "react-intl";

const messages = defineMessages( {
	searchLabel: {
		id: "search.label",
		defaultMessage: "Search",
	},
	description: {
		id: "search.description",
		defaultMessage: "The search results will be updated as you type.",
	},
} );

const SearchLabel = styled.label`
	background-image: url( ${ searchIcon } );
	background-size: 25px;
	background-position: left center;
	background-repeat: no-repeat;
	width: 40px;
	height: 50px;
	float: left;
`;

SearchLabel.propTypes = {
	className: React.PropTypes.string,
	htmlFor: React.PropTypes.string,
};

SearchLabel.defaultProps = {
	className: "",
	htmlFor: "",
};

const SearchLabelText = styled.span`
`;

const SearchField = styled.input`
	height: 50px;
	box-shadow: inset 0px 2px 8px 0px rgba(0,0,0,0.3);
	background: ${ colors.$color_white };
	border: 0;
	padding: 0 0 0 10px;
	font-size: 18px;
	font-family: "Open Sans", sans-serif;
	width: calc(100% - 40px);
`;

SearchField.propTypes = {
	id: React.PropTypes.string.isRequired,
	type: React.PropTypes.string,
	value: React.PropTypes.string,
	"aria-describedby": React.PropTypes.string,
};

SearchField.defaultProps = {
	type: "text",
	"aria-describedby": "",
};

const SearchDescription = styled.p`
`;

SearchDescription.propTypes = {
	className: React.PropTypes.string,
	id: React.PropTypes.string,
};

SearchDescription.defaultProps = {
	className: "",
	id: "",
};

/**
 * Renders the Search component.
 *
 * @param {Object} props The props to use.
 * @returns {ReactElement} The rendered html.
 */
function Search( props ) {
	let changeSearchQuery = ( event ) => {
		props.onChange( event.target.value );
	};

	return <div>
		<SearchLabel htmlFor={ props.id }>
			<SearchLabelText className="screen-reader-text">
				{ props.searchLabel ? props.searchLabel : props.intl.formatMessage( messages.searchLabel ) }
			</SearchLabelText>
		</SearchLabel>
		<SearchField
			type="text"
			id={ props.id }
			value={ props.query }
			aria-describedby={ props.descriptionId }
			onChange={ changeSearchQuery }
			autoComplete="off"
			autoCorrect="off"
			autoCapitalize="off"
			spellCheck="false"
		/>
		<SearchDescription className="screen-reader-text" id={ props.descriptionId }>
			{ props.description ? props.description : props.intl.formatMessage( messages.description ) }
		</SearchDescription>
	</div>;
}

export default injectIntl( Search );

Search.propTypes = {
	searchLabel: React.PropTypes.string,
	id: React.PropTypes.string.isRequired,
	description: React.PropTypes.string,
	descriptionId: React.PropTypes.string.isRequired,
	onChange: React.PropTypes.func.isRequired,
	query: React.PropTypes.string,
	intl: intlShape.isRequired,
};
