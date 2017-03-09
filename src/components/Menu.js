import React from "react";
import styled from "styled-components";
import colors from "yoast-components/style-guide/colors.json";
import { Link, NavLink } from 'react-router-dom';

const activeStyle = btoa( Math.random() );

const items = [
	{item:'/subscriptions', title:'Subscriptions'},
	{item:'/sites', title:'Sites'},
	{item:'/courses', title:'Courses'},
	{item:'/account', title:'Account'}
];

const Menu = styled.div`
	width: 300px;
`;

const MenuItem = styled(NavLink)`
	display: block;
	height: 100px;
	line-height: 100px;
	font: "Open Sans";
	font-size: 22px;
	font-weight: 300;
	width: 250px;
	padding-left: 25px;
	margin-left: 25px;
	color: ${colors.$color_pink_dark};
	text-decoration: none;
	
	&.${activeStyle} {
		color: #ccc;
		background-color: ${colors.$background};
		box-shadow: inset 0px 2px 8px 0px rgba(0, 0, 0, 0.3);
		font: "Open Sans";
		font-weight: 400;
	}
`;

export const MainMenu = () => {
	return (
		<Menu>
			<nav>
				{items.map((page) => {
					return <MenuItem activeClassName={activeStyle} to={page.item} key={page.title}>{page.title}</MenuItem>}
				)}
			</nav>
		</Menu>
	)
};

export const Home = React.createClass({
	render: function() {
		return (<h1>Welcome to the Home Page</h1>);
	}
});

export const Subscriptions = React.createClass({
	render: function() {
		return (<h1>Your subscriptions</h1>);
	}
});

export const Sites = React.createClass({
	render: function() {
		return (<h1>Your sites</h1>);
	}
});

export const Courses = React.createClass({
	render: function() {
		return (<h1>Your courses</h1>);
	}
});
export const Account = React.createClass({
	render: function() {
		return (<h1>Your account details</h1>);
	}
});
