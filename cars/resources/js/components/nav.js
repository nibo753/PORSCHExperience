const menu = document.getElementById( 'mp-menu' ),
hamburger = document.getElementById( 'mp-trigger' );

let nav = new mlPushMenu( menu, hamburger, { type : 'cover'} );

export function _resetMenu() {
	nav._resetMenu();
}
export function _openMenu() {
	nav._openMenu();
}
export function _closeMenu() {
	nav._closeMenu();
}