---
title: "Airstream Factory Tour Registration"
tags: ["HubSpot", "Make.com", "Airtable"]
order: 2
date: "March 2026"
published: true
description: "End-to-end booking system with a live calendar frontend, attendee limit enforcement, and a HubSpot + Make + Airtable backend stack."
---

A full registration system for factory tours — built on a HubSpot + Make.com + Airtable stack with a custom frontend calendar.

## Stack

- Airtable as the data layer for tour slots and registrations
- Make.com for automation between the frontend, Airtable, and HubSpot
- HubSpot for contact management and follow-up sequences
- Vanilla JS frontend with a calendar booking interface

## Key challenges

The front-end for this system to work needed to live inside a 'code block' module on a Wordpress site, HTML and vanilla JavaScript only. I'm usually able to pull in Vue.JS via CDN at minimum, so this was a genuine constraint. Pulling calendar dates from Airtable and mapping them to a pure JS calendar was certainly a test of my fundamentals and extremely rewarding to pull off. 

The core challenge was connecting Airtable's event data to HubSpot without losing it as the source of truth. HubSpot's date selection field allowed for too much freedom. This is where the core user flow developed. When the user selected a date from the calendar, they are presented with multiple tour options depending on the availibilty pulled from Airtable. After selecting the event they wanted to attend, hitting next, a HubSpot form would appear with their tour information autofilled and uneditable. Using the v4 form API was a bit tricky to get it auto filled, but essential for keeping Airtable as the single source of truth. 
