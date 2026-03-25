---
title: "Airstream Dealer Portal"
tags: ["Laravel", "Laravel Nova"]
order: 1
date: "2025-2026"
published: true
description: "A comprehensive dealer portal for Airstream (Thor Motor Company subsidiary) enabling dealers to manage profiles, configure lead distribution, administer user permissions, and more."
---

Built for Airstream as part of my work at Launch Consulting Group. The portal gives dealers full control over their profiles, lead routing configuration, and team permissions — replacing a fragmented manual process with a single coherent system.

## Stack

- Laravel + Laravel Nova for the admin and portal layer
- SQL migrations for data normalization
- Custom permission system with role-based access

## History / The Problem

The previous version of the software has been in use since 2018 and there have been many hands on the repo since its original incarnation. Complex feature requests had been bolted on to the original software as business needs had shifted from what the original architecture would allow. This all compounded over the years to create a program that gave internal team members and dealers alike a considerable number of pain points.

## Key Features
The following features were all created solely by myself. Additional information available on request.

### File Library
I imagine the state of the file library is something that I'm going to shoot out of bed in a cold sweat and remember. A few hundred thousand files interwoven with FIDs and pivot tables into a digital bowl of spagetti. There were file tags, but also file categories, and the categories could be tagged as well. 

There was a feature in the app called 'File Library', but the attachments for the warranty registration and the notification system used the same table even though they weren't visible in the 'File Library' at all. It took me days to even figure out what was in this table and how it was all connected. I felt like a madman trying to create a chart to visualize what was going on. 

After separating out all of the data, creating new tables for files that belonged to other features, and creating migration scripts, I was able to work on actually improving the front-end UX. Instead of a bargain bin style jumble of files with limited search functionality, I was able to organize them into a file system using Laravel Nova. Folders would now be the primary way to navigate through the system. You could get a list of folders, open them and see their associated files, as well as any sub-folders. Of course you can search directly for a file and a folder as well.

The end result was achieved by separating concerns, building for scalability, and documenting clear purposes for feature sets. I hope to support this software for a long time and never want to see this useful feature as unkempt as when I found it. 

### Dealer Allowance
The dealer allowance feature known as APA is a way for dealerships to be awarded funds towards their marketing budget. When I first investigated this feature trying to understand what it did was extremely difficult. There were funds, expenses, and invoices which all seemed to tell a different story about where the data was going and what about it was important.

When working with key financial stakeholders I discovered that the software did not allow for special promotions that were commonly run which tweaked the rewards for dealerships. This is when I knew there needed to be a huge shift. Half the system was built to account for a lack of versitillity, but instead of starting fresh, new band-aids were slapped on. 

This created a system where the special items would have to be logged directly into the CRM which created a discrepancy in the account balance shown to the dealers within the software. For years the solution had been to export and import a CSV manually every month. The downside was that the accounts were only accurate once a month, this led to a whole slew of problems including dealers requesting to use funds they didn't have.

The solution involved creating a multi-step process where dealers could mark their requests as belonging to one of the promotions that entitled them to additional rewards. This would then notfiy a sales administrator who could verify the request was legitimate, and then send it down the normal approval chain. 

Allowing for an additional special promotion audit added an additional step to the process, but was well worth the modifications. Dealers weren't happy because they couldn't see their correct balance. Internal teams didn't like the busy work. Now the program works for both of them. This is what keeps me in this line of work.

### Permission System
I had a unique opportunity build a permission system completely from scratch. The simplicity of role management and programmatic access within the application were my main priorities.

The app’s authorization is built around access levels, not per-user permission rows. Each access level has a single role_permissions row whose columns are boolean flags, one column per named permission from the config. Users inherit whatever their access level allows; Super Admin and Admin names short-circuit most checks so they effectively have full Nova and middleware access without toggling every flag.

Day-to-day enforcement is concentrated in Laravel Nova. The shared Nova Resource base class maps each resource to a permission prefix (with a few special cases) and gates view/create/update/delete on keys like dealers.view or apa_expenses.update. The admin menu hides sections using the same hasPermission helpers. Separately, a flag-style permission associated_only narrows many lists and exports to dealers linked to the user. A permissions:sync Artisan command keeps the database columns in sync with the config and can reapply role templates for known access level names.

Overall, I'm happy with this system as new roles can easily be created and assigned through a UI and limiting access is extremely simple.

Note to self - write a blog post on this and link it back here.

### Final Thoughts
This is my favorite project I've touched to date. Communicating across departments with different stakeholders to gather requirements was genuinely exciting. These were pain points 5+ years old. Being able to translate those needs into code and deliver something that genuinely improves the day to day work lives of people across the country is a rare opportunity and one I do not take for granted.