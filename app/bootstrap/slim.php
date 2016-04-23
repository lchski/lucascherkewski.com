<?php

// Configure our Slim instance.
$configuration = [
    'settings'             => [
        'displayErrorDetails' => env('SLIM_DEBUG', false),
    ],
];

// Create our custom Slim container.
$c = new \Slim\Container($configuration);

// Register component on container
$c['view'] = function ($c) {
    $view = new \Slim\Views\Twig(__DIR__ . '/../assets/components/', [
        'debug' => env('SLIM_DEBUG', false),
    ]);
    $view->addExtension(new \Slim\Views\TwigExtension(
        $c['router'],
        $c['request']->getUri()
    ));

    return $view;
};

// Register REST API client
$c['api'] = function ($c) {
    $stack = \GuzzleHttp\HandlerStack::create();

    $stack->push(
        new \Kevinrob\GuzzleCache\CacheMiddleware(
            new \Kevinrob\GuzzleCache\Strategy\PrivateCacheStrategy(
                new \Kevinrob\GuzzleCache\Storage\DoctrineCacheStorage(
                    new \Doctrine\Common\Cache\ChainCache([
                        new \Doctrine\Common\Cache\ArrayCache(),
                        new \Doctrine\Common\Cache\FilesystemCache('/tmp/'),
                    ])
                )
            )
        ),
        'cache'
    );

    return new \GuzzleHttp\Client([
        // API URL
        'base_uri' => env('API_URL', 'https://api.lucascherkewski.com') . '/' . env('API_VERSION', 'v1') . '/',
        // Custom handler, to include middleware.
        'handler'  => $stack,
    ]);
};

// Boot up our Slim instance.
$app = new \Slim\App($c);

// Add our global middleware.
$app->add(new \Lchski\TrailingSlashMiddleware);
