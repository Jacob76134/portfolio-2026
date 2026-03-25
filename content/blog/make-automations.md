---
title: "What I learned shipping real projects with Make.com"
description: "Practical lessons from building production automations."
date: "Mar 2026"
---

After spending the last several months building production automations in Make.com for real clients, here's what I wish I knew at the beginning.

## Having a custom application is a life saver

In my experience with Make, I was linking together a lot of third party tools. However Make always wants you to do things the Make way and your third party SaaS wants you to do things their way. Having restrictions on both ends can create some awkward situations when dealing with complex business logic.

Being able to hook Make up to a custom code base where I could create my own API endpoints was absolutely massive. That way the logic could be handled programmatically in some cases rather than purely Make modules.

Knowing when to escape from Make opens up a new world of opportunities in your automations.

## Execution order will ruin your variables

Make executes modules in order, but when you start branching with routers and filters, it's easy to write a scenario where you're implicitly assuming a certain execution order that isn't guaranteed.

Burn this into your brain: **don't assume the state of a variable set in one branch is visible in another**.

Often you'll find you're wanting to access a variable or property and you simply won't be able to. 
This is a good opportunity to examine your flow and ask yourself a few questions.

1) Am I using too many routers?
2) Could I do this earlier in the flow?
3) Are these the correct modules for what I'm doing?

If you are setting a variable, use it immediately. If you don't need it now, get it later.

## Iterators are your best friend

If you're doing anything with arrays, and you usually are, get comfortable with iterators early. The pattern of Iterator → modules → Aggregator unlocks a huge amount of what makes Make actually powerful.

Leverage the map operator. You can easily set variables to filtered arrays with it and save yourself
a lot of time.

## Final Thoughts

Start by literally writing out your flow. Exploring the documentation thoroughly will help you spend less time forcing a square peg in a round hole. Take time to understand what modules can actually output and how you can manipulate that data. 

Make is a genuinely great tool, it just rewards you for thinking carefully about the architecture before you start dragging modules around.
