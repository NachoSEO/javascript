import { get } from "lodash";

/** FACEBOOK */

/**
	 * Provides a path to the state for selectors. Also bundles all selectors in an object.
	 *
	 * @param {String} path The path to the state.
	 *
	 * @returns {Object} The Selectors objects.
	 */
const socialMetadataSelectorsFactory = ( path ) => {
	const selectors = {};

	/**
	 * Gets the facebook data from the state.
	 *
	 * @param {Object} state The state.
	 *
	 * @returns {String}.Facebook data.
	 */
	selectors.getFacebookData = state => get( state, `${ path }.facebook`, {} );


	/**
	 * Gets the facebook title from the state.
	 *
	 * @param {Object} state The state.
	 *
	 * @returns {String}.Facebook title.
	 */
	selectors.getFacebookTitle = state => selectors.getFacebookData( state ).title;

	/**
	 * Gets the facebook description from the state.
	 *
	 * @param {Object} state The state.
	 *
	 * @returns {String}.Facebook description.
	 */
	selectors.getFacebookDescription = state => selectors.getFacebookData( state ).description;

	/**
	 * Gets the facebook image URL from the state.
	 *
	 * @param {Object} state The state.
	 *
	 * @returns {String}.Facebook image URL.
	 */
	selectors.getFacebookImageUrl = state => selectors.getFacebookData( state ).imageUrl;

	/**
	 * Gets the facebook image type from the state.
	 *
	 * @param {Object} state The state.
	 *
	 * @returns {String}.Facebook image type.
	 */
	selectors.getFacebookImageType = state => selectors.getFacebookData( state ).imageType;


	/** TWITTER */

	/**
	 * Gets the twitter data from the state.
	 *
	 * @param {Object} state The state.
	 *
	 * @returns {String}.Twitter data.
	 */
	selectors.getTwitterData = state => get( state, `${ path }.twitter`, {} );


	/**
	 * Gets the twitter title from the state.
	 *
	 * @param {Object} state The state.
	 *
	 * @returns {String}.Twitter title.
	 */
	selectors.getTwitterTitle = state => selectors.getTwitterData( state ).title;

	/**
	 * Gets the twitter description from the state.
	 *
	 * @param {Object} state The state.
	 *
	 * @returns {String}.Twitter description.
	 */
	selectors.getTwitterDescription = state => selectors.getTwitterData( state ).description;

	/**
	 * Gets the twitter image URL from the state.
	 *
	 * @param {Object} state The state.
	 *
	 * @returns {String}.Twitter image URL.
	 */
	selectors.getTwitterImageUrl = state => selectors.getTwitterData( state ).imageUrl;

	/**
	 * Gets the twitter image type from the state.
	 *
	 * @param {Object} state The state.
	 *
	 * @returns {String}.Twitter image type.
	 */
	selectors.getTwitterImageType = state => selectors.getTwitterData( state ).imageType;

	return selectors;
};

export default socialMetadataSelectorsFactory;
