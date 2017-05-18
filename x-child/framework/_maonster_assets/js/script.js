jQuery(document).ready(function($){
	//- VARIABLES
	var ajaxURL = "https://skillion.com.au/wp-content/themes/x-child/framework/_maonster_assets/php/ajax.php";

	$(window).scroll(function(){
		if ($(this).scrollTop() > 0) {
			$('.x-topbar').addClass("is_scrolling");
		} else {
			$('.x-topbar').removeClass("is_scrolling");
		}
	});
	
	//- BIKE BACKGROUND IMAGE HEIGHT
	if ($('body.home').length > 0){
		var wH   = $(window).height();
		var navH = $('header.masthead').height();
		var sH   = wH - navH;
		$('.home #section-hero').height(sH);
		console.log($('.home #section-hero').height());
	}
	
	var container_width  = $('#data').width();
	var container_height = $('#data').height();
    $('#data').html('<div class="fb-page" data-href="https://www.facebook.com/skillionbikes/" data-tabs="messages" data-small-header="true" data-height="'+container_height+'" data-width="'+container_width+'" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/skillionbikes/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/skillionbikes/">Skillionbikes</a></blockquote></div>');
    
    $(".messenger-btn").unbind();
    $(".messenger-btn").fancybox({
		padding : 0,
        //width:500,
        //autoResize: false,
        //autoHeight: true,
        //autoWidth: true,
        //autoCenter: true,
        //fitToView: true,
        beforeLoad: function() { 
	        console.log('test');
        },
        afterShow: function() {
	        var cnt    = 5;
			var height = $('.fancybox-wrap').width();
			var fancyInt;
			clearInterval(fancyInt);
			fancyInt = setInterval(function(){
				$.fancybox.update();
				$.fancybox.reposition();
				var newHeight = $('.fancybox-wrap').width();
				if (height == newHeight) {
					cnt--;
					if (cnt <= 0) {
						clearInterval(fancyInt);
					}
				}
			}, 1000);
			
	        FB.XFBML.parse(document.getElementById('#data'),function(){
				$.fancybox.update();
		        $.fancybox.reposition();
	        });
        },
        afterLoad: function() { 
	        
	    },
        helpers: {
        	title: {
	            type: 'inside',
	            position: 'top'
	        },
            overlay: {
                locked: false
            }
        }
    });
    
    //- Check user login
    $(".login-btn").unbind();
    var lRequest = $.ajax({
	  url: ajaxURL,
	  method: "POST",
	  data: {
		  'request' : 'get_session'
	  },
	  dataType: "json"
	});
	
	lRequest.done(function( data ) {
		if (data.status) {
			$('.login-btn').text('LOGOUT');
			$('.login-btn').bind('click',function(e){
				e.preventDefault();
				var lReq = $.ajax({
				  url: ajaxURL,
				  method: "POST",
				  data: {
					  'request' : 'logout'
				  },
				  dataType: "json"
				});
				
				lReq.done(function( data ) {
					window.location.href = "https://shop.skillion.com.au/logout";
				});
			});
		}
		else {
			$(".login-btn").fancybox({
		    	padding : 0,
		        //width:500,
		        //autoResize: false,
		        //autoHeight: true,
		        //autoWidth: true,
		        //autoCenter: true,
		        //fitToView: true,
		        beforeLoad: function() { 
		        
		        },
		        afterShow: function() {
		        	
					$.fancybox.update();
					$.fancybox.reposition();
		        },
		        afterLoad: function() { 
			        
			    },
		        helpers: {
		            overlay: {
		                locked: false
		            }
		        }
		    });
		}
	});
    
    
    $("#sendMeSpecsForm input, #sendMeSpecsForm textarea").bind('keyup blur',function(){
        validateForm($('#sendMeSpecsForm'));
    });
    
    $("#contactForm input, #contactForm textarea").bind('keyup blur',function(){
        validateForm($('#contactForm'));
    });
    
    $('.maonster-name').bind('keydown', function (event) {
    	var regex = new RegExp("^[a-zA-Z -]+$");
        var key = (!event.charCode) ? event.which : event.charCode;
        var keyToString = String.fromCharCode(key);
        
        //console.log(key);
        //console.log(keyToString);
        //console.log(regex.test(keyToString));
		if (!regex.test(keyToString)) {
        	switch (key) {
	            case 8:  // Backspace
	            case 9:  // Tab
	            case 13: // Enter
	            case 37: // Left
	            case 38: // Up
	            case 39: // Right
	            case 40: // Down
	            case 46: // Delete
	            case 189: // Dash and Underscore
	            case 190: // Dot
	            break;
	
	            default:
	            	event.preventDefault();
					return false;
			}
		}
    });
    
    if (jQuery.browser.mobile) {
	    $('.maonster-number, .maonster-phone, #billing_postcode, #billing_phone').bind('keypress', function (event) {
	        var regex = new RegExp("^[0-9]+$");
	        var key = (!event.charCode) ? event.which : event.charCode;
	        var keyToString = String.fromCharCode(key);
	        
			if (!regex.test(keyToString)) {
	        	event.preventDefault();
				return false;
			}
	    });
    }
    else {
	    $('.maonster-number, .maonster-phone, #billing_postcode, #billing_phone').bind('keydown', function (event) {
	        var regex = new RegExp("^[0-9]+$");
	        var key = (!event.charCode) ? event.which : event.charCode;
	        var keyToString = String.fromCharCode(key);
	        
			if (!regex.test(keyToString)) {
	        	switch (key) {
		            case 8:  // Backspace
		            case 9:  // Tab
		            case 13: // Enter
		            case 37: // Left
		            case 38: // Up
		            case 39: // Right
		            case 40: // Down
		            case 46: // Delete
		            //case 189: // Dash and Underscore
		            case 190: // Dot
		            break;
		
		            default:
		            	event.preventDefault();
			            //$(this).removeClass("valid");
			            //$(this).addClass('error');
						return false;
				}
			}
			else if ( event.shiftKey|| (event.keyCode < 48 || event.keyCode > 57) && 
					 (event.keyCode < 96 || event.keyCode > 105 ) ) {
	        	event.preventDefault();
				return false;
			}
	    });
    }
    
    if (jQuery.browser.mobile) {
	    $('.maonster-email, #billing_email').bind('keypress', function (event) {
	        var regex = new RegExp("^[a-zA-Z0-9 @._-]+$");
	        var key = (!event.charCode) ? event.which : event.charCode;
	        var keyToString = String.fromCharCode(key);
	        
			if (!regex.test(keyToString)) {
				
	        	event.preventDefault();
				return false;
			}
	    });
    }
    else {
	    $('.maonster-email, #billing_email').bind('keydown', function (event) {
	    	var regex = new RegExp("^[a-zA-Z0-9 @._-]+$");
	        var key = (!event.charCode) ? event.which : event.charCode;
	        var keyToString = String.fromCharCode(key);
	        
			var c = event.which;
			//console.log(c);
			var _to_ascii = {
		        '188': '44',
		        '109': '45',
		        '190': '46',
		        '191': '47',
		        '192': '96',
		        '220': '92',
		        '222': '39',
		        '221': '93',
		        '219': '91',
		        '173': '45',
		        '187': '61', //IE Key codes
		        '186': '59', //IE Key codes
		        '189': '45'  //IE Key codes
		    }
		
		    var shiftUps = {
		    	"190": ">",
		    	"111": "/",
		    	"107": "+",
		    	"106": "*",
		        "96": "~",
		        "49": "!",
		        "50": "@",
		        "51": "#",
		        "52": "$",
		        "53": "%",
		        "54": "^",
		        "55": "&",
		        "56": "*",
		        "57": "(",
		        "48": ")",
		        "45": "_",
		        "61": "+",
		        "91": "{",
		        "93": "}",
		        "92": "|",
		        "59": ":",
		        "39": "\"",
		        "44": "<",
		        "46": ">",
		        "47": "?"
		    };
		    
		    if (_to_ascii.hasOwnProperty(c)) {
	            c = _to_ascii[c];
	        }
	        
	        if (!event.shiftKey && (c >= 65 && c <= 90)) {
	        	//console.log('if');
	            c = String.fromCharCode(c + 32);
	            
		        if (!regex.test(c)) {
		        	event.preventDefault();
					return false;
				}
	        } else if (event.shiftKey && shiftUps.hasOwnProperty(c)) {
	        	//console.log('else if');
	            c = shiftUps[c];
	            
		        if (!regex.test(c)) {
		        	event.preventDefault();
					return false;
				}
	        } else {
	        	//console.log('else');
	        	switch (c) {
	            case 8:  // Backspace
	            case 9:  // Tab
	            case 13: // Enter
	            case 37: // Left
	            case 38: // Up
	            case 39: // Right
	            case 40: // Down
	            case 46: // Delete
	            case 50: // @
	            case 189: // Dash and Underscore
	            case 190: // Dot
	            break;
	
		            default:
		            	c = String.fromCharCode(c);
		            	if (!regex.test(c)) {
				        	event.preventDefault();
							return false;
						}
				}
	            
	        }
	    });
    }
    
    if (jQuery.browser.mobile) {
	    $('.maonster-alphanum').bind('keypress', function (event) {
	        var regex = new RegExp("^[a-zA-Z0-9 ]+$");
	        var key = (!event.charCode) ? event.which : event.charCode;
	        var keyToString = String.fromCharCode(key);
	        
			if (!regex.test(keyToString)) {
				
	        	event.preventDefault();
				return false;
			}
	    });
    }
    else {
	    $('.maonster-alphanum').bind('keydown', function (event) {
	    	var regex = new RegExp("^[a-zA-Z0-9 ]+$");
	        var key = (!event.charCode) ? event.which : event.charCode;
	        var keyToString = String.fromCharCode(key);
	        
			var c = event.which;
			//console.log(c);
			var _to_ascii = {
		        '188': '44',
		        '109': '45',
		        '190': '46',
		        '191': '47',
		        '192': '96',
		        '220': '92',
		        '222': '39',
		        '221': '93',
		        '219': '91',
		        '173': '45',
		        '187': '61', //IE Key codes
		        '186': '59', //IE Key codes
		        '189': '45'  //IE Key codes
		    }
		
		    var shiftUps = {
		    	"190": ">",
		    	"111": "/",
		    	"107": "+",
		    	"106": "*",
		        "96": "~",
		        "49": "!",
		        "50": "@",
		        "51": "#",
		        "52": "$",
		        "53": "%",
		        "54": "^",
		        "55": "&",
		        "56": "*",
		        "57": "(",
		        "48": ")",
		        "45": "_",
		        "61": "+",
		        "91": "{",
		        "93": "}",
		        "92": "|",
		        "59": ":",
		        "39": "\"",
		        "44": "<",
		        "46": ">",
		        "47": "?"
		    };
		    
		    if (_to_ascii.hasOwnProperty(c)) {
	            c = _to_ascii[c];
	        }
	        
	        if (!event.shiftKey && (c >= 65 && c <= 90)) {
	        	//console.log('if');
	            c = String.fromCharCode(c + 32);
	            
		        if (!regex.test(c)) {
		        	event.preventDefault();
					return false;
				}
	        } else if (event.shiftKey && shiftUps.hasOwnProperty(c)) {
	        	//console.log('else if');
	            c = shiftUps[c];
	            
		        if (!regex.test(c)) {
		        	event.preventDefault();
					return false;
				}
	        } else {
	        	//console.log('else');
	        	switch (c) {
	            case 8:  // Backspace
	            case 9:  // Tab
	            case 13: // Enter
	            case 37: // Left
	            case 38: // Up
	            case 39: // Right
	            case 40: // Down
	            case 46: // Delete
	            //case 50: // @
	            //case 189: // Dash and Underscore
	            //case 190: // Dot
	            break;
	
		            default:
		            	c = String.fromCharCode(c);
		            	if (!regex.test(c)) {
				        	event.preventDefault();
							return false;
						}
				}
	            
	        }
	    });
    }
	
	//- Helpers
    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

    function isName(name) {
        var regex = /^[a-zA-Z -]+$/;
        return regex.test(name);
    }
    
    function isUsername(name) {
        var regex = /^[a-zA-Z0-9_-]+$/;
        return regex.test(name);
    }

    function isPhone(phone) {
        var regex = /^[0-9 -]+$/;
        return regex.test(phone);
    }
    
    function isAlphaNum(name) {
        var regex = /^[a-zA-Z0-9 ]+$/;
        return regex.test(name);
    }
    
    function isFile(el) {
        var f = $(el)[0].files[0];
		var s = f.size;
		var t = f.type;
		
		if ( s > 1000000 ) {
			return false;
        }
        
        if ($(el).hasClass('maonster-doc')) {
	        if (t.split('/')[1] != 'pdf' && t.split('/')[1] != 'doc' && t.split('/')[1] != 'docx' && t.split('/')[1] != 'xls') {
	        	return false;
	        }
        }
        else if ($(el).hasClass('maonster-image')) {
	        if (t.split('/')[1] != 'jpg' && t.split('/')[1] != 'jpeg' && t.split('/')[1] != 'png') {
	        	return false;
	        }
        }
        
        return true;
    }
    
    function validateForm (form) {
		var requireds = $(form).find('.required');
		var reqTotal  = requireds.length;
		var validCnt  = 0;
		console.log(reqTotal);
		$(form).find('.payment-errors').text('');
		$(requireds).each(function(){
			if ($(this).val() != '') {
				
				if ($(this).hasClass('maonster-name')) {
					if (isName($(this).val())) {
						$(this).parent().removeClass('has-error').addClass('has-success');
						validCnt++;
					}
					else {
						$(this).parent().removeClass('has-success').addClass('has-error');
					}
				}
				else if ($(this).hasClass('maonster-email')) {
					if (isEmail($(this).val())) {
						$(this).parent().removeClass('has-error').addClass('has-success');
						validCnt++;
					}
					else {
						$(this).parent().removeClass('has-success').addClass('has-error');
					}
				}
				else if ($(this).hasClass('maonster-phone')) {
					
					if ($(this).intlTelInput("isValidNumber")) {
						$(this).parent().removeClass('has-error').addClass('has-success');
						validCnt++;
					}
					else {
						$(this).parent().removeClass('has-success').addClass('has-error');
					}
				}
				else if ($(this).hasClass('maonster-number')) {
					if (isPhone($(this).val())) {
						if ($(this).attr('id') == 'stripeCC') {
							if ($(this).val().length >= 12) {
								$(this).parent().removeClass('has-error').addClass('has-success');
							}
							else {
								$(this).parent().removeClass('has-success').addClass('has-error');
							}
						}
						else {
							$(this).parent().removeClass('has-error').addClass('has-success');
						}
						validCnt++;
					}
					else {
						$(this).parent().removeClass('has-success').addClass('has-error');
					}
				}
				else if ($(this).hasClass('maonster-alphanum')) {
					if (isAlphaNum($(this).val())) {
						$(this).parent().removeClass('has-error').addClass('has-success');
						validCnt++;
					}
					else {
						$(this).parent().removeClass('has-success').addClass('has-error');
					}
				}
				else if ($(this).hasClass('maonster-username')) {
					if (isUsername($(this).val())) {
						$(this).parent().removeClass('has-error').addClass('has-success');
						validCnt++;
					}
					else {
						$(this).parent().removeClass('has-success').addClass('has-error');
					}
				}
				else if ($(this).hasClass('maonster-password')) {
					if ($(this).val().length >= 8) {
						$(this).parent().removeClass('has-error').addClass('has-success');
						validCnt++;
					}
					else {
						$(this).parent().removeClass('has-success').addClass('has-error');
					}
				}
				else if ($(this).hasClass('maonster-address')) {
					$(this).parent().removeClass('has-error').addClass('has-success');
					validCnt++;
				}
				else {
					$(this).parent().removeClass('has-error').addClass('has-success');
					validCnt++;
				}
				
			}
			else {
				$(this).parent().removeClass('has-success').addClass('has-error');
			}
		});
		if (reqTotal == validCnt) {
		    $(form).find('.submit').prop('disabled', false);
			$(form).find('.submit').removeClass("disabled");
		    $(form).find('.submit').addClass('btn-success');
		}
		else {
		    $(form).find('.submit').prop('disabled', true);
		    $(form).find('.submit').removeClass('btn-success');
			$(form).find('.submit').addClass("disabled");
		}
		
	}
	
	$("#sendMeSpecsForm").submit(function(e){
        e.preventDefault();
        
	    var data = {
			"your-name"			: $("#your-name").val(),
			"your-email"		: $("#your-email").val(),
			"your-phone" 	 	: $("#your-phone").val(),
			"_wpcf7"			: $("#_wpcf7").val(),
			"_wpcf7_version"	: $("#_wpcf7_version").val(),
			"_wpcf7_locale"		: $("#_wpcf7_locale").val(),
			"_wpcf7_unit_tag"	: $("#_wpcf7_unit_tag").val(),
			"_wpnonce"			: $("#_wpnonce").val()
		};
		
		console.log(data);
        
        var request = $.ajax({
		  url: "/#wpcf7-f517-o2",
		  method: "POST",
		  data: data,
		  dataType: "json"
		});
		
		window.location.href = "https://skillion.com.au/thank-you/";
		
		request.done(function( data ) {
			console.log(data);
			window.location.href = "https://skillion.com.au/thank-you/";
		});
		 
		request.fail(function( jqXHR, textStatus ) {
			console.log(jqXHR + " -- " + textStatus);
		});
	    
    });
    
    $("#contactForm").submit(function(e){
        e.preventDefault();
        
	    var data = {
			"your-name"			: $("#contact-your-name").val(),
			"your-email"		: $("#contact-your-email").val(),
			"your-phone" 	 	: $("#contact-your-phone").val(),
			"your-message" 	 	: $("#contact-your-message").val(),
			"_wpcf7"			: $("#contact_wpcf7").val(),
			"_wpcf7_version"	: $("#contact_wpcf7_version").val(),
			"_wpcf7_locale"		: $("#contact_wpcf7_locale").val(),
			"_wpcf7_unit_tag"	: $("#contact_wpcf7_unit_tag").val(),
			"_wpnonce"			: $("#contact_wpnonce").val()
		};
		
		console.log(data);
        
        var request = $.ajax({
		  url: "/contact-us/#wpcf7-f74-p461-o1",
		  method: "POST",
		  data: data,
		  dataType: "json"
		});
		
		window.location.href = "https://skillion.com.au/thank-you-contact/";
		
		request.done(function( data ) {
			console.log(data);
			window.location.href = "https://skillion.com.au/thank-you-contact/";
		});
		 
		request.fail(function( jqXHR, textStatus ) {
			console.log(jqXHR + " -- " + textStatus);
		});
	    
    });
    
    validateForm($('#login-form'));
    $("#login-form input, #login-form textarea").bind('keyup blur',function(){
        validateForm($('#login-form'));
    });
    $("#login-form .submit").bind('click', function(e){
    	e.preventDefault();
        var form = $(this);
        $(form).find('.submit').prop('disabled', true);
		$(form).find('.submit').addClass("disabled");
	    $(form).find('.submit').removeClass('btn-success');
        
	    var data = {
	    	"request"  : "login",
			"username" : $("#username").val().trim(),
			"password" : $("#password").val().trim(),
		};
        
        var request = $.ajax({
		  url: ajaxURL,
		  method: "POST",
		  data: data,
		  dataType: "json"
		});
		
		request.done(function( data ) {
			console.log(data);
			
			if (data.Status.Successful) {
				
				$('#login-form').submit();
			}
			else {
				$('#errors p').text(data.Status.Message);
				$('#errors').removeClass('hidden');
		        $(form).find('.submit').prop('disabled', false);
				$(form).find('.submit').removeClass("disabled");
			    $(form).find('.submit').addClass('btn-success');
			}
		});
		 
		request.fail(function( jqXHR, textStatus ) {
			
			$('#errors p').text(textStatus);
			$('#errors').removeClass('hidden');
	        $(form).find('.submit').prop('disabled', false);
			$(form).find('.submit').removeClass("disabled");
		    $(form).find('.submit').addClass('btn-success');
		});
    });
    
});

