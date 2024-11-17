+++
date = '2024-11-12T16:15:41-05:00'
draft = false
title = 'Lab 2: Terminal and Command Syntax'
+++


{{< youtube k2Jq_0IPdaQ >}}


##### Objective Focus
**Understand and use essential tools**
: Access a shell prompt and issue commands with correct syntax

[Official RHCSA EX200 Exam Objectives](https://www.redhat.com/en/services/training/ex200-red-hat-certified-system-administrator-rhcsa-exam?section=objectives)

In the video, I also include some setting changes that I found to be useful during my study time. 
- Mute the water drop sound
	- Settings > Sound > System Sounds - *Mute System Sounds*

- Stop the lock screen after being idle
	- Settings > Power > Power Saving Options > Screen Blank - *Set to Never*


From now on, we will always work from the terminal first.

The reason is because the terminal will always be available to us even if there no GUI.

|Command Syntax|
|--------------|
|Comand -option(s) argument|
| $ ls|
| $ ls -l| 
| $ ls -la or ls -al|
| $ ls --all
| $ ls -l /etc


###### **Getting started in the terminal**
{{< highlight type="sh" warp="true" >}}
$ ls
{{< /highlight >}}
: (List) - It is used to show the list and files in directory

{{< highlight type="sh" >}}
$ pwd 
{{< /highlight >}}
: (Print Working Directory) - print name of current/working directory

{{< highlight type="sh" >}}
$ cd
{{< /highlight >}}
: (Change Directory) - change/move between directories

##### **Where to find Terminal/Bash Shortcuts**
- Terminal > Preferences > Help > Keyboard Shortcuts

My most used shortcuts
- Clear - *CRTL + L*
- Erase a line - *Ctrl+U*
- Move to the start of the line - *Ctrl+A*
- Move to the end of the line - *Ctrl+E*

I also mention how to use the auto-tab completions in the above video. 
- that saves a lot of time
