<?php
/**
 * World Cup Elite Theme Functions
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

function worldcup_elite_setup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption' ) );
}
add_action( 'after_setup_theme', 'worldcup_elite_setup' );

function worldcup_elite_scripts() {
    wp_enqueue_style( 'google-fonts', 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=Cabinet+Grotesk:wght@700;800;900&display=swap', array(), null );
    wp_enqueue_style( 'font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css', array(), '6.5.2' );
    wp_enqueue_style( 'worldcup-elite-css', get_template_directory_uri() . '/assets/css/main.css', array(), '1.0.0' );
    wp_enqueue_script( 'worldcup-elite-app', get_template_directory_uri() . '/assets/js/app.js', array(), '1.0.0', true );
}
add_action( 'wp_enqueue_scripts', 'worldcup_elite_scripts' );
