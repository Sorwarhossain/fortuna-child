<?php

add_action( 'wp_enqueue_scripts', 'fortuna_child_enqueue_scripts');
function fortuna_child_enqueue_scripts() {
	wp_enqueue_script('jquery');

   	wp_enqueue_script('typed-js', get_stylesheet_directory_uri() . '/js/typed.min.js', array('jquery'), false, true);
   	wp_enqueue_script('custom-scripts', get_stylesheet_directory_uri() . '/js/custom-scripts.js', array('jquery'), false, true);
}