/*
	Ready to get you Skillion here in Australia?

$4,000 (inc GST)

It takes 6 weeks and you just need to pay the non-refundable deposit of $1,500 now to get your Skillion.

[x_button shape="rounded" size="regular" float="none" block="true" href="https://skillion.com.au/product/skillion-bike/" info="none" info_place="top" info_trigger="hover"]Click Here to Reserve Yours Now![/x_button]



Ready to get you Skillion here in Australia?

$4,900 (inc GST)

Buy Now, Pay later with zipMoney

[x_button shape="rounded" size="regular" float="none" block="true" href="https://skillion.com.au/product/buy-your-skillion-bike-with-zipmoney/" info="none" info_place="top" info_trigger="hover"]Click Here to Buy Yours Now![/x_button]



<div style="color:#fff;" class="x-column x-sm x-1-3">
<a style="background-color:#f18f21; color:#fff; border-color:#f18f21;" class="x-btn x-btn-block x-btn-flat x-btn-round x-btn-small popmake-download-specs" href="#example" title="Example" data-options="thumbnail: ''">SEND ME SPECS</a>
</div>

<div style="color:#fff;" class="x-column x-sm x-1-3">
<a style="background-color:#5cb85c; color:#fff; border-color:#5cb85c;" class="x-btn x-btn-block x-btn-flat x-btn-round x-btn-small popmake-reserve-mine" href="#example" title="Example" data-options="thumbnail: ''">GET YOURS!</a></div>

<div style="color:#fff;" class="x-column x-sm x-1-3">
<a style="background-color:#0084ff; color:#fff; border-color:#0084ff; background-image: url('https://skillion.com.au/wp-content/uploads/2017/01/fb-messenger-icon.png'); background-repeat:no-repeat; background-position:center right; " class="x-btn x-btn-block x-btn-flat x-btn-round x-btn-small" href="#fb-messenger" title="Example" data-options="thumbnail: ''">MESSAGE US</a></div>


Leave your details and download our Spec Sheet![email-download download_id="1" contact_form_id="517"]
*/