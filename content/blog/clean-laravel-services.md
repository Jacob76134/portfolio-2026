---
title: "How to Keep Clean Services in Laravel"
description: "Practical ideology to leverage services in your projects"
date: "March 2026"
draft: true
---

What should I be putting in my service class? What if a controller needs to use multiple services? What if a service needs to use a service? When starting out with Laravel I wasn't used to using the service structure for functions. I often bloated them or didn't use them when I could have. Below are some tips on how to use services in your project so that you can get the most out of them.

## The core of services
When your model or controller is getting cluttered with functions, it's time for a service. They're a clean way to separate business logic from files that should be focused on other things.

A controller's job is to handle the request and return a response. A model's job is to represent your data. Neither of them should care about how a lead gets scored, how an email gets formatted, or how an external API gets called. That's what services are for.

## One responsibility per service
The fastest way to defeat the purpose of a service is to turn it into a dumping ground. If you find yourself naming something `HelperService` or `UtilityService`, that's a sign you're doing it wrong.

Name your services after what they do. `LeadScoringService`. `InvoiceService`. `HubSpotSyncService`. If you can't name it cleanly, the scope isn't defined yet.

## Services can use services
This is where it clicks for a lot of people. There's nothing wrong with injecting one service into another. Laravel's service container handles this for you automatically.
```php
class DealerOnboardingService
{
    public function __construct(
        protected NotificationService $notifications,
        protected HubSpotService $hubspot,
    ) {}

    public function onboard(Dealer $dealer): void
    {
        $this->hubspot->createContact($dealer);
        $this->notifications->sendWelcome($dealer);
    }
}
```

The onboarding service doesn't care how notifications get sent or how HubSpot works. It just orchestrates. Keep that separation and your code stays readable six months later.

## Don't over-extract
Not every function needs a service. If a piece of logic is only ever used in one place and it's three lines long, keep it where it is. Services are for logic that is reused, complex, or needs to be tested in isolation.

The goal is clarity, not architecture for its own sake.

## Testing gets easier
One of the biggest payoffs of clean services is testability. When your business logic lives in a dedicated class, you can unit test it directly without spinning up HTTP requests or touching the database.

If your logic is buried in a controller, you're testing everything at once and making your life harder than it needs to be.

---

Services are one of those things in Laravel that seem optional until you've worked on a codebase that ignored them. Once you've untangled a 400 line controller, you don't go back.