<?php

namespace Arckinteractive\StatamicBardFontSize;

use Statamic\Fieldtypes\Bard\Augmentor;
use Statamic\Providers\AddonServiceProvider;

class ServiceProvider extends AddonServiceProvider
{
    protected $scripts = [
        __DIR__.'/../dist/js/arckinteractive-bard-font-size.js',
    ];
    
    protected $stylesheets = [
        __DIR__.'/../dist/css/arckinteractive-bard-font-size.css'
    ];

    protected $publishables = [

    ];

    public function boot()
    {
        parent::boot();
        // Augmentor::addMark(ArckFontSize::class);
        Augmentor::addExtension('ArckFontSize', new ArckFontSize);

        $this->publishes([
            __DIR__ . '/../public' => public_path('vendor/arckinteractive-bard-font-size'),
        ], 'arckinteractive-bard-font-size');
    }
}
