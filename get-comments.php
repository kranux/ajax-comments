<?php
$prev = $_GET['prev'];
$id = 0;
$comments = array(
	array(
		'id'=> $id++,
		'user'=>'Layla Snyder',
		'avatar'=> 'http://api.randomuser.me/0.3.2/portraits/women/31.jpg',
		'comment'=> "Nunc feugiat, nisl vel aliquam tempor, quam nisi faucibus sem."
		),
	array(
		'id'=> $id++,
		'user'=>'Edward Gardner',
		'avatar'=> 'http://api.randomuser.me/0.3.2/portraits/men/32.jpg',
		'comment'=> "Nunc feugiat, nisl vel aliquam tempor, quam nisi faucibus sem, id blandit ipsum odio eget turpis. In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus eu elit pharetra, volutpat massa in, tincidunt justo. Nullam congue fringilla elit, sit amet cursus velit aliquam et. Pellentesque pulvinar porta mauris, a gravida massa bibendum ac. Sed placerat leo non ipsum scelerisque fermentum. Nullam feugiat bibendum est, sit amet pellentesque erat condimentum pellentesque."
	),
	array(
		'id'=> $id++,
		'user'=>'Shannon Butler',
		'avatar'=> 'http://api.randomuser.me/0.3.2/portraits/women/16.jpg',
		'comment'=> "Nunc feugiat, nisl vel aliquam tempor, quam nisi faucibus sem, id blandit ipsum odio eget turpis. In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
	),
	array(
		'id'=> $id++,
		'user'=>'Richard Hudson',
		'avatar'=> 'http://api.randomuser.me/0.3.2/portraits/men/26.jpg',
		'comment'=> "Nunc feugiat, nisl vel aliquam tempor, quam nisi faucibus sem, id blandit ipsum odio eget turpis. In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus eu elit pharetra, volutpat massa in, tincidunt justo. Nullam congue fringilla elit, sit amet cursus velit aliquam et. Pellentesque pulvinar porta mauris, a gravida massa bibendum ac. Sed placerat leo non ipsum scelerisque fermentum. Nullam feugiat bibendum est, sit amet pellentesque erat condimentum pellentesque. Nunc feugiat, nisl vel aliquam tempor, quam nisi faucibus sem, id blandit ipsum odio eget turpis. In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus eu elit pharetra, volutpat massa in, tincidunt justo. Nullam congue fringilla elit, sit amet cursus velit aliquam et. Pellentesque pulvinar porta mauris, a gravida massa bibendum ac. Sed placerat leo non ipsum scelerisque fermentum. Nullam feugiat bibendum est, sit amet pellentesque erat condimentum pellentesque."
	),
	array(
		'id'=> $id++,
		'user'=>'Alma Harrison',
		'avatar'=> 'http://api.randomuser.me/0.3.2/portraits/women/26.jpg',
		'comment'=> "Nunc feugiat, nisl vel aliquam tempor, quam nisi faucibus sem, id blandit ipsum odio eget turpis. ."
	),
	array(
		'id'=> $id++,
		'user'=>'Victor Long',
		'avatar'=> 'http://api.randomuser.me/0.3.2/portraits/men/6.jpg',
		'comment'=> "Nunc feugiat, nisl vel aliquam tempor, quam nisi faucibus sem, id blandit ipsum odio eget turpis. In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus eu elit pharetra, volutpat massa in, tincidunt justo. Nullam congue fringilla elit, sit amet cursus velit aliquam et. Pellentesque pulvinar porta mauris, a gravida massa bibendum ac. Sed placerat leo non ipsum scelerisque fermentum. Nullam feugiat bibendum est, sit amet pellentesque erat condimentum pellentesque."
	),
);

$next = $prev+1;
if (!empty($comments[$next])){
	echo json_encode($comments[$next]);
}else{
	echo json_encode(null);
}

exit;