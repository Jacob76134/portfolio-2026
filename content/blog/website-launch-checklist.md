---
title: "Another Website Launch Checklist"
description: "The critical pieces you want in place when launching a production website."
date: March 2026
draft: true
---

I launched my first site in 2016 as a personal blog that is still active today, iykyk. In the 10 years since then the number of production deployments under my belt has only grown. When you launch a side project it's easy to overlook critical details when you initially go live and that's no problem, it's your thing. There's nothing holding you to perfection.

However, when you are releasing a commercial site for your client or company there is no room for error.

The considerations for each project are going to be different. The following list contains the ones that seem to always come up.

## This is a Monday kind of task 
This one is obvious. You get burned by it once and then you make sure it never happens again. "Let's launch Friday and end the week with a massive win!" thinks the PM. Congratulations developers, you just lost your weekend. Launch on a Monday.

## Control of your DNS
If you're working with a non technical client, or really any client, make this an early part of your process. Sometimes you'll get that IT contact who is ready to point nameservers when you need it, best case scenario. Other times it's months long back and forth coordinating a transfer or getting login details. 

Make this a priority, not an afterthought. 

## Check Your Environment Variables
Production is when "Well it works on my machine" doesn't cut it. If you have a local, QA, and main branch, it can be easy to forget that the .env is in your .gitignore. Before you hit that go live button do a quick triple check your environment variables are in place. More times than not it's gonna be missing one or two. 

## QA Again
Every link. Every page. Click them. You think they're right and one of them is not. Don't risk the ire of that one stakeholder who cares about that one specific feature. 
Take the time to do Safari and Mozilla checks on mobile. You should do that in dev of course but take another pass before publish. Get your hands on a iPhone 7 or similar. If it looks good on that, it'll look good on anything. 

## Celebrate
Releasing a site can be extremely anticlimactic as a developer, but is something so intimate. You took this thing that you poured tens to hundreds of hours into and sent it off into the world. Sometimes it's just a checkbox on the PMs list. But really its a monument to your dedication and craft and it deserves to be celebrated. Share it with your family and friends and show off a tangible product that you contributed to. 

-Just some quick thoughts from me this Monday. I moved this weekend and have been playing catchup so thanks to all who tuned in!