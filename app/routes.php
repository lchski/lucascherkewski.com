<?php

$app->get('/', function($request, $response, $args) {
    $items = json_decode($this->api->get('items')->getBody(), true);

    return $this->view->render($response, 'pages/index.twig', [
        'items' => $items,
        'page'        => [
            'title' => 'Home',
        ],
    ]);
})->setName('index');

$app->get('/item/{id:[0-9]+}', function($request, $response, $args) {
    $item = json_decode($this->api->get('items/' . $args['id'])->getBody(), true);

    return $this->view->render($response, 'pages/single.twig', [
        'item' => $item,
        'page'        => [
            'title' => $item['title'] . ' - Lucas Cherkewski',
        ],
    ]);
})->setName('singleItem');

