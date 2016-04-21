<?php

$app->get('/', function($request, $response, $args) {
   return $response->write('Hulloo!');
});

