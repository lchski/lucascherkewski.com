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

    $linksWithItems = json_decode($this->api->get($itemUri . '/linksWithItems')->getBody(), true);

    return $this->view->render($response, 'pages/single.twig', [
        'item' => [
            'item'  => $item,
            'linksWithItems' => $linksWithItems,
        ],
        'page' => [
            'title' => $item['title'] . ' - Lucas Cherkewski',
        ],
    ]);
})->setName('singleItem');

$app->get('/link/{id:[0-9]+}', function($request, $response, $args) {
    $linkUri = 'links/' . $args['id'];

    $link = json_decode($this->api->get($linkUri)->getBody(), true);

    $linkedItems = json_decode($this->api->get($linkUri . '/items')->getBody(), true);

    return $this->view->render($response, 'pages/single-link.twig', [
        'link' => [
            'link'  => $link,
            'linkedItems' => $linkedItems,
        ],
        'page' => [
            'title' => $link['title'] . ' - Lucas Cherkewski',
        ],
    ]);
})->setName('singleLink');

