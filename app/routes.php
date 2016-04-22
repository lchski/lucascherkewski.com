<?php

$app->get('/', function($request, $response, $args) {
    $items = json_decode($this->api->get('items')->getBody(), true);

    return $this->view->render($response, 'pages/index.twig', [
        'items' => $items,
        'page'        => [
            'title' => 'Home',
        ],
    ]);
});

