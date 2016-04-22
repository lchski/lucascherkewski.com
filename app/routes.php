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
    $itemUri = 'items/' . $args['id'];

    $item = json_decode($this->api->get($itemUri)->getBody(), true);

    $itemLinks = json_decode($this->api->get($itemUri . '/links')->getBody(), true);

    $relatedItems = json_decode($this->api->get($itemUri . '/items')->getBody(), true);

    return $this->view->render($response, 'pages/single.twig', [
        'item' => [
            'item'  => $item,
            'links' => $itemLinks,
            'items' => $relatedItems,
        ],
        'page' => [
            'title' => $item['title'] . ' - Lucas Cherkewski',
        ],
    ]);
})->setName('singleItem');

