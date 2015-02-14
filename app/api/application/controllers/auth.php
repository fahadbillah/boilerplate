<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Auth extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
	}

	public function index()
	{
		$this->session->all_userdata();
		$returned_data['csrf'] = $this->session->all_userdata();
		if($this->session->userdata('is_logged_in')){
			$returned_data['success'] = true;
			$returned_data['message'] = 'Logged In';
		}else{
			$returned_data['success'] = false;
			$returned_data['message'] = 'Not Logged In';
		}
		$this->output->set_status_header('401');
		jsonify($returned_data);
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

	public function registration()
	{
		$received_data = get_post();

		unset($received_data['repassword']);

		
		if(isset($received_data['referer']) && $received_data['referer'] !== 'Not Available'){
		}

		$received_data['user_type'] = 'user';
		$received_data['account_status'] = 'not_activated_yet';
		$received_data['token'] = generate_random_string(40);
		$received_data['referral'] = generate_random_string(8);

		$received_data['password']  = sha1($received_data['password']);

		$this->load->model('User_model');
		$result = $this->User_model->insert_user($received_data);
		$returned_data['success'] = $result;
		$returned_data['message'] = ($result) ? 'Registration successfull!' : 'Registration failed!';
		jsonify($returned_data);
	}

}

/* End of file auth.php */
/* Location: ./application/controllers/auth.php */