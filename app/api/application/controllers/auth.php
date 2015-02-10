<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Auth extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
	}

	public function index()
	{
		
	}

	public function login()
	{
		$returned_data['id'] = $this->session->all_userdata()['session_id'];
		$returned_data['user']['username'] = 'fahadbillah';
		$returned_data['user']['email'] = 'fahadbillah@yahoo.com';
		$returned_data['user']['first_name'] = 'Fahad';
		$returned_data['user']['last_name'] = 'Billah';
		$returned_data['user']['id'] = 1;
		$returned_data['user']['role'] = 'admin';

		echo json_encode($returned_data);
	}

}

/* End of file auth.php */
/* Location: ./application/controllers/auth.php */