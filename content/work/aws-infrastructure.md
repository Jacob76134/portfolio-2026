---
title: "AWS Infrastructure Build"
tags: ["AWS", "CloudFront", "S3"]
order: 3
date: "2024"
published: false
description: "Built AWS infrastructure from scratch at J2 Marketing, enabling cloud hosting for client projects and establishing a new tier of service offering."
---

Spearheaded the move to cloud at J2 Marketing — starting from zero AWS footprint and building out a repeatable infrastructure pattern using CloudFront, S3, and IAM.

## The Problem
The J2 studio would produce large 4k video files for their client, which looked great, but caused long load times or demanded compression to a level that significantly degraded quality.

## What I built

- **CloudFront distributions** for fast global delivery. This dropped load times from 30+ seconds down to under 2 for large videos.
- **S3 bucket structure** for static asset hosting. On legacy WordPress builds, the maximum file size was significantly lower than the high quality videos would allow. The S3 hosting allowed for those larger files to be stored in an accessible way.
- **IAM roles and policies** scoped per client/project/internal user. Put the principle of least privilege in practice here. Creating roles that would not give too much power to non-technical users.
- **Documentation and SOPs** so the rest of the team could deploy confidently.

## Final Thoughts
This was a great opportunity to solve a real problem for the client at very little cost. Rather than upgrading to a premium Dropbox or other SaaS, being able to construct company cloud infrastructure saved money while improving quality. 
