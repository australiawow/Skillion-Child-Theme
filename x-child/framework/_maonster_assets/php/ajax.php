<?php
error_reporting(E_ALL ^ (E_NOTICE | E_WARNING | E_DEPRECATED));
session_start();

if ( isset($_POST) && !empty($_POST) && $_POST['request'] == 'login' ) {
	$post = $_POST;
	$url  = 'https://www.fulfilleddesires.net/SALVAGE_SITE_WEB/AU/awp_syshooks/REST-Customer.awp?Procedure=Customer_LogIn&User='.$post['username'].'&Pwd='.$post['password'].'';
	$response = file_get_contents($url);
	
	$data = json_decode($response);
	
	if ($data->Status->Successful) {
		//- Save Sessions
		$_SESSION['skillion_shop_login'] = true;
	}
	
	
	echo $response;
	exit();
}
else if ( isset($_POST) && !empty($_POST) && $_POST['request'] == 'get_session' ) {
	
	if (isset($_SESSION['skillion_shop_login']) && !empty($_SESSION['skillion_shop_login']) && 
		isset($_SESSION['skillion_shop_login']) === true ) {
		echo json_encode(array('status' => true));
	}
	else {
		echo json_encode(array('status' => false));
	}
	exit();
	
}
else if ( isset($_POST) && !empty($_POST) && $_POST['request'] == 'logout' ) {
	
	unset($_SESSION['skillion_shop_login']);
	echo json_encode(array('status' => true));
	exit();
	
}
else {
	header( 'Location: https://skillion.com.au' );
}


function UpdateCookies() {
  $aCookies = glob("https://skillion.com.au/wp-content/themes/x-child/framework/_maonster_assets/php/Cookies/*.txt");
  $n = count($aCookies);
  if ($n !== 0) {
   $counter = 0;

   while ($counter < $n) {
    $sCombined .= file_get_contents($aCookies["$counter"]) . ';';
    ++$counter;
   }
   return $sCombined;
  } else {
   return $n;
  }
}
function SaveCookies($aRH) {
  $n = count($aRH); // Number of Pieces
  $counter = 0;
  $cnt = 0;
  while ($counter <= $n) {
    if(preg_match('@Set-Cookie: (([^=]+)=[^;]+)@i', $aRH["$counter"], $matches)) {
      $fp = fopen('https://skillion.com.au/wp-content/themes/x-child/framework/_maonster_assets/php/Cookies/'.$matches["2"].'.txt', 'w');
       fwrite($fp, $matches["1"]);
      fclose($fp);
      $cnt++;
    }
    ++$counter;
  }
  return $cnt;
}
