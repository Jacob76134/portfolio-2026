---
title: "Installing Steam on Arch Linux"
description: "Get Steam running in 2 minutes"
date: "April 2026"
draft: false
---

Steam requires multilib, Arch's 32-bit package repository. It's disabled by default.

## Enable multilib

First, open your pacman config. If you don't have a text editor installed yet:

```bash
sudo pacman -S nano
```

Then open the config:

```bash
sudo nano /etc/pacman.conf
```

Scroll toward the bottom and uncomment these two lines by removing the `#`:
[multilib]
Include = /etc/pacman.d/mirrorlist

Save with `Ctrl+O`, exit with `Ctrl+X`, then sync and update:

```bash
sudo pacman -Syu
```

Reboot when it finishes.

## Install Steam

```bash
sudo pacman -S steam
```

## Configure Proton

Open Steam, go to **Settings → Compatibility** and enable **Steam Play for all titles**. For the Proton version, the latest experimental release hasn't failed me yet.

Game on B)
