<?php
    function custom_WP_REST_API () {
        /** custom field FEATURED IMAGE LARGE*/
        register_rest_field('post', 'featured_image_large', array(
            'get_callback'    => 'get_image_src_large',
            'update_callback' => null,
            'schema'          => null,
            )
        );
        /** custom field FEATURED IMAGE THUMB*/
        register_rest_field('post', 'featured_image_thumb', array(
            'get_callback'    => 'get_image_src_thumb',
            'update_callback' => null,
            'schema'          => null,
            )
        );
    }
    /** 
     * 
     */
    /** functions for 'POST FEATURED IMAGE LARGE' */
    function get_image_src_large( $object, $field_name, $request ) {
        $feat_img_array = wp_get_attachment_image_src(
          $object['featured_media'], // Image attachment ID
          'large',  // Size.  Ex. "thumbnail", "large", "full", etc..
          true // Whether the image should be treated as an icon.
        );
        return $feat_img_array[0];
    }
    /** functions for 'POST FEATURED IMAGE THUMB' */
    function get_image_src_thumb( $object, $field_name, $request ) {
        $feat_img_array = wp_get_attachment_image_src(
          $object['featured_media'], // Image attachment ID
          'thumbnail',  // Size.  Ex. "thumbnail", "large", "full", etc..
          true // Whether the image should be treated as an icon.
        );
        return $feat_img_array[0];
    }
    /**
     * 
     */ 
    /** add to rest api init */
    add_action( 'rest_api_init', 'custom_WP_REST_API' );
?>








