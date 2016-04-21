<?php

$app->get('/', function($request, $response, $args) {
   return $response->write('Hulloo!');
});

$app->get('/test', function($request, $response, $args) {
    return $response->write('test');
});
