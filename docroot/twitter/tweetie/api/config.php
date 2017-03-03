<?php
  /**
   * Your Twitter App Info
   */
   echo $_SERVER['TWITTER_CONSUMER_KEY'];
   echo("server");
echo $_ENV['TWITTER_CONSUMER_KEY'];
echo("env");
die();
  // Consumer Key
  define('CONSUMER_KEY', $_SERVER['TWITTER_CONSUMER_KEY']);
  define('CONSUMER_SECRET', $_SERVER['TWITTER_CONSUMER_SECRET']);

  // User Access Token
  define('ACCESS_TOKEN', $_SERVER['TWITTER_ACCESS_TOKEN']);
  define('ACCESS_SECRET', $_SERVER['TWITTER_ACCESS_SECRET']);

	// Cache Settings
	define('CACHE_ENABLED', false);
	define('CACHE_LIFETIME', 3600); // in seconds
	define('HASH_SALT', md5(dirname(__FILE__)));
