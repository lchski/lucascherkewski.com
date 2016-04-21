<?php

$app->get('/', function($request, $response, $args) {
   $response->write('Hullo!');
});
