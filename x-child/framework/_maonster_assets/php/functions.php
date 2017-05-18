<?php

add_action( 'wp_enqueue_scripts', 'maonster_scriptsandstyles', 25 );
function maonster_scriptsandstyles() {

    // - Register Styles
	// - CUSTOM
	wp_register_style(
		'maonster-bootstrap-css',
		get_stylesheet_directory_uri() . '/framework/_maonster_assets/vendor/bootstrap/bootstrap.min.css',
		NULL,
		NULL,
		'all'
	);
	wp_register_style(
		'maonster-fancybox-css',
		get_stylesheet_directory_uri() . '/framework/_maonster_assets/vendor/fancybox/jquery.fancybox.css',
		NULL,
		NULL,
		'all'
	);
	wp_register_style(
		'maonster-custom-css',
		get_stylesheet_directory_uri() . '/framework/_maonster_assets/css/styles.css?v='.time(),
		NULL,
		NULL,
		'all'
	);

    // - Register Scripts
    // - JQUERY VALIDATE
    wp_register_script(
    	'maonster-bootstrap-js',
    	get_stylesheet_directory_uri() . '/framework/_maonster_assets/vendor/bootstrap/bootstrap.min.js',
    	array( 'jquery' ),
    	NULL,
    	true
    );
    wp_register_script(
    	'maonster-fancybox-js',
    	get_stylesheet_directory_uri() . '/framework/_maonster_assets/vendor/fancybox/jquery.fancybox.js',
    	array( 'jquery' ),
    	NULL,
    	true
    );
    wp_register_script(
    	'maonster-fancybox-pack-js',
    	get_stylesheet_directory_uri() . '/framework/_maonster_assets/vendor/fancybox/jquery.fancybox.pack.js',
    	array( 'jquery' ),
    	NULL,
    	true
    );
    wp_register_script(
    	'maonster-detectmobilebrowser-js',
    	get_stylesheet_directory_uri() . '/framework/_maonster_assets/vendor/detectmobilebrowser.js',
    	array( 'jquery' ),
    	NULL,
    	true
    );
	// - CUSTOM
    wp_register_script(
    	'maonster-custom-js',
    	get_stylesheet_directory_uri() . '/framework/_maonster_assets/js/script.js?v='.time(),
    	array( 'jquery' ),
    	NULL,
    	true
    );
	
	// - Enqueue Styles
	wp_enqueue_style( 'maonster-bootstrap-css' );
	wp_enqueue_style( 'maonster-fancybox-css' );
	wp_enqueue_style( 'maonster-custom-css' );
	
	// - Enqueue Scripts
	wp_enqueue_script( 'maonster-bootstrap-js' );
	wp_enqueue_script( 'maonster-fancybox-js' );
	wp_enqueue_script( 'maonster-fancybox-pack-js' );
	wp_enqueue_script( 'maonster-detectmobilebrowser-js' );
	wp_enqueue_script( 'maonster-custom-js' );

}

 /*
	 <div style="color:#fff;" class="x-column x-sm x-1-4">
<a style="background-color:#f18f21; color:#fff; border-color:#f18f21;" class="x-btn x-btn-block x-btn-flat x-btn-round x-btn-small popmake-download-specs" href="#example" title="Example" data-options="thumbnail: ''">SEND ME SPECS</a>
</div>

<div style="color:#fff;" class="x-column x-sm x-1-4">
<a style="background-color:#5cb85c; color:#fff; border-color:#5cb85c;" class="x-btn x-btn-block x-btn-flat x-btn-round x-btn-small popmake-reserve-mine" href="#example" title="Example" data-options="thumbnail: ''">GET YOURS!</a></div>

<div style="color:#fff;" class="x-column x-sm x-1-4">
<a class="messenger-btn btn x-btn x-btn-block x-btn-flat x-btn-round x-btn-small" href="#data"><img class="img-responsive" src="https://skillion.com.au/wp-content/themes/x-child/framework/_maonster_assets/images/facebook-messenger-white.svg"> <span>Message Us</span></a></div>

<div style="color:#fff;" class="x-column x-sm x-1-4">
<a style="background-color:transparent; color:#fff; border-color:white;" class="login-btn x-btn x-btn-block x-btn-flat x-btn-round x-btn-small" href="#login" title="Login" data-options="thumbnail: ''">LOGIN</a></div>


If in the response "logged" == True, then show the "Log out" button instead of "Log in" and href="https://shop.skillion.com.au/logout"
Skillion Login
Designed In Australia. We stand for energy and passion. This is something we put into each and every build of our hardcore electric bikes.
shop.skillion.com.au
If "logged" == False, then do "Log in" button with href="https://shop.skillion.com.au"
And no, you cannot use SOAP/WSDL any more.

https://shop.skillion.com.au/profile
 */