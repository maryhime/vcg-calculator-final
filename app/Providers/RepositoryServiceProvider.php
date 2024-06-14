<?php

use App\Repositories\Service\IServiceRepository;
use App\Repositories\Service\ServiceRepository;
use App\Repositories\Setting\ISettingRepository;
use App\Repositories\Setting\SettingRepository;
use App\Services\Service\IServiceServices;
use App\Services\Service\ServiceServices;
use App\Services\Setting\ISettingService;
use App\Services\Setting\SettingService;
use Illuminate\Support\ServiceProvider;

class RouteServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->registerRepository();
        $this->registerServices();
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
    }

    protected function registerRepository()
    {
        $repositories = [
            IServiceRepository::class => ServiceRepository::class,
            ISettingRepository::class => SettingRepository::class,
        ];

        foreach ($repositories as $repositoryKey => $repositoryValue) {
            $this->app->bind($repositoryKey, $repositoryValue);
        }
    }

    protected function registerServices()
    {
        $services = [
            IServiceServices::class => fn ($app) => new ServiceServices($app->make(IServiceServices::class)),
            ISettingService::class => fn ($app) => new SettingService($app->make(ISettingService::class)),
        ];

        foreach ($services as $serviceKey => $serviceValue) {
            $this->app->bind($serviceKey, $serviceValue);
        }
    }
}
