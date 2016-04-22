<?php

$app->get('/', function($request, $response, $args) {
    $apiResponse = json_decode($this->api->get('items/2')->getBody(), true);

    return $this->view->render($response, 'pages/index.twig', [
        'apiResponse' => $apiResponse,
        'page'        => [
            'title' => 'Home',
        ],
    ]);
});

