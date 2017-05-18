<?php
session_start();
// =============================================================================
// FUNCTIONS.PHP
// -----------------------------------------------------------------------------
// Overwrite or add your own custom functions to X in this file.
// =============================================================================

// =============================================================================
// TABLE OF CONTENTS
// -----------------------------------------------------------------------------
//   01. Enqueue Parent Stylesheet
//   02. Additional Functions
// =============================================================================

// Enqueue Parent Stylesheet
// =============================================================================

add_filter( 'x_enqueue_parent_stylesheet', '__return_true' );



// Additional Functions// =============================================================================
require_once( dirname( __FILE__ ) . '/framework/_maonster_assets/php/functions.php' );

add_action('wp_head','my_code1', 1);
function my_code1 () { ?>

<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KP5VZKP');</script>
<!-- End Google Tag Manager -->

<?php }


add_action('x_before_site_begin','my_code2');
function my_code2 () { ?>

<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KP5VZKP"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->


<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=776657672494365";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
<div id="data" style="display:none;"></div>
<div id="login" style="display:none;">
	<!-- <iframe id="loginIframe" src="https://shop.skillion.com.au" allowfullscreen width="100%" height="100%"></iframe> -->
	<div class="login-card">
		<form id="login-form" method="post" action="https://shop.skillion.com.au/">
		  <div class="form-group">
		  	<h1 class="text-center">Login</h1>
		  </div>
		  <div class="form-group text-center">
	        <label class="uk-form-label" for="form-stacked-text" style="font-weight: 400;">Available only to Skillion purchasers</label>
	      </div>
		  <div id="errors" class="form-group hidden bg-danger">
		  	<p class="text-danger"></p>
		  </div>
		  <div class="form-group">
		    <label for="username">Username</label>
		    <input type="text" class="form-control required maonster-username" name="username" id="username" placeholder="Your Username...">
		  </div>
		  <div class="form-group">
		    <label for="password">Password</label>
		    <input type="password" class="form-control required maonster-password" name="password" id="password" placeholder="Your Password...">
		  </div>
		  <div class="form-group text-center">
		  	<button type="submit" name="login" class="submit btn btn-primary">LOG IN SECURELY</button>
		  </div>
		  <input type="hidden" name="wasGuest" value="None" />
		  <div class="form-group text-center">
		    <a href="https://shop.skillion.com.au/reset/forgot">Forgot my password</a>
		  </div>
		</form>
	</div>
</div>

<?php }











