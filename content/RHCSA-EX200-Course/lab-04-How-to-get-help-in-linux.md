+++
date = '2024-11-16T14:57:58-05:00'
draft = false
title = 'Lab 4: How to Get Help in Linux'
weight =  6
+++

{{< youtube JoC8LjqM5Ao >}}

##### Objective Focus
**Understand and use essential tools**
: Locate, read, and use system documentation including man, info, and files in /usr/share/doc

[Official RHCSA EX200 Exam Objectives](https://www.redhat.com/en/services/training/ex200-red-hat-certified-system-administrator-rhcsa-exam?section=objectives)

Getting help in a Red Hat Linux environment, or any Linux OS, starts with your end goal. 

For example, I need to know the last created directory in user *learners* home directory.
Let us create a new directory

{{< highlight type="sh" warp="true" >}} $ mkdir newdir  {{< /highlight >}}

 - First, we learned about *$ ls* in Lab 2, that will help us list out the files in the directory. 
{{< highlight type="sh" warp="true" >}}
   [learner@server1 ~]$ ls
	Desktop  Documents  Downloads  Music  Pictures  Public  Templates  Videos
	{{< /highlight >}}

- *$ ls* alone does not meet our end goal. 
- From here we have several options
- Help option, usually an option like {{< highlight type="sh" warp="true" >}} $ command  -h --help {{< /highlight >}}
	- Not all commands have the -h, --help option but it is always worth checking
	- Sometimes, just typing in a error with a command will bring this up

- Next are **Man Pages**, short for Manual Pages. 
	- Using man pages is going to be essential to passing the EX200. 
	- These manual pages are going to be avaliable to you during the exam.

- To get the manual page on *$ ls*, we use the systax *$ man "command"*

{{< highlight type="sh" warp="true" >}}
 [learner@server1 ~]$ man ls 
{{< /highlight >}}

- This brings up the manual page for *$ ls*, the table below shows us how to navigate a man page. 


| Buttons      | What they do |
| ----------- | ----------- |
| Up/Down Arrow | Move view of page up and down       |
| Spacebar   | Move down one page        |
| g/G   | Move to top man page/ Move to bottom of man page        |
| q   | exit the man page        |
| /pattern   | Searches forward in man page        |
| ?pattern   |  Searches forward in man page        |
| n/N        | Find next/previous pattern match|
| h   |    help with summary of commands    |


- Lets look at some available options, below are the ones that stand out for our goal

{{< highlight type="sh" warp="true" >}} -l     use a long listing format {{< /highlight >}}
{{< highlight type="sh" warp="true" >}} -t     sort by time, newest first; see --time {{< /highlight >}}



##### How to look for a command searching man pages

{{< highlight type="sh" warp="true" >}} $ man -k "keyword" {{< /highlight >}}
: To search man pages for keywords

{{< highlight type="sh" warp="true" >}}
[learner@server1 ~]$ man -k list
list: nothing appropriate.
 {{< /highlight     >}}

 If the above happens use the following command to index the man pages on the system. 

 {{< highlight type="sh" warp="true" >}} $ mandb {{< /highlight     >}}


#### The /usr/share/doc directory

This directory contains an extensive list of documents related to software and programs on the system. 
Whenever the man pages and comman line tools, be sure to search here for more supporting information

{{< highlight type="sh" warp="true" >}} $ ls -l /usr/share/doc {{< /highlight     >}}


#### Info Pages
- Info pages are a great resource and provide a lot of details
- Getting to info pages are the same as getting to man pages

{{< highlight type="sh" warp="true" >}} $ info ls {{< /highlight     >}}

Press 'h' to get help on info pages and how to navigate


That is it for Lab 4, man pages and help options should suffice for the EX200 and we will continue use them through out the rest of the course. 

Trying to remember every command and avaliable option is impossible, so learning how to be resourceful is the key to completing every task.

I am going to include the docs availiable on Red Hats website [here](https://docs.redhat.com/en).



Read them for a cross reference to the man pages and help options. 

The most important take away is getting comfortable reaching for man pages and internal system tools before googling and reaching out to the internet. :wq
