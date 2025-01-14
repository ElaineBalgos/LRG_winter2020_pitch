<?php 
define('ABSPATH', __DIR__);
define('ADMIN_PATH', ABSPATH. '/includes/admin');
define('ADMIN_SCRIPT_PATH', ADMIN_PATH. '/scripts');

# Turn display error on, DEBUG ONLY!! Please turn it off in your production env
#ini_set('display_errors', 1);

# Create a session
#session_start();

require_once ABSPATH.'/includes/config/database.php';
// require_once ADMIN_SCRIPT_PATH.'/read.php';
require_once ADMIN_SCRIPT_PATH.'/login.php';
require_once ADMIN_SCRIPT_PATH.'/functions.php';
require_once ADMIN_SCRIPT_PATH.'/user.php';
